import { Component, OnInit } from '@angular/core';
import { Observable, range } from 'rxjs';
import { fromEvent } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuto-rxjs';
}
