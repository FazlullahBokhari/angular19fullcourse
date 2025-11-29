import { NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-directive',
  imports: [NgIf, FormsModule, NgFor],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;
  num1: number = 10;
  num2: number = 20;

  isDiv3Visible: boolean = false;

  selectedCast: string = 'General';

  cityList: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  studentList: any[] = [
    {name: 'Alice', isActive: true, city: 'New York'},
    {name: 'Bob', isActive:false, city: 'Los Angeles'},
    {name: 'Charlie', isActive:true, city: 'Chicago'},
    {name: 'David', isActive:false, city: 'Houston'},
    {name: 'Eve', isActive:true, city: 'Phoenix'}
  ]


  showDiv1() { 
    this.isDiv1Visible = true;
  }

  hideDiv1() {
    this.isDiv1Visible = false;
  }

  hideShowDiv2(booleanValue: boolean) {
    this.isDiv2Visible = booleanValue
  }

  hideShowDiv3() {
    if(this.num1==this.num2){
      this.isDiv3Visible = true;
    } else {  
      this.isDiv3Visible = false;
    }
  }



}
