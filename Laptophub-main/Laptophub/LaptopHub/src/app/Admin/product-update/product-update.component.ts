import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import{ProductService}from '../services/product.service';
import{IProduct} from '../product/IProduct';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  id!: number;
  product!: IProduct;
  form!: FormGroup;
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.find(this.id).subscribe((data:IProduct)=>{
      this.product = data;
    });
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

   submit(){
    console.log(this.form.value);
    this.productService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Product Details updated successfully!');
         this.router.navigateByUrl('/productlist');
    })
  }
}
