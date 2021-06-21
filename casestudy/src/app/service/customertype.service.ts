import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../model/customer-type';
const API_URL_TYPE = 'http://localhost:3000/typeCustomerList';
@Injectable({
  providedIn: 'root'
})


export class CustomertypeService {


  constructor(private http: HttpClient) {
  }

  findAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(API_URL_TYPE)
  }
}
