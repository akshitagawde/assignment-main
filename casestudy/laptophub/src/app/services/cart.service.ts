import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICart } from '../cart/ICart';
import { IOrder } from '../order/order';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {
 //http://localhost:3000/Products/
 private Cart_urls = "http://localhost:3000/app/carts";
 private Cart_find = "http://localhost:3000/app/carts";
 private Cart_findByProduct = "http://localhost:3000/app/cart/product";
 private Cart_add = "http://localhost:3000/app/cart/add";
 private Cart_update = "http://localhost:3000/app/cart/update/";
 private Cart_delete = "http://localhost:3000/app/cart/delete/";
 private order_add = "http://localhost:3000/app/Orders/add";
 private orderFindAll = "http://localhost:3000/app/Orders";

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private httpclient:HttpClient) { }

 getCarts():Observable<ICart[]>{
   return this.httpclient.get<ICart[]>(this.Cart_urls);
 };

 create(cart: ICart): Observable<ICart> {
  return this.httpclient.post<ICart>(this.Cart_add, JSON.stringify(cart), this.httpOptions);
}

createOrder(order: IOrder): Observable<IOrder> {
  return this.httpclient.post<IOrder>(this.order_add, JSON.stringify(order), this.httpOptions);
}

find(id:number): Observable<ICart> {
  return this.httpclient.get<ICart>(this.Cart_find+"/"+id);
}

findAll(customerId:number): Observable<any> {
  return this.httpclient.get<any>(this.orderFindAll+"/"+customerId);
}

findCartByProduct(id:number): Observable<ICart[]> {
  return this.httpclient.get<ICart[]>(this.Cart_findByProduct+"/"+id);
}

update(id:number, Products: any): Observable<ICart> {
  return this.httpclient.put<ICart>(this.Cart_update + id, JSON.stringify(Products), this.httpOptions)
}

delete(id:number){
  return this.httpclient.delete<ICart>(this.Cart_delete + id, this.httpOptions)
}


}
