import {Component, OnInit} from '@angular/core';
import {Reservation} from '../model/reservation';
import {ReservationService} from '../service/reservation/reservation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css']
})
export class ReservationEditComponent implements OnInit {

  reservation: Reservation = new Reservation();

  constructor(private reservationService: ReservationService, private ar: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      if (params.id) {
        this.reservationService.findById(params.id).subscribe(resp => {
          this.reservation = resp;
        });
      }
    });
  }

  public save() {
    this.reservationService.save(this.reservation).subscribe(resp => {
        this.router.navigate(['/reservation']);
      }
    );
  }
}
