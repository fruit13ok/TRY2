import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseForm3Component } from './new-course-form3.component';

describe('NewCourseForm3Component', () => {
  let component: NewCourseForm3Component;
  let fixture: ComponentFixture<NewCourseForm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseForm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
