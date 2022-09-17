import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myapp1',
 
  templateUrl: './myapp1.component.html',
  styleUrls: ['./myapp1.component.css']
})
export class Myapp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string="tenzin";
  gender:string="Gender";
  experience:string="Your Experience";
  feedback:string="Feedback";
  buttontxt:string="Submit";

  Submitted()
  {
    alert("Your file is submitted!");
  }
}
// export class MyComponent
// {
//   gender:string="Gender";

// }