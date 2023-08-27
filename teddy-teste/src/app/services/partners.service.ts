import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environments';
import { Observable } from 'rxjs';
import { IPartner } from '../interfaces/IPartners';

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  private apiUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<IPartner[]> {
    return this.httpClient.get<IPartner[]>(this.apiUrl);
  }

  createPartner(partner: IPartner) {
    return this.httpClient.post<IPartner>(this.apiUrl, partner);
  }

  updatePartner(partner: IPartner) {
    return this.httpClient.put<IPartner>(
      `${this.apiUrl}/${partner.id}`,
      partner
    );
  }

  deletePartner(partner: IPartner) {
    return this.httpClient.delete<void>(`${this.apiUrl}/${partner.id}`);
  }
}
