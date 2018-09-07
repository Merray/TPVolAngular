import {Component, OnInit} from '@angular/core';
import {Reservation} from '../../model/reservation';
import {ReservationService} from '../../service/reservation/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations: Reservation[];

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.list();
  }

  public list() {
    this.reservationService.list().subscribe(resp => {
      this.reservations = resp;
    }, error => {
      console.log(error);
    });
  }
}
