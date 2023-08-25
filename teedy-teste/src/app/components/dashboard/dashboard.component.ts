import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PartnersService } from 'src/app/services/partners.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
})
export class DashboardComponent {
  constructor(private partnersService: PartnersService) {}

  getAllPartners() {
    this.partnersService
      .getAll()
      .then((partners) => console.log(partners))
      .catch((error) => console.error(error));
  }
}
