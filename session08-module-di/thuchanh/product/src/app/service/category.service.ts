import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [{
    id: 1,
    name: 'IPhone'
  }, {
    id: 2,
    name: 'Samsung',
  }, {
    id: 3,
    name: 'LG',
  }];

  constructor() {
  }

  saveCategory(category) {
    this.categories.push(category);
  }

  findById(id: number) {
    return this.categories.find(category => category.id === id);
  }

  updateCategory(category:Category) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === category.id) {
        this.categories[i] = category;
      }
    }
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter(category => {
      return category.id !== id;
    });
  }
}
