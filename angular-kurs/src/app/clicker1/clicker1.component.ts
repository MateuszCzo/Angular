import { Component } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-clicker1',
  templateUrl: './clicker1.component.html',
  styleUrls: ['./clicker1.component.css'],
})
export class Clicker1Component {
  clicks = 0;

  constructor(private clickService: ClickService) {
  }

  add() {
    this.clicks++;
    this.clickService.addClicks();
  }
}
