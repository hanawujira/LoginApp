import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfferModel } from '../models/offers.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffersList(): Observable<{offers:OfferModel[]}> {
    const url = 'https://selfcare-service.test.melita.com/interview/backend/api/offers';
    return this.http.get<{offers:OfferModel[]}>(url);
  }

  getOfferDetail(offerId: number): Observable<OfferModel>{
    const  url = 'https://selfcare-service.test.melita.com/interview/backend/api/offers/';
    return this.http.get<OfferModel>(`${url}${offerId}/subscriptions`);
  }
}
