import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];
  private customer: Customer;
  API_URL = ' http://localhost:3000/customerList';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }

  addNewCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL, customer);
  }

  findByIDCus(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_URL + '/' + id);
  }

  editCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.API_URL + '/' + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(this.API_URL + '/' + id);
  }

  searchCustomer(name: string, address: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + '?name_like=' + name  + '&address_like='+ address);
  }

  sort():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.API_URL+'?_sort=code&_order=desc&_limit=5')

  }
}
