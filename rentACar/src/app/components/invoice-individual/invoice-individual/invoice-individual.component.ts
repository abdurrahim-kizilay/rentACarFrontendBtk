import { InvoiceIndividualListModel } from './../../../models/invoice/invoiceIndividualListModel';
import { InvoiceService } from './../../../services/invoice/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-individual',
  templateUrl: './invoice-individual.component.html',
  styleUrls: ['./invoice-individual.component.css'],
})
export class InvoiceIndividualComponent implements OnInit {
  invoice:InvoiceIndividualListModel
  dataLoaded = false;
  constructor(private invoiceService:InvoiceService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.getInvoiceByRentalId()
  }

  getInvoiceByRentalId() {
    this.activatedRoute.params.subscribe((params) => {
      this.invoiceService.getInvoiceIndividualRentalId(params['rentalId']).subscribe((response) => {
        this.dataLoaded = false;
        this.invoice = response.data;
        console.log(this.invoice);

        this.dataLoaded = true;
      });
    });
  }
}
