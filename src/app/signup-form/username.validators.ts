import { AbstractControl, ValidationErrors } from '@angular/forms';

// use interface to define validator function ValidatorFn,
export class UsernameValidators {
    // this is the format of a ValidatorFn
    // static make this method accessible without create object
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0){
            // this is the format of a ValidatorErrors
            // to return complex object
            // return {minlength: {
            //     requiredLength: 10,
            //     actualLength: control.value.length
            // }}
            return {cannotContainSpace: true};
        }
        return null;
    }
    // Async Validator with Promise error or null
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        // return type is a Promise, 
        // resolve returning value to caller of this promise when done,
        // reject returning error message to caller of this promise when done,
        return new Promise((resolve,reject) => {
            // simulate call to server, 
            // if input match existing data 'liu', resolve show User name is already taken,
            // else resolve show nothing
            setTimeout(() => {
                console.log('2 seconds up');
                if(control.value === 'liu'){
                    resolve({shouldBeUnique: true});
                } else {
                    resolve(null);
                }
            }, 2000)
        });
    }
}