import {Component, OnInit} from '@angular/core';
import {Passager} from '../model/passager';
import {PassagerService} from '../service/passager/passager.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-passager-edit',
  templateUrl: './passager-edit.component.html',
  styleUrls: ['./passager-edit.component.css']
})
export class PassagerEditComponent implements OnInit {
  passager: Passager = new Passager();

  constructor(private passagerService: PassagerService, private ar: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      if (params.id) {
        this.passagerService.findById(params.id).subscribe(resp => {
          this.passager = resp;
        });
      }
    });
  }

  public save() {
    this.passagerService.save(this.passager).subscribe(resp => {
      this.router.navigate(['/passager']);
    });
  }
}
