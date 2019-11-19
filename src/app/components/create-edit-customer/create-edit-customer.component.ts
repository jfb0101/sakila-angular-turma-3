import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/types/Customer';
import { Address } from 'src/app/types/Address';

@Component({
  selector: 'app-create-edit-customer',
  templateUrl: './create-edit-customer.component.html',
  styleUrls: ['./create-edit-customer.component.css']
})
export class CreateEditCustomerComponent implements OnInit {

  constructor() { }

  customer:Customer = new Customer
  address:Address = new Address

  ngOnInit() {
  }

  onCitySelected(cityId:number) {
    this.address.cityId = cityId
  }

}
