import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Modifier cette variable pour tester la gestion d'erreur avec throwError
  baseURL: string = "http://localhost:3000/";
  persons: Person[];

  // Définition des en-têtes de la requête, ici un simple littéral contenant un header de type tableau associatif (clé => valeur)
  headerOptions = { 'content-type': 'application/json' };

  // Sinon on instancie la fonction constructrice 'HttpHeaders'
  headersOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  });

  constructor(private http: HttpClient) { }

  // GET-------------------------------------------------------
  getListPersonService(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseURL + 'people');
  }

  // GET avec option observe de type 'response'-----------------------------------
  getListPerson_With_Observe_Option(): Observable<HttpResponse<Person[]>> {
    return this.http.get<Person[]>(this.baseURL + 'people',
      {
        headers: this.headerOptions,
        observe: 'response'
      });
  }

  // GET avec gestion d'erreurs----------------------------------
  // Utilitaire de la gestion d'erreurs

  handleError(httpError: HttpErrorResponse): Observable<never> {

    //L'erreur provient du client ou du réseau
    if (httpError.error instanceof ErrorEvent) {
      console.error(`Une erreur est survenue : ${httpError.error.message}`);
    } else {
      /* Le back-end renvoie un code d'erreur, 
        potentiellement le corps de réponse contient des infos sur les causes de l'erreur
      */
      console.error(`code d'erreur retourné : ${httpError.status}, corps de réponse ${httpError.error}`);
    }

    // Message d'erreur destiné à l'utilisateur défini par l'opérateur `throwError`
    return throwError('Une erreur est survenue, veuillez réessayer ultérieurement.');
  }

  getListPerson_With_Error_Handlers(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseURL}people`, { headers: this.headerOptions })
      .pipe(
        catchError(this.handleError)
      );
  }

  // GET person par Id-------------------------------------------------------
  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseURL}people/${id}`);
  }
  

  // POST---------------------------------------------------------
  addPersonService(person: Person): Observable<HttpResponse<Person>> {

    // Définition des en-têtes de la requête POST, ici un simple littéral contenant un header de type tableau associatif (clé => valeur)

    // conversion des données en json du corps de la requête
    const body = JSON.stringify(person);


    // Création de la requête
    return this.http.post<Person>(this.baseURL + 'people', body,
      {
        headers: this.headerOptions,
        observe: 'response'
      });
  }

  // DELETE---------------------------------------------------------
  deletePersonService(id: number): Observable<{}> {
    return this.http.delete(`${this.baseURL}people/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // PUT--------------------------------------------------------------
  updatePersonService(person: Person): Observable<Person> {
    const body = JSON.stringify(person);
    console.log(body);
    return this.http.put<Person>(`${this.baseURL}people/${person.id}`, person);
  }
}

/*
//1ère écriture des headers-----------------------------

  httpOptions = {
    headers: new HttpHeaders({'content-type': 'application/json'});
  };

  return this.http.post<Person>(`${this.url}people`, body, this.httpOptions);
*/

/* 2ème écriture des headers-----------------------------

const/let httpOptions = {'content-type': 'application/json'}
return this.http.post<Person>(`${this.url}people`, {'headers': headerOptions});
 */
