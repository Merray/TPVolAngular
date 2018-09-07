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

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/rest/passager/${id}`, {headers: this.headers});
  }

  public findById(id: number): Observable<Passager> {
    // @ts-ignore
    return this.http.get(`${this.url}/rest/passager/${id}`, {headers: this.headers});
  }

  public save(passager: Passager): Observable<any> {
    if (passager.idPassager) {
      return this.http.put(`${this.url}/rest/adherent/`, passager, {headers: this.headers});
    } else {
      const o = {
        idPassager: passager.idPassager, prenom: passager.prenom, nom: passager.nom, reservations: passager.reservations
      };
      return this.http.post(`${this.url}/rest/adherent/`, o, {headers: this.headers});
    }
  }
}
