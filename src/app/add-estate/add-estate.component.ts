import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Estate } from '../model/estate.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-estate',
  templateUrl: './add-estate.component.html',
  styleUrls: ['./add-estate.component.css']
})
export class AddEstateComponent implements OnInit {
estate: Estate;
isPosted = false;
utilities = ['gaz', 'microonde', 'wifi', 'tv'];
environments = ['salle sport', 'centre com', 'station service'];
categories = ['category A', 'category B', 'category C', 'category D', 'category F'];

  constructor(private api: ApiService, private route: Router) { }

  ngOnInit() {
    this.estate = new Estate();
  }

  save(value: any) {
    console.log(this.estate);
    this.isPosted = true;
    /*this.api.addItem('entity', this.estate, result => {
      if (result) {
        console.log('ok');
      }
    });*/
  }

  cancel() {
    this.route.navigate(['/']);
  }

}
