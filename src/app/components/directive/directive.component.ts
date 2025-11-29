import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf, FormsModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;
  num1: number = 10;
  num2: number = 20;

  isDiv3Visible: boolean = false;

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
