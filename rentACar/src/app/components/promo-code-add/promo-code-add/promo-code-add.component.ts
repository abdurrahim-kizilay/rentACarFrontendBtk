import { ToastrService } from 'ngx-toastr';
import { PromoCodeService } from './../../../services/promo-code/promo-code.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-code-add',
  templateUrl: './promo-code-add.component.html',
  styleUrls: ['./promo-code-add.component.css']
})
export class PromoCodeAddComponent implements OnInit {

  promoCodeAddForm : FormGroup;

  constructor(private formBuilder:FormBuilder,
    private promoCodeService:PromoCodeService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createPromoCodeAddForm();
  }

  createPromoCodeAddForm(){
    this.promoCodeAddForm = this.formBuilder.group({
      code:["",Validators.required],
      discountRate:["",Validators.required],
      startDate:["",Validators.required],
      endDate:["",Validators.required],
      description:["",Validators.required]
    })
 }

  add(){
    if(this.promoCodeAddForm.valid){
      let promoCodeModel = Object.assign({},this.promoCodeAddForm.value)
        this.promoCodeService.add(promoCodeModel).subscribe(response=>{
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
