import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { IPartner } from '../interfaces/IPartners';

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  constructor(private httpClient: HttpClient) {}
  getAll() {
    const apiUrl = `${environment.apiBaseUrl}`;

    return this.httpClient.get<IPartner[]>(`${apiUrl}`).toPromise();
  }
}
