import { InvoiceService } from './../../../services/invoice/invoice.service';
import { InvoiceIndividualListModel } from './../../../models/invoice/invoiceIndividualListModel';
import { RentalService } from './../../../services/rental/rental.service';
import { RentalByCustomerIdModel } from './../../../models/rental/rentalByCustomerIdModel';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-list-by-customer-id',
  templateUrl: './rental-list-by-customer-id.component.html',
  styleUrls: ['./rental-list-by-customer-id.component.css']
})
export class RentalListByCustomerIdComponent implements OnInit {
  invoice:InvoiceIndividualListModel
  rentals:RentalByCustomerIdModel[]=[]
  dataLoaded:boolean=false
  constructor(private invoiceService:InvoiceService,private rentalService:RentalService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getRentalsByCustomerId()
  }
  getRentalsByCustomerId(){

        this.rentalService.getRentalsByCustomerId(1).subscribe(response => {
        this.dataLoaded = false
        this.rentals =response.data
        this.dataLoaded = true
      })
  }




}
