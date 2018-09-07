import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Reservation} from '../../model/reservation';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

 // url: string = 'http://localhost:8080/TPVolAngular';
  // headers: HttpHeaders;

  constructor(private http: HttpClient) {
  //  this.headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('florent:florent')});
  }

  //public list(): Observable<Reservation[]> {
    //return this.http.get<Reservation[]>(`${this.url}/rest/reservation`);
  //}
}
