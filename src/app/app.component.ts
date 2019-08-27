import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  public myisFavorite = false;

  // isFavorite pass from favorite.component.ts emit()
  // onFavoriteChange(eventArgs){
  // can add type check for argument, stay it is object with key name newValue is boolean
  // onFavoriteChange(eventArgs: {newValue: boolean}){
  // even better way use interface to set object structure, interface is better export from favorite.component.ts
  onFavoriteChange(eventArgs: FavoriteChangedEventArgs){
    console.log('favorite changed: ',eventArgs);
  }

  tweet = {
    likesCount: 10,
    isLiked: true
  }
}
