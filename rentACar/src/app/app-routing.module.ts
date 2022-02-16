import { CarUpdateComponent } from './components/car-update/car-update.component';
import { InvoiceIndividualComponent } from './components/invoice-individual/invoice-individual/invoice-individual.component';
import { MaintenanceComponent } from './components/maintenance/maintenance/maintenance.component';
import { PaymentComponent } from './components/paymet/payment/payment.component';
import { RentalListByCustomerIdComponent } from './components/rental-list-by-customer-id/rental-list-by-customer-id/rental-list-by-customer-id.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';

import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { AdditionalServiceComponent } from './components/additional-service/additional-service/additional-service.component';
import { PromoCodeAddComponent } from './components/promo-code-add/promo-code-add/promo-code-add.component';

const routes: Routes = [
  {path:'cars',component:CarComponent},
  {path:'',redirectTo : 'cars',pathMatch:'full'},
  {path:'car/details/:carId',component:CarDetailComponent},
  {path:'cars/brand/:brandId',component:CarComponent},
  {path:'color/add',component:ColorAddComponent},
  {path:'brand/add',component:BrandAddComponent},
  {path:'car/add',component:CarAddComponent},
  {path:'brands',component:BrandComponent},
  {path:'additionalService/add',component:AdditionalServiceComponent},
  {path:'promoCode/add',component:PromoCodeAddComponent},
  {path:'rental-list-by-customer-id',component:RentalListByCustomerIdComponent},
  {path:'peyment/:rentalId',component:PaymentComponent},
  {path:'maintenances',component:MaintenanceComponent},
  {path:'invoice-individual/:rentalId',component:InvoiceIndividualComponent},
  {path:'car/update/:carId',component:CarUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
