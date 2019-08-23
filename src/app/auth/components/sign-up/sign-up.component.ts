import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }


  ngOnInit() {

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const val = randomIntFromInterval(1,3);
    const backgroundImage = document.getElementById("signupSection");
    backgroundImage.style.backgroundImage = "url('../../../assets/images/bg/BG-0"+val+".jpg')";
  }

}
