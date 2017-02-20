import { Component, ViewChild } from '@angular/core';

import { DynamicTaskListComponent } from './tasks/dynamic-task-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mani!';
  message = 'this is app component';
  @ViewChild(DynamicTaskListComponent) dcr;

}
