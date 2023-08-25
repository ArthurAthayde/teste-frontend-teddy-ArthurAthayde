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

  getAll(page: number, itemsPerPage: number): Observable<IPartner[]> {
    const startIndex = page * itemsPerPage;
    return this.httpClient.get<IPartner[]>(this.apiUrl, {
      params: {
        _start: startIndex.toString(),
        _limit: itemsPerPage.toString(),
      },
    });
  }

  createPartner(partner: IPartner) {
    return this.httpClient.post<IPartner>(this.apiUrl, partner);
  }

  updatePartner(partner: IPartner) {
    return this.httpClient.put<IPartner>(this.apiUrl, partner);
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
