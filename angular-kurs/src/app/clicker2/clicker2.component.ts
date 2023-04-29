import { Component } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-clicker2',
  templateUrl: './clicker2.component.html',
  styleUrls: ['./clicker2.component.css'],
})
export class Clicker2Component {
  clicks = 0;

  constructor(private clickService: ClickService) {
  }

  add() {
    this.clicks++;
    this.clickService.addClicks();
  }
}
