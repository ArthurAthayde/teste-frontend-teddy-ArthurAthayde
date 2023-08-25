import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { IPartner } from '../interfaces/IPartners';

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  private apiUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<IPartner[]>(this.apiUrl);
  }
  // getById(id: string) {
  //   const apiUrl = `${environment.apiBaseUrl}`;
  //   return this.httpClient.get<IPartner>(`${apiUrl}/${id}`).toPromise();
  // }
  // createPartner(partner: IPartner) {
  //   const apiUrl = `${environment.apiBaseUrl}`;
  //   return this.httpClient.post<IPartner>(`${apiUrl}`, partner).toPromise();
  // }
  // putPartnerInfo(partner: IPartner) {
  //   const apiUrl = `${environment.apiBaseUrl}`;
  //   return this.httpClient
  //     .put<IPartner>(`${apiUrl}/${partner.id}`, partner)
  //     .toPromise();
  // }
  // deletePartner(id: string) {
  //   const apiUrl = `${environment.apiBaseUrl}`;
  //   return this.httpClient.delete(`${apiUrl}/${id}`).toPromise();
  // }
}
