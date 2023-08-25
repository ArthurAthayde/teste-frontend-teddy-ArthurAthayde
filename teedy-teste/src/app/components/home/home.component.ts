import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isRegisterModalOpen = false;
  constructor(private dialog: MatDialog) {}

  toggleRegisterModal(): void {
    this.isRegisterModalOpen = !this.isRegisterModalOpen;
  }
}
