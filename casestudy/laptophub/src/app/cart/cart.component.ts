import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cartservice } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { ICart } from './ICart';

interface IProduct{
  productId:number,
  productName:string,
  productDescription:string,
  productPrice:number,
  imagePath:string
}

interface IProductCart {
  productId:number,
  productName:string,
  productDescription:string,
  productPrice:number,
  imagePath:string,
  cart:ICart
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: ICart[] = [];
  products:IProduct[]=[];
  cartProducts : IProductCart[]=[];
  totalAmount:number=0;
  total:number[]=[];
  constructor(private cartservice: Cartservice,private productService: ProductService,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
  this.loadCartData();
  console.log(this.total);
  }

  loadCartData(){
    this.cartservice.getCarts().subscribe(result=>{
      this.carts=result;
      this.carts.forEach(cart => {
        this.productService.find(cart.ProductId).subscribe(product => {
          this.cartProducts.push({
            productId:product.id,
            productName:product.productName,
            productPrice:product.price,
            productDescription:product.Description,
            imagePath:product.image,
            cart:cart
          })
        })
      });
     });
  }

  changeQuantity(event: Event) {
     (event.target as HTMLInputElement).value;
    console.log( (event.target as HTMLInputElement).value);
  }

    saveOrder(){
    }

    removeFromCart(id:number){
     this.cartservice.delete(id).subscribe(data=>{
      this.cartProducts = this.cartProducts.filter(cart=> cart.cart.id !== id);
      });
    }

   displayTotalAmount(){
    var total=0;
    this.cartProducts.forEach(function(item){
      total += item.cart.Quantity * item.productPrice;
    })
    return total;
    }

  }

