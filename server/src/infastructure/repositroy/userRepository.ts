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
import StudentFormSchema from "../database/model/StudentFormSchema";
import { uploadS3Image } from "../../utils/s3/s3";
import { Favourite } from "../database/model/favourites";

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
      console.log("firsssssssssssssssst");
      const createdAt = new Date(user.createdAt);
      const newTime = new Date();
      const timeDifference = newTime.getTime() - createdAt.getTime();
      const difference = Math.floor(timeDifference / (1000 * 60));
      console.log("timeDifference", timeDifference);
      console.log("difference", difference);
      if (difference > 5) {
        return null;
      }
      user.isVerified = true;
      console.log("user.isVerified", user.isVerified);

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
        return { error: "Email is not found" };
      }

      if (!userDoc.password) {
        return { error: "No password set for this user" };
      }
      let hashedPass = userDoc.password;
      const isMatch = await bcrypt.compare(password, hashedPass);

      if (!isMatch) {
        return { error: "Invalid password" };
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
      return { error: "An unexpected error occurred" };
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
async studentFormRepo(values: any, files: any) {
  try {
    console.log("studentFormRepo values is", values);
    console.log("studentFormRepo files is", files);

    const requiredFields = [
      "personalPhoto",
      "passportCopy",
      "academicCertificate",
      "residencyPermit",
    ];

    // Ensure all required files are provided
    for (const field of requiredFields) {
      if (!files[field] || !files[field][0]) {
        throw new Error(`Missing required file: ${field}`);
      }
    }

    // Upload each file to S3 and get the public URL
    const uploadedFiles: Record<string, string> = {};

    for (const field of requiredFields) {
      const file = files[field][0];
      const uploadResult = await uploadS3Image(file);

      if (!uploadResult?.Location) {
        throw new Error(`Failed to upload ${field}: ${uploadResult?.msg}`);
      }

      uploadedFiles[field] = uploadResult.Location; // S3 file URL
    }

    // Create a new student form with S3 URLs
    const studentFormData = {
      ...values,
      dateOfBirth: new Date(values.dateOfBirth),
      personalPhoto: uploadedFiles.personalPhoto,
      passportCopy: uploadedFiles.passportCopy,
      academicCertificate: uploadedFiles.academicCertificate,
      residencyPermit: uploadedFiles.residencyPermit,
    };

    const studentForm = new StudentFormSchema(studentFormData);
    const savedForm = await studentForm.save();

    console.log("Student form saved successfully:", savedForm);
    return savedForm;
  } catch (error) {
    console.error("Error saving student form:", error);
    throw error;
  }
}


  async findStudentFormByEmail(email: string) {
    return await StudentFormSchema.findOne({ email });
  }
async favouritesRepository(userId: string, favourites: number[]) {        
  try {
    const updated = await Favourite.findOneAndUpdate(
      { userId },
      { favourites },
      { upsert: true, new: true }
    );

    return updated || [];
  } catch (error) {
    console.error('Error updating favourites:', error);
    throw new Error('Failed to update favourites');
  }
}


 async updateStudentForm(id: string, values: any, files: any) {
  try {
    const updateData: any = {
      ...values,
      dateOfBirth: new Date(values.dateOfBirth),
    };

    // Handle optional file updates: upload to S3 if provided
    const fileFields = [
      "personalPhoto",
      "passportCopy",
      "academicCertificate",
      "residencyPermit",
    ];

    for (const field of fileFields) {
      if (files[field] && files[field][0]) {
        const file = files[field][0];
        const uploadResult = await uploadS3Image(file);

        if (!uploadResult?.Location) {
          throw new Error(`Failed to upload ${field}: ${uploadResult?.msg}`);
        }

        updateData[field] = uploadResult.Location; // Save URL
      }
    }

    const updatedForm = await StudentFormSchema.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
    });

    console.log("Student form updated successfully:", updatedForm);
    return updatedForm;
  } catch (error) {
    console.error("Error updating student form:", error);
    throw error;
 }
 
}

 async AdminDocumentReviewRepository() {
   try {
     const response = await StudentFormSchema.find({});
     console.log('AdminDocumentReviewRepository response is', response);
     return response
  } catch (error) {
    console.error("Error updating student form:", error);
    throw error;
 }
}

}
