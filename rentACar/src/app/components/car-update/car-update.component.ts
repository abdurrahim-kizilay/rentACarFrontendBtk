import { ToastrService } from 'ngx-toastr';
import { CarService } from './../../services/car/car.service';
import { ActivatedRoute } from '@angular/router';
import { ColorService } from './../../services/color/color.service';
import { BrandService } from './../../services/brand/brand.service';
import { BrandListModel } from './../../models/brand/brandListModel';
import { ColorListModel } from './../../models/color/colorListModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CarDetailModel } from 'src/app/models/car-detail/carDetail';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  colors:ColorListModel[]
  brands:BrandListModel[]
  car:CarDetailModel
  dataLoaded = false
  carUpdateForm:FormGroup
  dailyPrice:number
  constructor(private formBuilder:FormBuilder
    ,private brandService:BrandService
    ,private colorService:ColorService
    ,private activatedRoute:ActivatedRoute
    ,private carService:CarService
    ,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCarById()
    this.getBrands()
    this.getColors()

    this.createCarUpdateForm()

  }

  createCarUpdateForm(){

    this.carUpdateForm= this.formBuilder.group({
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      dailyPrice:[this.dailyPrice,Validators.required],
      model:["",Validators.required],
      findexScore:["",Validators.required],
      kilometer:["",Validators.required],
      imageUrl:["",Validators.required],
      description:["",Validators.required],
      minAge:["",Validators.required],
      segmentId:["",Validators.required]
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
  getCarById() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['carId']);
      this.carService.getCarById(params['carId']).subscribe((response) => {
        this.dataLoaded = false;
        this.car = response.data
        this.dataLoaded = true;
        this.dailyPrice=response.data.dailyPrice
      });
    });
  }

  carUpdate() {
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
      carModel.id= this.car.id
      this.carService.update(carModel).subscribe(
        (response) => {
          if (response.success) {
            this.toastrService.success(response.message, 'Başarılı');
          } else {
            this.toastrService.warning(response.message, 'Başarısız');
          }
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
