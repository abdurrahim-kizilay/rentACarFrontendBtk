import { MaintenanceListModel } from './../../../models/maintenance/maintenaceListModel';
import { MaintenanceService } from './../../../services/maintenance/maintenance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  maintenances:MaintenanceListModel[]
  dataLoaded = false
  constructor(private maintenanceService:MaintenanceService) { }

  ngOnInit(): void {
    this.getMaintenances()
  }

  getMaintenances(){
    this.maintenanceService.getMaintenances().subscribe(response => {
      this.dataLoaded = false
      this.maintenances =response.data;
      this.dataLoaded = true;
    })
  }
}
