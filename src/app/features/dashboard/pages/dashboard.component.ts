import { Component, inject, OnInit } from '@angular/core';
import { FinanceService } from '../../../core/services/finance.service';
import { KpiCardComponent } from '../components/kpi-card/kpi-card.component';
import { RealtimeChartComponent } from '../components/realtime-chart/realtime-chart.component';

@Component({
  selector: 'app-dashboard.component',
  imports: [KpiCardComponent, RealtimeChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private _finance = inject(FinanceService);

  protected stats: any;

  ngOnInit(): void {
    this._finance.stats$.subscribe(stats => this.stats = stats);
  }
}
