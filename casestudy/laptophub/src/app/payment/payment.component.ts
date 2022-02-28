import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICart } from '../cart/ICart';
import { IOrder } from '../order/order';

import { Cartservice } from '../services/cart.service';
import { ProductService } from '../services/product.service';


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
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  orders:IOrder[]=[];
  carts: ICart[] = [];
  products:IProduct[]=[];
  cartProducts : IProductCart[]=[];
  totalAmount:number=0;
  total:number[]=[];
  deliveryForm:any;
  constructor(  private cartservice:Cartservice ,private productService:ProductService,
    private route:Router) { }

  ngOnInit(): void {


      this.initForm();
      const result= localStorage.getItem("cartProducts");
      this.cartProducts = result !== null? JSON.parse(result) : this.cartProducts;
  }

  initForm(){
    this.deliveryForm = new FormGroup({
      address: new FormControl('',Validators.required),
      pincode: new FormControl('',[Validators.maxLength(6),Validators.minLength(6),Validators.required ,
      Validators.pattern("[0-9]{6}")]),
      state: new FormControl('',Validators.required)
    });
  }

  onSubmit(){
    this.saveOrder(this.deliveryForm.value);
    this.route.navigate(['/order']);
  }

  saveOrder(form:any){
    this.cartProducts.forEach(cart=> {
      this.orders.push({
        id:0,
        productId:cart.productId,
        customerId:1,
        orderDate:new Date(),
        orderAddress:form.address +  form.pincode +  form.state,
        totalAmount: cart.productPrice * cart.cart.Quantity,
        status:"active",
        cartId:cart.cart.id
      })
    })

   this.orders.forEach(order=> {
     this.cartservice.createOrder(order).subscribe(data=> {
       this.removeFromCart(order.cartId);
       localStorage.removeItem("cartProducts");
     });

   })

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
