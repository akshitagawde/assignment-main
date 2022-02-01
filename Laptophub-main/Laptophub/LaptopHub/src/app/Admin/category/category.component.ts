import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import{CategoryService}from '../services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  form!: FormGroup;
  constructor(public categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
      this.form = new FormGroup({
        categoryName: new FormControl('', [Validators.required])
    });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.categoryService.create(this.form.value).subscribe((res:any) => {
         console.log('Category created successfully!');
         this.router.navigateByUrl('/CategoryList');
    })
  }
}
