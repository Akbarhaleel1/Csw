import express from 'express';
import multer from 'multer';

const router = express.Router();

import { UserRepository } from '../../infastructure/repositroy/userRepository'; 
import { UserUsecase } from '../../application/useCases/userUsecase';
import { UserController } from '../controllers/userController';

const repository = new UserRepository();
const userUsecase = new UserUsecase(repository);
const controller = new UserController(userUsecase);

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

const formUpload = upload.fields([
  { name: 'personalPhoto', maxCount: 1 },
  { name: 'passportCopy', maxCount: 1 },
  { name: 'academicCertificate', maxCount: 1 },
  { name: 'residencyPermit', maxCount: 1 },
  { name: 'additionalDoc1', maxCount: 1 },
  { name: 'additionalDoc2', maxCount: 1 },
]);

router.post('/studentForm', formUpload, (req, res, next) => controller.studentForm(req, res, next));
router.post('/signup', (req, res, next) => controller.registerUser(req, res, next));
router.post('/verify-otp', (req, res, next) => controller.otpConfirm(req, res, next));
router.post('/login', (req, res, next) => controller.login(req, res, next));
router.post('/refreshToken', (req, res, next) => controller.refreshToken(req, res, next));

router.post('/favourites', (req, res, next) => controller.favourites(req, res, next));

router.post('/create-order', (req, res, next) => controller.createOrder(req, res, next));
router.post('capture-order/:orderId', (req, res, next) => controller.captureOrder(req, res, next));


export default router;