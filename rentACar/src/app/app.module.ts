import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {PasswordModule} from 'primeng/password';


import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"


import {TabViewModule} from 'primeng/tabview';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CarComponent } from './components/car/car.component';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

import {ToastrModule} from "ngx-toastr";
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { RentalAddIndividualComponent } from './components/rental-add-individual/rental-add-individual/rental-add-individual.component';
import { NaviComponent } from './components/navi/navi/navi.component';
import { AdditionalServiceComponent } from './components/additional-service/additional-service/additional-service.component';
import { PromoCodeAddComponent } from './components/promo-code-add/promo-code-add/promo-code-add.component';
import { RentalListByCustomerIdComponent } from './components/rental-list-by-customer-id/rental-list-by-customer-id/rental-list-by-customer-id.component';
import { PaymentComponent } from './components/paymet/payment/payment.component';
import { MaintenanceComponent } from './components/maintenance/maintenance/maintenance.component';
import { InvoiceIndividualComponent } from './components/invoice-individual/invoice-individual/invoice-individual.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarDetailComponent,
    ColorAddComponent,
    BrandAddComponent,
    CarAddComponent,
    RentalAddIndividualComponent,
    NaviComponent,
    AdditionalServiceComponent,
    PromoCodeAddComponent,
    RentalListByCustomerIdComponent,
    PaymentComponent,
    MaintenanceComponent,
    InvoiceIndividualComponent,
    CarUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataViewModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule,
    PanelModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })


  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
