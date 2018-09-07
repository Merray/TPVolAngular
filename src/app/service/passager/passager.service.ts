import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Passager} from '../../model/passager';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {

  url: string = 'http://localhost:8080/TPVolAngular';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('florent:florent')});
  }

  public list(): Observable<Passager[]> {
    return this.http.get<Passager[]>(`${this.url}/rest/passager`);
  }
}
