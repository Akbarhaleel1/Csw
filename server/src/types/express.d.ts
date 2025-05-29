import { UserPayload } from '../utils/authMiddleware';
import { File } from 'multer';

declare global {
  namespace Express {
    interface Request {
      usersData?: UserPayload;

      // Add this 👇
      files?: {
        [fieldname: string]: File[];
      };
    }
  }
}
