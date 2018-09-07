import {Component, OnInit} from '@angular/core';
import {Client} from '../model/client';
import {ClientService} from '../service/client/client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientEl} from '../model/client-el';
import {ClientMoral} from '../model/client-moral';
import {ClientPhysique} from '../model/client-physique';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  client: Client;

  constructor(private clientService: ClientService, private ar: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      /*  console.log(params);*/
      console.log(this.client);
      if (params.type === 'El') {
        this.client = new ClientEl();
      } else if (params.type === 'Moral') {
        this.client = new ClientMoral();
      } else if (params.type === 'Physique') {
        this.client = new ClientPhysique();
      }
      if (params.id) {
        this.clientService.findById(params.id_client).subscribe(resp => {
          this.client = resp;
          console.log(this.client);
        });
      }
    });
  }

  public save() {
    this.clientService.save(this.client).subscribe(resp => {
      this.router.navigate([`/client`]);
    });
  }
}
