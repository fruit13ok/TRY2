import { SoursesService } from './courses.service';
import { Component } from '@angular/core';

// interpolation just syntactic sugar, it is shorthand for property binding
// {{ imageUrl }}
// or 
// [src]='imageUrl'
// EX: to compare both
// <img src='{{ imageUrl }}'/>
// <img [src]='imageUrl'/>
// <h1>{{ fullName }}</h1>
// <h1 [innerHtml]='fullName'></h1>
// <button disabled='{{isDisabled}}'>
// <button [disabled]='isDisabled'>Try Me</button>

@Component({
  selector: 'courses',
  template: `
    <h2>Custom Pipe</h2>
    {{ longText | summary:10 }} <br/>
    <h2>Pipes format</h2>
    {{ course.title | uppercase | lowercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'2.1-1' }} <br/>
    {{ course.price | currency:'AUD':'symbol':'3.2-2'}} <br/>
    {{ course.releaseDate | date:'shortDate' }}

    <h2>Displaying Data and Handling Events and Binding</h2>
    <input (keyup)='onKeyUp($event)' />
    <input #email (keyup.enter)='onKeyUp2(email.value)' />

    <input [value]='myemail' (keyup.enter)='onKeyUp3()' />
    <input [value]='myemail' (keyup.enter)='myemail = $event.target.value; onKeyUp3()' />
    <input [(ngModel)]='myemail' (keyup.enter)='onKeyUp3()' />
    <h2>Add Bootstrap</h2>
    <div (click)='onDivClicked()'>
        <button class='btn btn-primary' [class.textColor]='isActive' (click)='onSave($event)'>Save</button>
    </div>
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor='let course of courses' [style.backgroundColor]="isActive ? 'blue' : 'green'">
            {{ course }}
        </li>
    </ul>
    <img src='{{ imageUrl }}'/>
    <img [src]='imageUrl'/>
    <table>
        <tr>
            <th [attr.colspan]='colSpan'>Info</th>
        </tr>
        <tr>
            <th [attr.rowspan]='rowSpan'>Contacts</th>
            <td>friot13ok@gmail.com</td>
        </tr>
        <tr>
            <td>yiliu00001@gmail.com</td>
        </tr>
    </table>
  `
})

export class CoursesComponent {
    title = 'list of courses';
    imageUrl = 'https://via.placeholder.com/200x100.png/FFFF00/000000?text=learn%20Angular';
    colSpan = 2;
    rowSpan = 2;
    isActive = true;
    myemail = 'me@example.com';
    courses;
    // courses = ['course1','course2','course3'];
    course = {
        title: 'angular course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2019, 7, 28)
    };
    longText = 'hnolh giah ailhgli ahglia ugiauszg woaliughwoalizug hwaoiug a iugahi ugahilu kasiluhwasigw9s ug ziu goiwaug aoiu gahsoiu yawi ghwaosi uwhasgo iuwyah iuaw iuars hgairus aris uhwaoi srughwoirsaugy aosiughasi guhwas giuh igh aiu h9iws yg';

    onSave($event) {
        $event.stopPropagation();
        console.log('button was clicked', $event);
    }
    // button click will bubble up to div event if not prevent
    onDivClicked() {
        console.log('div was clicked');
    }
    onKeyUp($event) {
        if ($event.keyCode === 13) {
            console.log('enter was pressed, value: ', $event.target.value);
        }
    }
    onKeyUp2(email) {
        console.log('enter was pressed, email: ', email);
    }
    onKeyUp3() {
        console.log('enter was pressed, email: ', this.myemail);
    }

    // constructor(){
        // let service = new SoursesService();
    constructor(service: SoursesService){
        this.courses = service.getCourses();
    }
}