import { RentalByCustomerIdModel } from './../../models/rental/rentalByCustomerIdModel';
import { ListResponseModel } from './../../models/listResponseModel';
import { Observable } from 'rxjs';
import { RentalAddIndividualModel } from './../../models/rental/rentalAddIndividualModel';
import { ResponseModel } from './../../models/responseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

apiUrl: string = 'http://localhost:8080/api/rentals/';


constructor(private httpClient:HttpClient) { }

getRentalsByCustomerId(customerId:number): Observable<ListResponseModel<RentalByCustomerIdModel>> {
  return this.httpClient.get<ListResponseModel<RentalByCustomerIdModel>>(this.apiUrl + 'find-all-by-customer-id/'+customerId);
}

add(rentalAddIndividualModel:RentalAddIndividualModel):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"add-for-individual-customer",rentalAddIndividualModel)
}

}
