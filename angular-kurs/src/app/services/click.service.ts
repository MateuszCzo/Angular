import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  private sumClicks = 0;
  private sum = new Subject<number>();

  constructor(private log: LogService) {
    this.log.logger("Klikniecie");
  }

  addClicks() {
    this.sumClicks++;
    this.sum.next(this.sumClicks);
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }
}
