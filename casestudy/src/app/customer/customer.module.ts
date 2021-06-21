import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
// import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerEditComponent,
    // CustomerDeleteComponent,
    CustomerCreateComponent
  ]
  ,
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgxPaginationModule,
    FormsModule,

  ]
})
export class CustomerModule {
}
