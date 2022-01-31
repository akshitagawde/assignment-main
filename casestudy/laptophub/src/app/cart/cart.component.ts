import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cartservice } from '../services/cart.service';
import { ICart } from './Icart';

interface IProduct{
  productId:number,
  productName:string,
  productDescription:string,
  productPrice:number,
  imagePath:string
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: ICart[] = [];
  products:IProduct[]=[];
  constructor(private cartservice: Cartservice,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.products = [
      {productId:1,productName:'dell',productDescription:'Dell product1',productPrice:1234 ,imagePath:'img1'},
      {productId:2,productName:'dell2',productDescription:'Dell product2',productPrice:234 ,imagePath:'img2'}
  ]
  }
  changeQuantity(event: Event) {
     (event.target as HTMLInputElement).value;
    console.log( (event.target as HTMLInputElement).value);
  }
    saveOrder(){

      }

}

