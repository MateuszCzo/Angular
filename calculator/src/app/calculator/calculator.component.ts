import { Component } from '@angular/core';
import { Currency } from '../model/Currency';
import { currencies } from '../dao/Currencies';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  protected currencies: Currency[] = currencies;
  protected currency?: Currency;
  protected inputPrice: number = 0;
  protected finalPrice: number = 0;

  protected updateFinalPrice(event: Currency) {
    console.log('CalculatorComponent - updateFinalPrice : ', event);
    this.currency = event;
    this.calculateNumber();
  }

  protected calculateNumber() {
    if (this.currency) {
      this.finalPrice = this.inputPrice * this.currency?.multiplier;
    }
  }
}
