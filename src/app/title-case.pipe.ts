import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  // version 1
  // transform(value: string): any {
  //   if(!value){
  //     return null;
  //   }
  //   // just some of English prepositions
  //   let prepositions = ['of','the'];
  //   // split input to array by space
  //   let words = value.split(' ');
  //   // loop it
  //   for(var i=0; i<words.length; i++){
  //     if(i > 0 && prepositions.includes(words[i].toLowerCase())){
  //       words[i] = words[i].toLowerCase();
  //     } else {
  //       words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1).toLowerCase();
  //     }
  //   }
  //   return words.join(' ');
  // }
  // refactor version
  transform(value: string): any {
    if(!value){
      return null;
    }
    // split input to array by space
    let words = value.split(' ');
    // loop it
    for(var i=0; i<words.length; i++){
      let word = words[i];
      if(i > 0 && this.isPreposition(word)){
        words[i] = word.toLowerCase();
      } else {
        words[i] = this.toTitleCase(word);
      }
    }
    return words.join(' ');
  }
  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
  // typescript has accessor, use private to make this method access within this class only
  private isPreposition(word: string): boolean {
    // just some of English prepositions
    let prepositions = ['and','at','by','for','from','in','of','on','or','the','to','with'];
    return prepositions.includes(word.toLowerCase());
  }
}
