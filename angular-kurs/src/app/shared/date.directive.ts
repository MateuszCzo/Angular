import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter')
  mouseEnter(eventDate: Event) {
    console.log('mouse enter');
  }

  @HostListener('mouseleave')
  mouseLeave(eventDate: Event) {
    console.log('mouse leave');
  }

}
