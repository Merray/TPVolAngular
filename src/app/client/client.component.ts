import {Component, OnInit} from '@angular/core';
import {Client} from '../model/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[] = [new Client(21, 'fricelle')];

  constructor() {
  }

  ngOnInit() {
  }

}
