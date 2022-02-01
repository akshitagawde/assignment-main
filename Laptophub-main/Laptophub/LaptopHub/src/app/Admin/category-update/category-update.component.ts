import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Icategory } from '../category/ICategory';
import{CategoryService}from '../services/category.service';
@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  id!: number;
  category!: Icategory;
  form!: FormGroup;
  constructor(
    public categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoryService.find(this.id).subscribe((data:Icategory)=>{
      this.category = data;
    });
    this.form = new FormGroup({
      categoryName: new FormControl('', [Validators.required])
    });
  }

   get f(){
    return this.form.controls;
   }

   submit(){
    console.log(this.form.value);
    this.categoryService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Category Details updated successfully!');
         this.router.navigateByUrl('/UserList');
    })
  }


}
