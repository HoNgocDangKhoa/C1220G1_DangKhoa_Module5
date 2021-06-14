import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryForm: FormGroup;
  category: Category;


  constructor(private  categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    let id = this.activatedRoute.snapshot.params.id;
   this.category =this.categoryService.findById(Number(id))
    this.categoryForm = new FormGroup({
      id: new FormControl(this.category.id),
      name: new FormControl(this.category.name)
    })

  }

  ngOnInit(): void {
  }

  deleteForm(id:number){
    this.categoryService.deleteCategory(id);
    this.router.navigateByUrl('category/list')
  }

}
