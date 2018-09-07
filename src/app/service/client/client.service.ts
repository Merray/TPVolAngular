import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url: string = 'http://localhost:8080/TPVolAngular';

  constructor(private http: HttpClient) {
  }

  public list(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}/rest/client/`);
  }
}
