import {
  generateRefreshToken,
  generateToken,
  verifyToken,
} from "../../utils/authUtlis";
import { hashPassword } from "../../utils/passwordUtils";
import { registerUser } from "../../domain/entities/signUpUser";
import { User } from "../database/model/userModel";
import { IUserRepository } from "../interface/IUserRepository";
import bcrypt from "bcrypt";

export class UserRepository implements IUserRepository {
  async findUserExists(email: string) {
    const user = await User.findOne({ email });
    return user;
  }
  async saveNewUser(values: registerUser) {
    try {
      const {
        firstname,
        lastname,
        email,
        password,
        phonenumber,
        otp,
        createdAt,
      } = values;

      console.log("Received values:", values);
      let hashedPass;

      let existingUser = await User.findOne({ email });
      if (existingUser) {
        if (firstname && lastname && password && phonenumber) {
          hashedPass = await hashPassword(password);
          const stringMobile = phonenumber.toString();
          existingUser.firstname = firstname;
          existingUser.lastname = lastname;
          existingUser.password = hashedPass;
          existingUser.phonenumber = stringMobile;
        }
        existingUser.otp = otp;
        existingUser.createdAt = createdAt;

        await existingUser.save();
        console.log("Updated existing user with new details:", existingUser);
        return existingUser;
      } else {
        hashedPass = await hashPassword(password);
        const newUser = new User({
          firstname,
          lastname,
          email,
          password: hashedPass,
          phonenumber,
          isVerified: false,
          otp,
          createdAt,
        });

        console.log("Created new user:", newUser);
        await newUser.save();
        return newUser;
      }
    } catch (error) {
      console.error("Error saving user:", error);
      return null;
    }
  }

  async otpVerify(otp: any) {
    const otpObject = otp;
    const otpString = otpObject.otp;
    let otpNumber = parseInt(otpString, 10);
    console.log("Otp repositroy working", otpNumber);
    const user = await User.findOne({ otp: otpNumber });
    console.log("otp userdate is", user);
    console.log("user.createdAt", user?.createdAt);

    if (user && user.createdAt) {
      console.log('firsssssssssssssssst')
      const createdAt = new Date(user.createdAt);
      const newTime = new Date();
      const timeDifference = newTime.getTime() - createdAt.getTime();
      const difference = Math.floor(timeDifference / (1000 * 60));
      console.log('timeDifference', timeDifference)
      console.log('difference', difference)
      if (difference > 5) {
        return null;
      }
      user.isVerified = true;
            console.log('user.isVerified', user.isVerified)

      user.otp = 0;
      await user.save();
      console.log("final user is", user);

      return user ? user : null;
    } else {
      return null;
    }
}

  async userLogin(email: string, password: string) {
    try {
      const userDoc = await User.findOne({ email });

      if (!userDoc) {
        return { error: 'Email is not found' };
      }

      if (!userDoc.password) {
        return { error: 'No password set for this user' };
      }
      let hashedPass = userDoc.password;
      const isMatch = await bcrypt.compare(password, hashedPass);

      if (!isMatch) {
        return { error: 'Invalid password' };
      }
      const user = {
        _id: userDoc._id,
        email: userDoc.email,
        roles: userDoc.roles,
      };
      const token = generateToken(user);
      return { token, userDoc };
    } catch (err) {
      console.error("error", err);
      return { error: 'An unexpected error occurred' };  
    }
  }

  async getUserById(userId: string) {
    const user = await User.findById(userId);
    if (!user) {
      return null;
    }
    return user;
  }
  async refreashToken(oldToken: string) {
    const decodedToken = verifyToken(oldToken);
    if (typeof decodedToken !== "string" && decodedToken.id) {
      const existingUser = await User.findById(decodedToken.id);
      if (!existingUser) {
        throw new Error("user not found");
      }
      const newToken = generateRefreshToken(existingUser);
      return newToken;
    } else {
      throw new Error("Invalid token payload");
    }
  }
}
