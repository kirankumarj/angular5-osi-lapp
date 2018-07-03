import { Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[testdirective]'
})

export class MyDirective{
    constructor(el:ElementRef){
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}