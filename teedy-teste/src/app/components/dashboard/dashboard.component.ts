import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PartnersService } from 'src/app/services/partners.service';
import { IPartner } from 'src/app/interfaces/IPartners';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    MatPaginatorModule,
    MatIconModule,
  ],
})
export class DashboardComponent {
  partners$ = new Observable<IPartner[]>();
  totalItems: number = 100;
  itemsPerPage: number = 10;
  currentPage: number = 0;

  //formInfos
  id = '';
  partnerName = '';
  partnerDescription = '';
  partnerRepositoryGit = '';
  partnerUrlDoc = '';

  constructor(private partnersService: PartnersService) {}

  loadPartners() {
    this.partners$ = this.partnersService.getAll(
      this.currentPage,
      this.itemsPerPage
    );
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.loadPartners();
  }

  createNewPartner() {
    const partner: IPartner = {
      name: 'Nome do parceiro',
      description: 'Para que serve essa parceria',
      repositoryGit: 'Link do repositório do git',
      urlDoc: 'Link da documentação do parceiro',
      clients: ['Banco da Galera', 'Alegria Bankers'],
      projects: ['Coban', 'Teddy360'],
    };

    this.partnersService.createPartner(partner).subscribe(() => {
      console.log('Novo parceiro cadastrado:', partner);
      this.loadPartners();
    });
  }

  putPartner() {
    const partner: IPartner = {
      id: '10',
      name: 'Nome do parceiro',
      description: 'Para que serve essa parceria',
      repositoryGit: 'Link do repositório do git',
      urlDoc: 'Link da documentação do parceiro',
      clients: ['Banco da Galera', 'Alegria Bankers'],
      projects: ['Coban', 'Teddy360'],
    };
    this.partnersService.updatePartner(partner).subscribe(() => {
      console.log('Parceiro atualizado:', partner);
      this.loadPartners();
    });
  }

  deletePartner(partner: IPartner) {
    this.partnersService.deletePartner(partner).subscribe(() => {
      console.log('Parceiro deletado:', partner);
      this.loadPartners();
    });
  }
}
