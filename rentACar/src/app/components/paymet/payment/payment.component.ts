import { PaymentListByRentalIdModel } from './../../../models/payment/paymentListByIdModel';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from './../../../services/payment/payment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payments:PaymentListByRentalIdModel[]
  dataLoaded = false
  paymentAddForm : FormGroup;
  constructor(private toastrService:ToastrService,private formBuilder:FormBuilder,private paymentService:PaymentService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createPaymentAddForm();
    this.getPaymenByRentalId();
  }

  createPaymentAddForm(){
    this.paymentAddForm= this.formBuilder.group({
      paymentTime:[],
      rentalId:[],
      cardNo:["",Validators.required],
      day:["",Validators.required],
      month:["",Validators.required],
      cvv:["",Validators.required]
    })

  }
  getPaymenByRentalId(){
    this.activatedRoute.params.subscribe(params=>{
      this.paymentService.getPaymentByRentalId(params['rentalId']).subscribe(response => {
        this.dataLoaded = false
        this.payments =response.data;

        this.dataLoaded = true;
      })
    })

  }

  add(){
    if(this.paymentAddForm.valid){
      let paymentAddModel = Object.assign({},this.paymentAddForm.value)
      paymentAddModel.paymentTime = new Date
      this.activatedRoute.params.subscribe(params=>{paymentAddModel.rentalId =  params['rentalId'] })
      this.toastrService.success("Ödeme Başarılı")
      this.paymentService.add(paymentAddModel).subscribe(response=>{
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
