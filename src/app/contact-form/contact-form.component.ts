import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  // for drop down list
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }
  ];

  // argument x is ngModel object, aka form control object, shows form interaction
  log(x){
    console.log(x);
  }
  // log out ngForm object
  submit(f){
    console.log(f);
    console.log(f.value.firstName);
  }
}
