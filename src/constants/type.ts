import {Request} from 'express';
export interface CustomRequest extends Request {
  files?: Express.Multer.File[];
}