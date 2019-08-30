// custom error class,
// unexpected error,
// take in original error
export class AppError {
    constructor(public originalError?: any){}
}