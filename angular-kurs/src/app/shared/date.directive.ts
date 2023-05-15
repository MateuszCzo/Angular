import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective implements OnInit {

  @Input() date!: Date;
  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter')
  mouseEnter(eventDate: Event) {
    this.paragraph.innerHTML = this.date.toLocaleDateString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseLeave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }

}
