import { ColorService } from './../../services/color/color.service';
import { ColorListModel } from './../../models/color/colorListModel';
import { BrandListModel } from './../../models/brand/brandListModel';
import { SegmentListModel } from './../../models/segment/segmentListModel';
import { SegmentService } from './../../services/segment/segment.service';
import { CityListModel } from 'src/app/models/city/cityListModel';
import { CityService } from './../../services/city/city.service';
import { CarService } from './../../services/car/car.service';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from './../../services/brand/brand.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup;
  dataLoaded:boolean=false;
  cities:CityListModel[];
  segments:SegmentListModel[]=[{id:1,segmentName:'Ekonomi'},{id:2,segmentName:'Medium'},{id:3,segmentName:'Prestij'}];
  brands:BrandListModel[]
  colors:ColorListModel[]
  constructor(private formBuider:FormBuilder,private carService:CarService
    ,private toastrService:ToastrService
    ,private cityService:CityService
    ,private segmentService:SegmentService
    ,private brandService:BrandService
    ,private colorService:ColorService) { }

  ngOnInit(): void {
    this.createBrandAddForm();
    this.getCities();
    this.getBrands();
    this.getColors();
  }

  createBrandAddForm(){
    this.carAddForm = this.formBuider.group({
      dailyPrice:["",Validators.required],
      model: ["",Validators.required],
      description: ["",Validators.required],
      findexScore: ["",Validators.required],
      kilometer: ["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      imageUrl:["",Validators.required],
      minAge:["",Validators.required],
      segmentId: ["",Validators.required],
      cityId:["",Validators.required]
    })
  }
  getCities(){
    this.cityService.getCities().subscribe(response => {
      this.dataLoaded = false
      this.cities =response.data;
      this.dataLoaded = true;
    })
  }
  getSegments(){
    this.segmentService.getSegments().subscribe(response => {
      this.dataLoaded = false
      this.segments =response.data;
      this.dataLoaded = true;
    })
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.dataLoaded = false
      this.brands =response.data;
      this.dataLoaded = true;
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.dataLoaded = false
      this.colors =response.data;
      this.dataLoaded = true;
    })
  }
  add(){

    if(this.carAddForm.valid){
      let carModel = Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }
        }
      })

    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }
}
