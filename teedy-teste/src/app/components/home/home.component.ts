import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isRegisterModalOpen = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  toggleRegisterModal(): void {
    this.isRegisterModalOpen = !this.isRegisterModalOpen;
  }
}
