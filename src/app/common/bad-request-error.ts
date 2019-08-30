// custom error class
// expected 400 error
import { AppError } from './app-error';
export class BadRequestError extends AppError {}