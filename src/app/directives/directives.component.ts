import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  courses = [
    { id: 1, name: 'course1 '},
    { id: 2, name: 'course2 '},
    { id: 3, name: 'course3 '},
    { id: 4, name: 'course4 '}
  ];

  viewMode = '';

  canSave = true;

  task = {
    title: 'Review applications',
    assignee: {
      name: null//'John Smith'
    }
  };

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.courses.push({id: 5, name:'course5'});
  }
  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onChange(course){
    course.name = 'updated';
  }
  // this method mimicking resetting new array, to cause rerender while list
  loadCourses(){
    this.courses = [
      { id: 1, name: 'course1 '},
      { id: 2, name: 'course2 '},
      { id: 3, name: 'course3 '},
      { id: 4, name: 'course4 '}
    ];
  }
  // trackBy takes a function that has two arguments: index and item
  // if return undefined, only that one will rerender
  trackCourse(index, course){
    return course ? course.id : undefined;
  }
}
