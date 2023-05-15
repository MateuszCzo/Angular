import { Directive, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective implements OnInit {

  @Input() date!: Date;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter')
  mouseEnter(eventDate: Event) {
    console.log(this.date);
  }

  @HostListener('mouseleave')
  mouseLeave(eventDate: Event) {
    console.log(this.date);
  }

}
