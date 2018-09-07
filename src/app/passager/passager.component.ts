import {Component, OnInit} from '@angular/core';
import {Passager} from '../model/passager';

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.css']
})
export class PassagerComponent implements OnInit {

  passagers: Passager[];
  constructor() {
  }

  ngOnInit() {
  }

}
