import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {CustomertypeService} from '../../service/customertype.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer;
  idCustomer: string;
  customerTypeList: CustomerType[] ;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private customertypeService: CustomertypeService) {

  }

  ngOnInit(): void {
    this.idCustomer = this.activatedRoute.snapshot.params.id;
    console.log(this.idCustomer)
    this.customerService.findByIDCus(Number(this.idCustomer)).subscribe(customer =>{
      this.customer=customer;
      this.customertypeService.findAll().subscribe(customerType =>{
        this.customerTypeList = customerType;
      })


    },error => {

    },()=> {
      console.log(this.customer);
      this.customerForm = new FormGroup({
        id: new FormControl(this.customer.id),
        code: new FormControl(this.customer.code, [Validators.pattern('^KH-[0-9]{4}$'), Validators.required]),
        name: new FormControl(this.customer.name,Validators.required),
        birthday: new FormControl(this.customer.birthday,Validators.required),
        idCard: new FormControl(this.customer.idCard,[Validators.required,Validators.pattern("^([0-9]{9}|[0-9]{12})$")]),
        phoneNumber: new FormControl(this.customer.phoneNumber,[Validators.required,Validators.pattern("^(0|\\(84\\)\\+)(90|91)[\\d]{7}$")]),
        email: new FormControl(this.customer.email,[Validators.required,Validators.email]),
        address: new FormControl(this.customer.address,Validators.required),
        customerType: new FormControl(this.customer.customerType,Validators.required)
      });
    });


  }
  submitEdit() {
    this.customer = this.customerForm.value;
    this.customerService.editCustomer(Number(this.idCustomer), this.customer).subscribe(() => {
      this.router.navigateByUrl('customer');
    });

  }
}
