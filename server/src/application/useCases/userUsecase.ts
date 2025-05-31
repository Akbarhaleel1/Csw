import { generateOtpWithTime } from "../../utils/generateOtp";
import otpSending from "../../utils/otpSending";
import { registerUser } from "../../domain/entities/signUpUser";
import { IUserRepository } from "../../infastructure/interface/IUserRepository";
import { IuserUsecase } from "../interface/IuserUsecase";


export class UserUsecase implements IuserUsecase {
  private repository: IUserRepository;
  constructor(repository: IUserRepository) {
    this.repository = repository;
  }
  async userExists(email: string) {
    const user = await this.repository.findUserExists(email);
    console.log("user is ", user);

    return user ? user : null;
  }
  async registerUser(values: registerUser) {
    const { otp, creationTime } = generateOtpWithTime();
    values.otp = otp;
    values.createdAt = creationTime;

    const user = await this.repository.saveNewUser(values);
    console.log("Chenking");

    otpSending(values.email, otp);
    return user ? user : null;
  }
  async otpVerification(otp: string) {
    console.log("Otp useCase working", otp);

    const userData = await this.repository.otpVerify(otp);
    console.log("userdaaaaaaaa", userData);

    return userData ? userData : null;
  }
  async loginVerification(email: string, password: string) {
    console.log("Login verification on usecase", email);
    const checkUser = await this.repository.userLogin(email, password);
    if (!checkUser) {
      return null;
    }
    return checkUser;
  }

  async getUser(userId: string) {
    const userData = await this.repository.getUserById(userId);
    if (!userData) {
      return null;
    }
    return userData;
  }

  async refreshTokenUsecase(oldToken: string) {
    if (!oldToken) {
      return null;
    }
    const checkToken = await this.repository.refreashToken(oldToken);
    if(!checkToken){
        return null
    }else{
        console.log('refresh token creaedd usecase');
        
        return checkToken
    }
  }

async studentFormUsecase(values: any, files: any) {
    // First check if a student form with this email already exists
    const existingForm = await this.repository.findStudentFormByEmail(values.email);
    
    if (existingForm) {
        // Update existing form
        const updatedForm = await this.repository.updateStudentForm(existingForm._id, values, files);
        return updatedForm;
    } else {
        // Create new form
        const result = await this.repository.studentFormRepo(values, files);
        return result;
    }
}
async favouritesUseCase(userId:string,favourites:number[]) {
   if (favourites.length > 5) {
      throw new Error('Maximum 5 favourites allowed');
    }
    return this.repository.favouritesRepository(userId, favourites);
}
async AdminDocumentReviewUseCase() {
    return this.repository.AdminDocumentReviewRepository();
}
}
