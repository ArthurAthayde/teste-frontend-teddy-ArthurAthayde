import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PartnersService } from 'src/app/services/partners.service';
import { IPartner } from 'src/app/interfaces/IPartners';

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

  getPartnerById() {
    this.partnersService
      .getById('3')
      .then((partners) => console.log(partners))
      .catch((error) => console.error(error));
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

    this.partnersService
      .createPartner(partner)
      .then((partners) =>
        console.log(`${partners?.name} has been successfully registered`)
      )
      .catch((error) => console.error(error));
  }

  putPartner() {
    const partner: IPartner = {
      id: '10',
      name: 'Novo nome',
      description: 'Para que serve essa parceria',
      repositoryGit: 'Link do repositório do git',
      urlDoc: 'Link da documentação do parceiro',
      clients: ['Banco da Galera', 'Alegria Bankers'],
      projects: ['Coban', 'Teddy360'],
    };

    this.partnersService
      .putPartnerInfo(partner)
      .then((partners) =>
        console.log(`${partners?.name} has been updated successfully`)
      )
      .catch((error) => console.error(error));
  }

  deletePartner() {
    this.partnersService
      .deletePartner('91')
      .then((partners) =>
        console.log(`Partner has been deleted successfully`, partners)
      )
      .catch((error) => console.error(error));
  }
}
