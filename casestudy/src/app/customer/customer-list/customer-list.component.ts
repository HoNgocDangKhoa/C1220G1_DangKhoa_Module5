import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomertypeService} from '../../service/customertype.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import Swal from 'sweetalert2';
import {inspect} from 'util';
import {collectExternalReferences} from '@angular/compiler';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  customerTypeList: CustomerType[];
  idCustomer: number;
  p: number = 1;
  code: string;
  collectionSize: number;
  addressAPI: string;
  nameAPI: string;


  constructor(private customerService: CustomerService,
              private customertypeService: CustomertypeService
  ) {

  }

  ngOnInit(): void {
    this.findAll();
    this.collectionSize = this.customers.length;
    this.customertypeService.findAll().subscribe(customerType => {
     this.customerTypeList = customerType;
    });
  }

  findAll() {
    this.customerService.findAll().subscribe(customerList => {
      this.customers = customerList;
    });
  }

  getIdCus(id: number) {
    this.customerService.findByIDCus(id).subscribe(customer => {
      this.idCustomer = customer.id;
      this.code = customer.code;
      console.log(this.idCustomer);

    });
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idCustomer).subscribe(() => {
      this.findAll();
      this.showAlert();
    });
  }

  search(nameAPI: string, addressAPI: string) {
    this.customerService.searchCustomer(nameAPI, addressAPI).subscribe(customer => {
      this.customers = customer;

    });

  }
  showAlert(){
    // @ts-ignore
    new Swal({
      position: 'center',
      icon: 'success',
      title: 'Your work has been deleted',
      showConfirmButton: false,
      timer: 1000
    })
  }
  sort(){
    this.customerService.sort().subscribe(customer=>{
      this.customers = customer;
    })
  }
}
