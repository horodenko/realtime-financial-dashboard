import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeChartComponent } from './realtime-chart.component';

describe('RealtimeChartComponent', () => {
  let component: RealtimeChartComponent;
  let fixture: ComponentFixture<RealtimeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtimeChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtimeChartComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
