import {Component, EventEmitter, Input, Output, SimpleChanges, OnChanges} from '@angular/core';
import {IRatingUnit} from './irating-unit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rating-bar';

}
