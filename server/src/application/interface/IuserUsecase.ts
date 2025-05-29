import { returnUser } from "../../domain/entities/returnUser";
import { registerUser } from "../../domain/entities/signUpUser";
import {UserDocument} from '../../infastructure/database/model/userModel'

export interface UserLogin{
    token?: string;
    userDoc?: UserDocument;
    error?: string;
}

export interface IuserUsecase {
    userExists(email:string): Promise<returnUser | null>;
    registerUser(values:registerUser): Promise<returnUser|null> 
    otpVerification(otp:string): Promise<returnUser|null> 
    loginVerification(email:string,password:string): Promise<UserLogin| null>
    getUser(userId:any): Promise<UserDocument|null>
    refreshTokenUsecase(oldToken:string): Promise<UserLogin| null>
    studentFormUsecase(values:string,files:any): any
}