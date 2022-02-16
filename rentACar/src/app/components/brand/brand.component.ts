import { BrandListModel } from './../../models/brand/brandListModel';
import { BrandService } from './../../services/brand/brand.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls:['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:BrandListModel[] = [];
  currentBrand: BrandListModel;
  unSetBrand:BrandListModel
  dataLoaded:boolean =false;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.dataLoaded = false
      this.brands =response.data;
      this.dataLoaded = true;
    })
  }



  setCurrentBrand(brand:BrandListModel){
    this.currentBrand=brand
  }

  unSetCurrentBrand(){
    this.currentBrand=this.unSetBrand
  }


  getCurrentBrandClass(brand:BrandListModel){
    if(brand == this.currentBrand){
      return "list-group-item list-group-item-action active"
    }

    return "list-group-item list-group-item-action"
  }

  getAllBrandClass(){

    if(!this.currentBrand){
      return "list-group-item list-group-item-action active"
    }

    return "list-group-item list-group-item-action"

  }
}


