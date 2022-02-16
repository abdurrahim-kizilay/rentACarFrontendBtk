import { HttpClient } from '@angular/common/http';
import { AdditionalServiceAddModel } from './../../models/additional-service/additionalServiceAddModel';
import { Observable } from 'rxjs';
import { ResponseModel } from './../../models/responseModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServiceService {

apiUrl:string='http://localhost:8080/api/additional-service-items/'
constructor(private httpClient:HttpClient) { }

add(additionalServiceAddModel:AdditionalServiceAddModel):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"add",additionalServiceAddModel)
}
}
