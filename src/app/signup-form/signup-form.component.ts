import { Component } from '@angular/core';
// reactive form don't use angular form template directives, so need to import FormGroup and FormControl
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  // create form group, it take argument AbstractControl, it is parent class of FormGroup and FormControl,
  // we create form control objects in the form group, it can have subgroup too like this,
  // 'username': new FormGroup({'firstname': new FormControl(), 'lastname': new FormControl()}),
  // use FormControl arguments to set validation, 
  // FormControl arguments:
  //    formState:                        init value
  //    pass Validators's function(s):    like html5 attributes
  // import Validators
  // for multiple Validators use array of Validators
  // add / import custom Validator UsernameValidators
  // add async Validator 'shouldBeUnique' in 3rd argument
  // add subgroup "account" to this form group, move username and password in subgroup,
  form = new FormGroup({
    // 'username': new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(3),
    //   UsernameValidators.cannotContainSpace
    // ], UsernameValidators.shouldBeUnique),
    // 'password': new FormControl('', Validators.required)
    'account': new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ], UsernameValidators.shouldBeUnique),
      'password': new FormControl('', Validators.required)
    })
  });
  // use ES6 "get" keyword to define a getter method,
  // to call username property need to use subgroup property
  get username(){
    // return this.form.get('username');
    return this.form.get('account.username');
  }
  login(){
    // authService is simulating call to server,
    // pass form object as json that has username and password,
    // form.setErrors() set error in form level for any fields, for individual field use username.setErrors()
    // let isValid = authService.login(this.form.value);
    // if(!isValid){
    //   this.form.setErrors({
    //     invalidLogin: true
    //   });
    // }
    // don't have authService yet, for now just always show error message
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
