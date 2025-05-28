import express from 'express';
const router = express.Router();

import { UserRepository } from '../../infastructure/repositroy/userRepository'; 
import { UserUsecase } from '../../application/useCases/userUsecase';
import { UserController } from '../controllers/userController';

const repository = new UserRepository();
const userUsecase = new UserUsecase(repository);
const controller = new UserController(userUsecase);

router.post('/signup', (req, res, next) => controller.registerUser(req, res, next));
router.post('/verify-otp', (req, res, next) => controller.otpConfirm(req, res, next));
router.post('/login', (req, res, next) => controller.login(req, res, next));
router.post('/refreshToken', (req, res, next) => controller.refreshToken(req, res, next));

export default router;