import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  myObs: Observable<any>;
  valueMyObs: any;
  completeMessage: string;
  valueMyObs2: any;
  valueMyObs2bis: any;
  myObs3: Observable<number>;
  count: number;
  countInButton: number;

  obs2Subscription: Subscription;
  obs3Subscription: Subscription;
  obs4Subscription: Subscription;

  myNombre: number;
  myObjet = {
    fonctionNbre: (v: number) => v * v
  };

  constructor() { }

  ngOnInit(): void {
    // -------------------------------------------------------------------------------
    this.myNombre = this.myObjet.fonctionNbre(8);
    console.log(`La valeur de myNombre est : ${this.myNombre}`);

    // -------------------------------------------------------------------------------

    this.emitTimeConnex().subscribe((value) => this.count = value);

    // -------------------------------------------------------------------------------

    this.myObs = new Observable(
      (subscriber) => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
          subscriber.next(4);
          subscriber.complete();
        },
          2000
        );
      });

    this.myObs.subscribe(
      // {next(x) {console.log('got value ' + x);}
      (x) => console.log('got value ' + x),
      error => console.log(error),
      () => console.log('done')
    );

    // -------------------------------------------------------------------------------
    // Définition de l'observer
    const observer = {
      next: (value: any) => console.log(`Afficher la valeur de obs2 : ${value}`)
    };

    // Création de l'observable
    const obs2 = new Observable(observer => observer.next('Salut Michel !'));

    // Souscription à l'observable et émission de la valeur
    this.obs2Subscription = obs2.subscribe(observer);
    console.log(this.obs2Subscription);

    // -------------------------------------------------------------------------------
    // En réalité, la fonction next() de l'objet Observer est définie au moment de la souscription,
    // mais le paramètre passé à la fonction est défini à la création de l'observable.

    const obs3 = new Observable(observer =>
      observer.next('Salut Michel !')
    );

    this.obs3Subscription = obs3.subscribe(value => console.log(value));
    // console.log(this.obs3Subscription); Créé un compteur

    // -------------------------------------------------------------------------------
    const obs4 = new Observable(observer => {
      let nb = 0;
      setInterval(() => {
        observer.next(nb++);
      }, 1000);
    });
    // Equivaut à : const obs5 = interval(1000);

    this.obs4Subscription = obs4.subscribe(value => console.log(value));
    console.log(this.obs4Subscription);
    // Créé un compteur

    // -------------------------------------------------------------------------------
  }

  emitTimeConnex(): Observable<number> {
    let i = 0;
    return new Observable(function subscribe(subscriber) {
      const decompte = setInterval(() => {
        subscriber.next(i++);
      }, 1000);
    });
  }

  emitTimeConnexFromButton(): void {
    this.emitTimeConnex().subscribe((x => this.countInButton = x));
  }
}
