import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currency } from '../model/Currency';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.css'
})
export class CurrencySelectorComponent implements OnInit {
  @Input()
  public currencies: Currency[] = [];
  @Output()
  public emitCurrency = new EventEmitter<Currency>();
  protected currentCurrency: Currency | null = null;

  shortName?: Currency;

  public ngOnInit(): void {
    this.shortName = this.currencies[0];
    this.emitCurrency.emit(this.currencies[0]);
  }

  protected selectCurrency(event?: Currency) {
    console.log('CurrencySelectorComponent - selectCurrency : ', event);
    if (event) {
      this.emitCurrency.emit(event);
    }
  }
}
