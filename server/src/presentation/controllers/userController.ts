import { NextFunction, Request, Response } from "express";
import { IuserUsecase } from "../../application/interface/IuserUsecase";
import util from 'util';

export class UserController {
  constructor(private userUsecase: IuserUsecase) {}

  registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log('userData', req.body.userData)
      const { firstname, lastname, email, password, phonenumber, role } = req.body.userData;
      const values = { firstname, lastname, email, password, phonenumber, role };

      const existingUser = await this.userUsecase.userExists(email);

      if (existingUser) {
        console.log("User already exists");
        res.status(400).json({ message: "User already exists" });
        return;
      }
      console.log('ssssssssssssssss')
      const response = await this.userUsecase.registerUser(values);
      res.status(200).json({ message: response });
    } catch (error) {
      next(error);
    }
  }

  otpConfirm = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log("OTP Controller working");
      const values = req.body;
      const user = await this.userUsecase.otpVerification(values);
      
      console.log("User data:", user);
      if (!user) {
        res.status(400).json({ message: "Invalid or expired OTP" });
        return;
      }
      
      res.status(200).json({ 
        message: "OTP Verification Successful", 
        user 
      });
    } catch (error) {
      next(error);
    }
  }

  login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log("Login endpoint working");
      const { email, password } = req.body;
console.log('email', email)
console.log('password',  password)
      const result = await this.userUsecase.loginVerification(email, password);
      console.log("Login result:", result);

      if (result && "error" in result) {
        res.status(400).json({ error: result.error });
        return;
      } 
      
      if (result) {
        res.status(200).json({ 
          user: result.userDoc, 
          token: result.token 
        });
        return;
      }
      
      res.status(400).json({ message: "Unexpected error occurred" });
    } catch (error) {
      console.error("Error during login:", error);
      next(error);
    }
  }

  getUserID = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // const userId = req.usersData?.id;
      const userId = '';

      if (!userId) {
        res.status(404).json({ message: "User ID not found" });
        return;
      }

      const result = await this.userUsecase.getUser(userId);
      if (!result) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      
      res.status(200).json({ user: result });
    } catch (error) {
      next(error);
    }
  }

  refreshToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log("Refresh token endpoint working");
      const { oldToken } = req.body;
      const result = await this.userUsecase.refreshTokenUsecase(oldToken);

      if (result) {
        console.log("Refresh token result:", result);
        res.status(200).json({ 
          user: result.userDoc, 
          token: result.token 
        });
        return;
      }
      
      res.status(401).json({ message: "User does not exist" });
    } catch (error) {
      next(error);
    }
  }
  
studentForm = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log("🌐 studentForm is working");

    // Uploaded files
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    console.log('📦 Form Body:', util.inspect(req.body, { showHidden: false, depth: null, colors: true }));
    console.log('📁 Uploaded Files:', files);

    const result = await this.userUsecase.studentFormUsecase(req.body, files);

    // Determine if this was an update or creation
    const isUpdate = result?.__v !== undefined && result.__v > 0; // Check if document has been versioned
    const message = isUpdate 
      ? "Student form updated successfully!" 
      : "Registration submitted successfully! Your form has been sent to the admin for review.!";

    res.status(200).json({ 
      success: true,
      message,
      data: result 
    });
  } catch (error) {
    console.error('❌ Error in studentForm:', error);
    next(error);
  }
}
  
}