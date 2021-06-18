import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subject = new Subject<number>();
  subject2 = new Subject<number>();
  observerA: string;
  observerB: string;

  constructor() { }

  ngOnInit(): void {

    // -----------------------------------------------------
    this.subject.subscribe((v) => {
      this.observerA = `observerA : ${v}`;
    });

    this.subject.subscribe((v) => {
      this.observerB = `observerB : ${v}`;
    });

    this.subject.next(1);
    this.subject.next(2);

    // Le subject est passé en argument de subscribe()

    this.subject2.subscribe((value) => console.log(`observer A ${value}`));
    this.subject2.subscribe((value) => console.log(`observer B ${value}`));

    const obs = from([1, 2, 3]);

    obs.subscribe(this.subject2);
    // On souscrit en fournissant le subject : chaque observer (abonné) consomme les données de l'observable unicast(obs);
    const source = from([1, 2, 3]);
    const subject = new Subject();
    const multicasted = source.pipe(multicast(subject));

    // These are, under the hood, `subject.subscribe({...})`:
    multicasted.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    multicasted.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    // -----------------------------------------

    const monObjet = new Subject();

    monObjet.next('valeur avant souscription');
    monObjet.subscribe(valeur => console.log('valeur de mon objet =  ', valeur));
    // "Valeur" ne correspond à rien, car seules les valeurs après la souscription comptent

    monObjet.next('valeur après souscription');


    // BehaviorSubject---------------------------

    const monAutreObjet = new BehaviorSubject('maPremiereValeur');

    monAutreObjet.next('valeur Avant Souscription');
    monAutreObjet.subscribe(valeur => {
      console.log('La valeur de mon autre objet est ', valeur);
    // Valeur vaut au moment de la souscription la valeur 'valeurAvantSouscription'
    });
    monAutreObjet.next('valeurApresSouscription');
    // Valeur vaut alors 'valeurApresSouscription'
  }
}
