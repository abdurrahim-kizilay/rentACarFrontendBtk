import { MaintenanceListModel } from './../../models/maintenance/maintenaceListModel';
import { ResponseModel } from './../../models/responseModel';
import { MaintenanceAddModel } from './../../models/maintenance/maintenanceAddModel';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from './../../models/listResponseModel';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

apiUrl: string = 'http://localhost:8080/api/car-maintenances/';

constructor(private httpClient:HttpClient) { }

getMaintenances(): Observable<ListResponseModel<MaintenanceListModel>> {
  return this.httpClient.get<ListResponseModel<MaintenanceListModel>>(this.apiUrl + 'find-all');
}

add(maintenanceAddModel:MaintenanceAddModel):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"add",maintenanceAddModel)
}
}
