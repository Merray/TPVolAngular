import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Vol} from '../model/vol';
import {VolService} from '../service/vol/vol.service';

@Component({
  selector: 'app-vol-edit',
  templateUrl: './vol-edit.component.html',
  styleUrls: ['./vol-edit.component.css']
})
export class VolEditComponent implements OnInit {

  vol: Vol = new Vol();

  constructor(private volService: VolService, private ar: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      if (params.id) {
        this.volService.findById(params.id).subscribe(resp => {
          this.vol = resp;
        });
      }
    });
  }
  public save() {
    this.volService.save(this.vol).subscribe(resp => {
        this.router.navigate(['/vol']);
      }
    );
  }
}
