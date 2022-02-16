import { ListResponseModel } from './../../models/listResponseModel';
import {  PaymentListByRentalIdModel } from './../../models/payment/paymentListByIdModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { PaymentAddModel } from './../../models/payment/paymentAddModel';
import { ResponseModel } from './../../models/responseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

apiUrl: string = 'http://localhost:8080/api/payments/';

constructor(private httpClient:HttpClient) { }


getPaymentByRentalId(rentalId:number): Observable<ListResponseModel<PaymentListByRentalIdModel>> {
  return this.httpClient.get<ListResponseModel<PaymentListByRentalIdModel>>( this.apiUrl+ "find-all-by-rental-id/"+rentalId);
}

add(paymentAddModel:PaymentAddModel):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"add",paymentAddModel)
}

}
