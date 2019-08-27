import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  // styleUrls: ['./favorite.component.css'],
  styles: [
    `
    fa-icon {
        color: green;
    }
    div {
        color: green;
    }
    `
  ]
})
export class FavoriteComponent implements OnInit {
  @Input('alias-isFavorite') public isFavorite: boolean;
  @Output('alias-change') public change = new EventEmitter();
  star = farStar;
  constructor() { }

  ngOnInit() {
    if(this.isFavorite) {
      console.log('it is true');
      this.star = fasStar;
    } else {
      console.log('it is false');
      this.star = farStar;
    }
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    // use emit() to pass data as argument
    // this.change.emit(this.isFavorite);
    this.change.emit({newValue: this.isFavorite});
    if(this.isFavorite) {
      console.log('it is true');
      this.star = fasStar;
    } else {
      console.log('it is false');
      this.star = farStar;
    }
  }
}

// structure what the object has, it should has newValue as boolean
export interface FavoriteChangedEventArgs{
  newValue: boolean
}