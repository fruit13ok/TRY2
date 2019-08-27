import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl){
        return new Promise((resolve, reject) => {
            if(control.value !== '1234'){
                resolve({ invalidOldPassword: true });
            } else {
                resolve(null);
            }
        });
    }
    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value){
            return { _passwordsShouldMatch: true };
        } else {
            // don't return null
            return { _passwordsShouldMatch: false };
        }
    }
}