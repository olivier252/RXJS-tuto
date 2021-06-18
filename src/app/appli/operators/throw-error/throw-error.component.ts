import { Component, OnInit } from '@angular/core';
import { interval, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.css']
})
export class ThrowErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    interval(1000).pipe(
      mergeMap(x => x === 2 ? throwError('Erreur à la valeur 2') : of('toto')
      ),
    ).subscribe(x => console.log(x), e => console.error(e));

    /* 
    Lorsque l'observable `interval(1000)` émet la valeur 2, la notification 
    de throwError est déclenchée 

    Sortie en console :
    - toto  
    - toto
    - Erreur à la valeur 2
    */


  }
}


