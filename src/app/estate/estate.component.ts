import { Component, OnInit, Input } from '@angular/core';
import { Estate } from '../model/estate.model';

@Component({
  selector: 'app-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OnInit {
  @Input() estate: Estate;
  constructor() { }


  ngOnInit() {
  }

}
