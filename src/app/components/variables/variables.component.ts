import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {

  firstName: string = "Fazlullah";
  lastName: string = "Bokhari";
  courseName: string;
  rollNo: number = 12345;
  currentDate: Date = new Date();
  isActive: boolean = true;
  
  constructor() {
    this.courseName = "Angular 19";
  }
}
