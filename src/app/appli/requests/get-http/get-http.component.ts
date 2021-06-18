import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/models/person.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-get-http',
  templateUrl: './get-http.component.html',
  styleUrls: ['./get-http.component.css']
})
export class GetHttpComponent implements OnInit, OnDestroy {
  person: Person = new Person();
  personObserve: Person[];
  keys: string[];
  values: string[];
  pageNum=0;
  //observeSubscription: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.showRequestResponse();
  }

  showRequestResponse(): void {
    this.apiService.getListPerson_With_Observe_Option()
      // resp est de type `HttpResponse<Person>`
      .subscribe(resp => {
        //Récupération des clés des headers
        this.keys = resp.headers.keys();

        this.keys = this.keys.map(key => {
          //Affichage des paires clé/valeur des headers
          console.log(`${key}: ${resp.headers.get(key)}`);
          return key = `key : ${resp.headers.get(key)}`;
        });

        // Accès au corps de la requête typé en tant que `Person`.
        this.personObserve = [...resp.body];
        this.personObserve.forEach(p => {
          console.log(`${p.id}: ${p.name}`);
        }
      );
    });
  }

  ngOnDestroy() {
    //this.observeSubscription.unsubscribe();
  }
}
