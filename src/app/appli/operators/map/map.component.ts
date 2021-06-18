import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observable: Observable<string> = new Observable((subscriber) => subscriber.next('affiche coucou !!'));
    observable.subscribe((value) => console.log(value));

    // Observable avec callback d'erreur

    range(1, 5).pipe(
      map(el => {
        if (el % 2 === 1) {
          throw new Error('something went wrong');
        } else {
          return el;
        }
      }),
      filter(el => el > 5)).subscribe(
        (value) => console.log(value),
        (error) => console.log(error),
        () => console.log('terminé')
      );

    const clicks = fromEvent<MouseEvent>(document, 'click');
    const position = clicks.pipe(map(e => e.clientX));
    position.subscribe(x => console.log(x));
  }
}
