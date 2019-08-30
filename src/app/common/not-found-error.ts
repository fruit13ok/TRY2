// custom error class
// expected 404 error
import { AppError } from './app-error';
export class NotFoundError extends AppError {}