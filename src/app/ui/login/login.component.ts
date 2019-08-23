import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const val = randomIntFromInterval(1,3);


  const backgroundImage = document.getElementById("loginSection");
  backgroundImage.style.backgroundImage = "url('../../../assets/images/bg/BG-0"+val+".jpg')";
  }

}
