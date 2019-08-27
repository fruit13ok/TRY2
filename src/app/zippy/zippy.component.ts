import { Component, Input } from '@angular/core';
// import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title: string;
  // chevron=faChevronUp;
  isExpanded: boolean;
  toggle() {
    this.isExpanded = !this.isExpanded;
    // if(this.isExpanded) {
    //   console.log('it is true');
    //   this.chevron = faChevronDown;
    // } else {
    //   console.log('it is false');
    //   this.chevron = faChevronUp;
    // }
  }
}
