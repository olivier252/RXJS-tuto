import { Component, OnInit } from '@angular/core';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.css']
})
export class ThrowErrorComponent implements OnInit {

  //l'observable from émet chaque valeur du tableau passé en paramètre
  myObs1: Observable<number | string> = from([1, 2, 3, "toto", 4]);
  sourceObs = of(1, 2, 3, 4);
  innerObs = of("A", "B");

  // throwError sans catchError--------------------------------------------------
  myObs2 = this.myObs1.pipe(
    map(itemArray => {
      let res = (itemArray as number) * 2;

      if (Number.isNaN(res)) {
        throwError('Not a Number, cet observable comporte une erreur');
      }
      return res;
    })
  );

  // throwError avec catchError--------------------------------------------------
  myObs3 = this.myObs1.pipe(
    map(item => {
      let res = (item as number) * 2;
      if(Number.isNaN(res)) {
        throw new Error('res est NaN !');
      }
      return res;
    }),
    catchError(err => throwError(err))
  )

  // throwError avec mergeMap-----------------------------------------------------
    myObs4 = this.sourceObs.pipe(
      mergeMap(item => {
        console.log(`Valeur item de l'observable source - ${item}`);
        if(item === 3) {
          return throwError(`Erreur dans l'observable`);
        }
        return this.innerObs;
      })
    )
  
  constructor() { }

  ngOnInit(): void {
    this.subscribeToMyObs2();
    this.subscribeToMyObs3();
    this.subscribeToMyObs4();
  }

  subscribeToMyObs2() {
    this.myObs2.subscribe(
      itemArray=> console.log(`Item = ${itemArray}`),
      err => console.log(`Message d'erreur défini dans l'observable - ${err} -`),
      () => console.log('Souscription terminée')
      );
  }

  subscribeToMyObs3() {
    this.myObs3.subscribe(
      item => console.log(`Item = ${item}`),
      error => console.log(`Message d'erreur = ${error}`),
      () => console.log(`Processing Complete`)
    )
  }

  subscribeToMyObs4() {
    this.myObs4.subscribe((
      item => console.log(item) ),
      error => console.log(error))
  }

}
