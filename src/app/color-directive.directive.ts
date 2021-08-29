import { Directive } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {

  // constructor(private e:ElementRef) {
  //   setInterval(()={
  //     if(this.color == 'blue'){
  //       this.color='red';
  //     }else{
  //       this.color= 'blue';
  //     }
  //     e.nativeElement.style.color = this.color;
  //   },1000);
  //  }

}
