import { Component } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { sampleData, displayDate } from './events-utc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootstrap-example';
  public selectedDate: Date = displayDate;
  public events: SchedulerEvent[] = sampleData;
}
