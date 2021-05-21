import { Component, OnInit, ElementRef } from '@angular/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public name:string = 'Angular';

  
 constructor( private readonly elementRef: ElementRef){}

 
  ngOnInit() {
  }

}
