import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProduct } from '../products/IProduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 //http://localhost:3000/Products/
 private Products_urls = "http://localhost:3000/app/Products";
 private Products_find = "http://localhost:3000/app/Products";
 private Products_add = "http://localhost:3000/app/Products/add";
 private Products_update = "http://localhost:3000/app/Products/update/";
 private Products_delete = "http://localhost:3000/app/Products/delete/";

 searchProduct = new BehaviorSubject<string>('');

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private httpclient:HttpClient) { }

 getProducts():Observable<IProduct[]>{
   return this.httpclient.get<IProduct[]>(this.Products_urls);
 };

 create(Products: any): Observable<IProduct> {
  return this.httpclient.post<IProduct>(this.Products_add, JSON.stringify(Products), this.httpOptions);
}

find(id:number): Observable<IProduct> {
  return this.httpclient.get<IProduct>(this.Products_find+"/"+id);
}

update(id:number, Products: any): Observable<IProduct> {
  return this.httpclient.put<IProduct>(this.Products_update + id, JSON.stringify(Products), this.httpOptions)
}

delete(id:number){
  return this.httpclient.delete<IProduct>(this.Products_delete + id, this.httpOptions)
}


}
