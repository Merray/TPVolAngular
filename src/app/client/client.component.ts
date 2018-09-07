import {Component, OnInit} from '@angular/core';
import {Client} from '../model/client';
import {ClientService} from '../service/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[] = [new Client(21, 'fricelle')];

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.list();
  }

  public list() {
    this.clientService.list().subscribe(resp => {
      this.clients = resp;
    }, error => console.log(error));
  }


}
