import { Component, OnInit, state } from '@angular/core';

@Component({
  selector: 'user-data',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string = '';
  age:number = 0;
  address: {
    street:string,
    city:string,
    state:string
  }
  hobbies:string[];


  constructor() { }

  ngOnInit() {
    this.name = 'sagar ratnaparkhi';
    this.age = 32;
    this.address = {
      state : 'maharastra',
      city : 'pune',
      street : '123 main street'
    }
    this.hobbies = [
      'table tenis',
      'cricket',
      'watching movies'
    ]
  }

}
