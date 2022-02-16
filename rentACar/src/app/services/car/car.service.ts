import { CarUpdateModel } from './../../models/car/carUpdateModel';
import { CarAddModel } from './../../models/car/carAddModel';
import { ResponseModel } from './../../models/responseModel';
import { CarListModel } from './../../models/car/carListModel';
import { ListResponseModel } from './../../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { CarDetailModel } from 'src/app/models/car-detail/carDetail';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = 'http://localhost:8080/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarListModel>> {
    return this.httpClient.get<ListResponseModel<CarListModel>>(
      this.apiUrl + 'find-all?pageNo=1&pageSize=1000'
    );
  }

  getCarById(carId:number): Observable<SingleResponseModel<CarDetailModel>> {
    return this.httpClient.get<SingleResponseModel<CarDetailModel>>( this.apiUrl+ "find-by-id/"+carId);
  }

  add(carAddModel:CarAddModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",carAddModel)
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarListModel>>{
    return this.httpClient.get<ListResponseModel<CarListModel>>(this.apiUrl+"find-all-by-brand-id?brandId="+brandId+"&pageNo=1&pageSize=100")
  }

  update(carUpdateModel:CarUpdateModel):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.apiUrl+"update",carUpdateModel)
  }
}
