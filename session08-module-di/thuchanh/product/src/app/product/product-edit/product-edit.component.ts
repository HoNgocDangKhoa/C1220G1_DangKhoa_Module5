import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  fromProduct: FormGroup;
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    let id = this.activatedRoute.snapshot.params.id;
    this.product = this.productService.findById(Number(id));
    this.fromProduct = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description)
    });

  }

  ngOnInit(): void {
  }

  submitEditForm(editForm: FormGroup) {
    this.product = editForm.value;
    this.productService.edit(this.product);
    this.router.navigateByUrl('product/list');
  }
}
