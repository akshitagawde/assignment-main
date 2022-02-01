import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/IProduct';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
search:string="";
product:any;



constructor(private productService:ProductService){}

  ngOnInit(): void {
  }

  searchProduct(searchText : string){
    this.productService.searchProduct.next(searchText.trim());
  }

}
