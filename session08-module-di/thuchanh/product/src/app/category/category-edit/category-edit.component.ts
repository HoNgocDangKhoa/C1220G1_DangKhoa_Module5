import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryForm: FormGroup;
  category: Category;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    let id = this.activatedRoute.snapshot.params.id;
    this.category = this.categoryService.findById(Number(id));
    this.categoryForm = new FormGroup({
      id: new FormControl(this.category.id),
      name: new FormControl(this.category.name)
    });
  }

  ngOnInit(): void {
  }

  submitEdit() {
    this.category = this.categoryForm.value;
    this.categoryService.updateCategory( this.category);
    this.router.navigateByUrl('category/list');
  }
}
