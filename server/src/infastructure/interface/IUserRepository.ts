import { registerUser } from '../../domain/entities/signUpUser';
import {UserDocument} from '../database/model/userModel';

export interface UserLoginResponse {
    token?: string;
    userDoc?: UserDocument;
    error?: string;
}

export interface IUserRepository {
    findUserExists(email:string): Promise<UserDocument | null>;
    saveNewUser(values:registerUser): Promise<UserDocument| null>
    otpVerify(otp:any): Promise<UserDocument|null> 
    userLogin(email:string,password:string): Promise<UserLoginResponse | null>
    getUserById(userId:string): Promise<UserDocument | null>
    refreashToken(token: string): Promise<any | null>
    studentFormRepo(values:string, files: any): Promise<any | null>
    findStudentFormByEmail(email:string): Promise<any | null>
    updateStudentForm(id: string, values: any, files: any): Promise<any | null>
}