import { MaintenanceService } from './../../services/maintenance/maintenance.service';
import { MaintenanceAddModel } from './../../models/maintenance/maintenanceAddModel';
import { MaintenanceListModel } from './../../models/maintenance/maintenaceListModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CityService } from './../../services/city/city.service';
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from './../../models/responseModel';
import { RentalAddIndividualModel } from './../../models/rental/rentalAddIndividualModel';
import { RentalService } from './../../services/rental/rental.service';
import { CarService } from './../../services/car/car.service';
import { CarDetailModel } from './../../models/car-detail/carDetail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityListModel } from 'src/app/models/city/cityListModel';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  maintenance = <MaintenanceAddModel>{};
  car: CarDetailModel;
  rentalIndividual = <RentalAddIndividualModel>{};
  dataLoaded: boolean = false;
  cities: CityListModel[];
  rentalAddForm: FormGroup;
  maintenanceAddForm: FormGroup;
  constructor(
    private cityService: CityService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private maintenanceService: MaintenanceService
  ) {}

  ngOnInit(): void {
    this.getCarById();
    this.getCities();
    this.createRentalAddForm();
    // this.createMaintenanceAddForm();
  }

  addMaintenance() {
    // if (this.maintenanceAddForm.valid) {
    //   let maintenanceModel = Object.assign({}, this.maintenanceAddForm.value);

      this.activatedRoute.params.subscribe((params) => {
        // console.log(params['carId'])
        this.maintenance.carId = params['carId'];
        this.maintenance.maintenanceStart=new Date('2022-01-30')
        this.maintenanceService.add(this.maintenance).subscribe(
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
        )
      })
    // }else {
    //   this.toastrService.error('Formunuz eksik', 'Dikkat');
    // }
  }
  createMaintenanceAddForm() {
    this.maintenanceAddForm = this.formBuilder.group({
      maintenanceStart: ['', Validators.required],
    });
  }

  getCarById() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['carId']);
      this.carService.getCarById(params['carId']).subscribe((response) => {
        this.dataLoaded = false;
        this.car = response.data;
        this.dataLoaded = true;
      });
    });
  }
  getCities() {
    this.cityService.getCities().subscribe((response) => {
      this.dataLoaded = false;
      this.cities = response.data;
      this.dataLoaded = true;
    });
  }

  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      pickUpCityId: ['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }

  rentalAdd() {
    if (this.rentalAddForm.valid) {
      let rentalModel = Object.assign({}, this.rentalAddForm.value);
      this.rentalIndividual.carId = this.car.id;
      this.rentalIndividual.customerId = 1;
      this.rentalIndividual.promoCodeId = 1;
      // this.rentalIndividual.pickUpCityId=rentalModel.pickUpCityId
      this.rentalIndividual.rentDate = rentalModel.rentDate;
      this.rentalService.add(this.rentalIndividual).subscribe(
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
