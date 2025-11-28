import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = 'Angular 19';

  isActive: boolean = false;

  showMsg(msg: string): void {
    alert(msg);
  }

  onStateChange(): void {
    alert("State got changed");
  }
}
