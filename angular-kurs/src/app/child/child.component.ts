import {  AfterContentChecked, 
          AfterContentInit, 
          AfterViewChecked, 
          AfterViewInit, 
          Component, 
          DoCheck, 
          Input, 
          OnChanges, 
          OnInit, 
          SimpleChanges,
          OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements  OnChanges, 
                                        OnInit, 
                                        DoCheck,
                                        AfterContentInit, 
                                        AfterContentChecked, 
                                        AfterViewInit, 
                                        AfterViewChecked,
                                        OnDestroy {
  @Input() inputText: string = '';
  @Input() inputDog: Dog = new Dog('');
  show = true;

  /**
   * Uruchamia sie na poczatku, przed ngOnInit
   * Sprawdza czy zmienily sie zbindowane pola komponentu
   * Musi zmienic sie referencja
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - uruchomienie - #1');
    console.log(changes);
  }

  /**
   * Uruchamia sie jeden raz podczas inicjalizacji komponentu
   * Uruchamia sie po konstruktorze i po ngOnChange
   */
  ngOnInit(): void {
    console.log('ngOnInit - uruchomienie - #2');
  }

  /**
   * Uruchamia sie przy kazdej zmianie, wywolaniu eventu
   */
  ngDoCheck(): void {
    console.log('ngDoCheck - uruchomienie - #3');
  }

  /**
   * Uruchamia sie po inicjalizacji np <ng-content>
   */
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - uruchomienie - #4');
  }

  /**
   * Uruchamia sie po kazdej zmianie np <ng-content>
   */
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked - uruchomienie - #5');
  }

  /**
   * Uruchamia sie po inicjalizacji widoku
   */
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - uruchomienie - #6');
  }

  /**
   * Uruchamia sie po kazdej zmianie widoku
   */
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked - uruchomienie - #7');
  }

  /**
   * Uruchamia sie po zniszczeniu widoku
   */
  ngOnDestroy(): void {
    console.log('ngOnDestroy - uruchomienie - #8');
  }

  content() {
    this.show = !this.show;
  }
}

class Dog {
  constructor(public name: string) {
  }
}