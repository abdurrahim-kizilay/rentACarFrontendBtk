import { HttpClient } from '@angular/common/http';
import { InvoiceIndividualListModel } from './../../models/invoice/invoiceIndividualListModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  apiUrl: string = 'http://localhost:8080/api/invoices/';

constructor(private httpClient:HttpClient) { }


getInvoiceIndividualRentalId(rentalId:number): Observable<SingleResponseModel<InvoiceIndividualListModel>> {
  return this.httpClient.get<SingleResponseModel<InvoiceIndividualListModel>>( this.apiUrl+ "get-invoice-for-individual-customer/"+rentalId);
}

}
