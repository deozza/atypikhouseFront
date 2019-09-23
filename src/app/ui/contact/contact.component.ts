import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  loading: boolean = false;
  error: {};
  model = {
    name: "",
    email: "",
    phone: "",
    message: ""
  }

  constructor(private router: Router) { }

  ngOnInit() {
    
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
    const val = randomIntFromInterval(1,3);
    const backgroundImage = document.getElementById("contactSection");
    backgroundImage.style.backgroundImage = "url('../../../assets/images/bg/BG-0"+val+".jpg')";
  }

  send() {
    this.loading = true;
    console.log(this.model)
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
