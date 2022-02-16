import { HttpClient } from '@angular/common/http';
import { ResponseModel } from './../../models/responseModel';
import { Observable } from 'rxjs';
import { PromoCodeAddModel } from './../../models/promo-code/promoCodeAddModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromoCodeService {


  apiUrl: string = 'http://localhost:8080/api/promo-codes/';

constructor(private httpClient:HttpClient) { }

add(promoCodeAddModel:PromoCodeAddModel):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"add",promoCodeAddModel)
}
}
