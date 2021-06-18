import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpGetService {
  baseURL = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  getRepos(username: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + username + '/repos');
  }
}
