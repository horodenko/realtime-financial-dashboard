import { Injectable } from '@angular/core';
import { interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {
  stats$ = interval(2000).pipe(
    map(() => ({
      balance: 3500 + Math.random() * 300,
      income: 1200 + Math.random() * 200,
      expenses: 800 + Math.random() * 150
    }))
  );
}
