import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { ICart } from '../cart/Icart';
import { Cartservice } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  cart:ICart | undefined;

  constructor(
    private productService: ProductService,
    private cartService:Cartservice,
    private _snackBar: MatSnackBar,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
      },
      (error) => {
        this._snackBar.open('Something went wrong', 'Please Try again', {
          duration: 3000
        });
      }
    );
  }

  addToCart(product:IProduct){
    this.cart = {
      ProductId:product.id,
      productName:product.productName,
      Password:'NA',
      Quantity: 1,
      TotalAmount:product.price
    }

    this.cartService.create(this.cart).subscribe((cart:ICart)=> {
      this.route.navigate(['/Cart']);
    },
    (error)=>{
      this._snackBar.open('Something went wrong', 'Please Try again', {
        duration: 3000
      });
    });

  }


}
