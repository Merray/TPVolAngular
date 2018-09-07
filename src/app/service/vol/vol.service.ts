import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vol} from '../../model/vol';

@Injectable({
  providedIn: 'root'
})
export class VolService {
  url: string = 'http://localhost:8080/TPVolAngular';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('thibault:thibault')});
  }

  public list(): Observable<Vol[]> {
    return this.http.get<Vol[]>(`${this.url}/rest/vol`, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/rest/vol/${id}`, {headers: this.headers});
  }

  public findById(id: number): Observable<Vol> {
    // @ts-ignore
    return this.http.get(`${this.url}/rest/vol/${id}`, {headers: this.headers});
  }

  public save(vol: Vol): Observable<any> {
    if (vol.id) {
      return this.http.put(`${this.url}/rest/vol/`, vol, {headers: this.headers});
    } else {
      const o = {
        id: vol.id, dateDepart: vol.dateDepart, dateArrivee: vol.dateArrivee, heureDepart: vol.heureDepart, heureArrivee: vol.heureArrivee,
        depart: vol.depart, arrivee: vol.arrivee
      };
      console.log(vol);
      return this.http.post(`${this.url}/rest/vol/`, o, {headers: this.headers});
    }
  }
}
