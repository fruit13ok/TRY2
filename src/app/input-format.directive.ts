import { Directive, HostListener, ElementRef, Input } from '@angular/core';
// Directive Creating Custom Directives
@Directive({
  // selector is attribute instead of element name
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input('format') format;
  // a better way use our directive attribute selector
  @Input('appInputFormat') format;
  // ElementRef give us access to DOM object
  constructor(private el: ElementRef) { }
  // listen to element that use this directive
  @HostListener('focus') onFocus(){
    console.log("on focus");
  }
  @HostListener('blur') onBlur(){
    // console.log("on blur");
    // this.el.nativeElement access the actual DOM object
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowercase'){
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}
