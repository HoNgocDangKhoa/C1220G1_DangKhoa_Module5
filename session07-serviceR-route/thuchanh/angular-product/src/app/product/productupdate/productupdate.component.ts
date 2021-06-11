import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css']
})
export class ProductupdateComponent implements OnInit {
  productForm: FormGroup;
  public product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.productForm=new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl()
    })
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    this.product=this.productService.findById(Number(id))
    this.productService.saveProduct(this.product)
  }

  submitEditForm(editForm: FormGroup) {
    let product = editForm.value;
    this.productService.saveProduct(product);
    this.router.navigateByUrl("product/list")
  }
}
