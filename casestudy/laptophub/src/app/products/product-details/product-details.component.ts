import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ICart } from 'src/app/cart/ICart';
import { Cartservice } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:IProduct | undefined;
  productId: number = 0 ;
  cart:ICart | undefined;
  constructor(private productService: ProductService
    ,private _snackBar: MatSnackBar, private route:ActivatedRoute,
    private router:Router,
    private cartService:Cartservice) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.getProduct();
  }
  getProduct(): void {
    this.productService.find(this.productId).subscribe(
      (product: IProduct) => {
        this.product = product;
      },
      (error) => {
        this._snackBar.open('Something went wrong', 'Please Try again', {
          duration: 3000
        });
      }
    );
  }

  addToCart(){
    if(this.product) {

      this.cartService.findCartByProduct(this.product.id).subscribe((cart:ICart[])=> {
       if(cart.length > 0) {
        this.router.navigate(['/Cart']);
       } else {
         if(this.product) {
          this.cart = {
            id:0,
            ProductId:this.product.id,
            productName:this.product.productName,
            Password:'NA',
            Quantity: 1,
            TotalAmount:this.product.price
          }

          this.cartService.create(this.cart).subscribe((cart:ICart)=> {
            this.router.navigate(['/Cart']);
          },
          (error)=>{
            this._snackBar.open('Something went wrong', 'Please Try again', {
              duration: 3000
            });
          });
         }
       }
      },
      (error)=>{
        this._snackBar.open('Something went wrong', 'Please Try again', {
          duration: 3000
        });
      });
    }
  }
}
