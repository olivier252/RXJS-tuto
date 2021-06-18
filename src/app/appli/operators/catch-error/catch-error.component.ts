import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css']
})
export class CatchErrorComponent implements OnInit {

  myObsSource = of(1, 2, 3).pipe(
    map(item => {
      if (item === 3) {
        // L'instruction throw permet de lever une exception définie par l'utilisateur elle peut être remplacée par throwError
        throw 'item ne peut pas être égal à 3'
      }
      return item;
    }),
    // Observable utilisé en cas d'erreur, on pourrait utiliser catchError(err => throwError(err))
    catchError(err => {
      throw `Affiche le message d'erreur de l'observable source : ${err}`;
    }),
  )

  constructor() { }

  ngOnInit(): void {
    this.subscribeToMyObsSource();
  }

  subscribeToMyObsSource() {
    this.myObsSource.subscribe(
      item => console.log(item),
      err => console.log(err)
    );
  }
}

