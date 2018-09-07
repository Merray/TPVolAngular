import {Component, OnInit} from '@angular/core';
import {Passager} from '../model/passager';
import {PassagerService} from '../service/passager/passager.service';

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.css']
})
export class PassagerComponent implements OnInit {

  passagers: Passager[];

  constructor(private passagerService: PassagerService) {
  }

  ngOnInit() {
    this.list();
  }

  public list() {
    this.passagerService.list().subscribe(resp => {
      this.passagers = resp;
    });
  }
}
