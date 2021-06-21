import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomertypeService} from '../../service/customertype.service';
import {CompileTypeMetadata} from '@angular/compiler';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.pattern('^KH-[0-9]{4}$'), Validators.required]),
    name: new FormControl('',Validators.required),
    birthday: new FormControl('',Validators.required),
    idCard: new FormControl('',[Validators.required,Validators.pattern("^([0-9]{9}|[0-9]{12})$")]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern("^(0|\\(84\\)\\+)(90|91)[\\d]{7}$")]),
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl('',Validators.required),
    customerType: new FormControl('',Validators.required)
  });
  customerTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private router: Router,
              private customertypeService: CustomertypeService) {
  }

  ngOnInit(): void {
    this.getCustomerType();
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.addNewCustomer(customer).subscribe(addCustomer => {


    }, error => {

    }, () => {
      this.router.navigateByUrl('customer');
    });

  }

  getCustomerType() {
    this.customertypeService.findAll().subscribe(customerType => {
      this.customerTypeList = customerType;
    });
  }
}
