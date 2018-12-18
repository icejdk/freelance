import { Component, OnInit } from '@angular/core';
import {Freelance} from '../../interfaces/freelance'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  step:number=1;
  freelance:Freelance;
  constructor() { }

  ngOnInit() {
  }
  next(){
    this.step+=1;
  }

}
