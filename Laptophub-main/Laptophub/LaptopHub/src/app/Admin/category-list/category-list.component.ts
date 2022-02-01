import { Component, OnInit } from '@angular/core';
import { Icategory } from '../category/ICategory';
import{CategoryService}from '../services/category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories:Icategory[]=[];
  constructor(private categoryService :CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories():void
  {
     this.categoryService.getCategories().subscribe(all_category=>this.categories=all_category);
   }
   deleteUser(id:number){
    this.categoryService.delete(id).subscribe(res => {
         this.categories = this.categories.filter(category => category.id !== id);
         console.log('Category deleted successfully!');
    })
  }

}
