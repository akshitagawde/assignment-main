import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/IProduct';
import{ProductService}from '../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:IProduct[]=[];
  constructor(private productService : ProductService ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts():void
  {
     this.productService.getProducts().subscribe(all_products=>this.products=all_products);
   }
   deleteUser(id:number){
     this.productService.delete(id).subscribe(res => {
          this.products = this.products.filter(product => product.id !== id);
          console.log('Product deleted successfully!');
     })
   }

}
