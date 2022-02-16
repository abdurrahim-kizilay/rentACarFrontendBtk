import { ToastrService } from 'ngx-toastr';
import { AdditionalServiceService } from './../../../services/additional-service/additional-service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-service',
  templateUrl: './additional-service.component.html',
  styleUrls: ['./additional-service.component.css']
})
export class AdditionalServiceComponent implements OnInit {

  additionalServiceAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private additionalServiceService:AdditionalServiceService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createAdditionalServiceAddForm();
  }

  createAdditionalServiceAddForm(){
    this.additionalServiceAddForm = this.formBuilder.group({
      price:["",Validators.required],
      name:["",Validators.required]
    })
  }
  add(){

    if(this.additionalServiceAddForm.valid){
      let additionalServiceModel = Object.assign({},this.additionalServiceAddForm.value)
      this.additionalServiceService.add(additionalServiceModel).subscribe(response=>{
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
