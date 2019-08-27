import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'my course';
  courses = ['course1','course2','course3'];
  getTitle(){
    return this.title;
  }
  constructor() { }

  ngOnInit() {
  }

}
