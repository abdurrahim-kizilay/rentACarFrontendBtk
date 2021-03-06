import { ResponseModel } from './../../models/responseModel';
import { ColorAddModel } from './../../models/color/colorAddModel';
import { ColorListModel } from './../../models/color/colorListModel';
import { ListResponseModel } from './../../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl: string = 'http://localhost:8080/api/colors/';
  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<ColorListModel>> {
    return this.httpClient.get<ListResponseModel<ColorListModel>>(this.apiUrl + 'find-all');
  }

  add(colorAddModel:ColorAddModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",colorAddModel)
  }
}
