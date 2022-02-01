import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import{ProductService}from '../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  form!: FormGroup;
  constructor(public productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      Description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      Category: new FormControl('', Validators.required)

    });
  }
  get f(){
    return this.form.controls;
  }

  onImagePicked(event:any)
  {

    const reader = new FileReader();

  }

  submit(){
    console.log(this.form.value);
    this.productService.create(this.form.value).subscribe((res:any) => {
         console.log('Product created successfully!');
         this.router.navigateByUrl('/productlist');
    })
  }

}
