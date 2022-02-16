import { ActivatedRoute } from '@angular/router';
import { CarListModel } from './../../models/car/carListModel';
import { CarService } from './../../services/car/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars:CarListModel[] = [];

  dataLoaded:boolean =false;
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.dataLoaded = false
      this.cars =response.data;
      this.dataLoaded = true;
    })
  }
  getCarsByBrandId(brandId:number){
        this.carService.getCarsByBrandId(brandId).subscribe(response => {
        this.dataLoaded = false
        this.cars =response.data;
        this.dataLoaded = true;
      })
  }
}
