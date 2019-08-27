import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form2',
  templateUrl: './new-course-form2.component.html',
  styleUrls: ['./new-course-form2.component.css']
})
export class NewCourseForm2Component {
  // when dealing with array of FormControl use FormArray instead of FormControl,
  // 1st argument of FormArray is AbstractControl[] array,
  form = new FormGroup({
    topics: new FormArray([])
  });
  // use getter to refactor long form.get('topics') code
  get topics () {
    return this.form.get('topics') as FormArray;
  }
  // the type that pass in is HTMLElement,
  // HTMLElement don't have property value,
  // HTMLInputElement is child of HTMLElement has property value,
  // so cast HTMLElement to HTMLInputElement,
  // https://stackoverflow.com/questions/52325814/why-we-are-using-htmlinputelement-in-typescript
  // access topic with AbstractControl get(),
  // AbstractControl don't have array method like push(), so cast to its child FormArray,
  addTopic(topic: HTMLInputElement){
    // we push a control to the array, 
    // if our control is single FormControl then push FormControl,
    // if our control is a group of controls then push FormGroup,
    // use topic.value to initialize our new FormControl with value in the input field, and reset to empty input field,
    // (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
  // remove a FormControl object from array
  // use AbstractControl get() ".control" to return all the controls
  // use .indexOf(topic) to find index of given topic in array,
  // then remove it from array,
  // NOTE: we are using FormArray NOT javascript array, so look up its method, because code hint will not show it
  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
