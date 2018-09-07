import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reservation} from '../../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url: string = 'http://localhost:8080/TPVolAngular';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('florent:florent')});
  }

  public list(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.url}/rest/reservation`);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/rest/reservation/${id}`);
  }

  public findById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.url}/rest/reservation/${id}`);
  }

  public save(reservation: Reservation): Observable<any> {
    if (reservation.id) {
      return this.http.put(`${this.url}/rest/reservation/`, reservation);
    } else {
      const o = {
        id: reservation.id, date: reservation.date, numero: reservation.numero
      };
      return this.http.post(`${this.url}/rest/reservation/`, o);
    }
  }
}
