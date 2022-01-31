import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../cart/Icart';

@Injectable({
  providedIn: 'root'
})
export class Cartservice {
 //http://localhost:3000/Products/
 private Cart_urls = "http://localhost:3000/app/carts";
 private Cart_find = "http://localhost:3000/app/carts";
 private Cart_add = "http://localhost:3000/app/cart/add";
 private Cart_update = "http://localhost:3000/app/cart/update/";
 private Cart_delete = "http://localhost:3000/app/cart/delete/";

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

find(id:number): Observable<ICart> {
  return this.httpclient.get<ICart>(this.Cart_find+"/"+id);
}

update(id:number, Products: any): Observable<ICart> {
  return this.httpclient.put<ICart>(this.Cart_update + id, JSON.stringify(Products), this.httpOptions)
}

delete(id:number){
  return this.httpclient.delete<ICart>(this.Cart_delete + id, this.httpOptions)
}


}
