import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategory } from '../category/ICategory';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 //http://localhost:3000/productCategories/
 private productCategories_urls = "http://localhost:3000/app/productCategories";
 private productCategories_find = "http://localhost:3000/app/productCategories";
 private productCategories_add = "http://localhost:3000/app/productCategories/add";
 private productCategories_update = "http://localhost:3000/app/productCategories/update/";
 private productCategories_delete = "http://localhost:3000/app/productCategories/delete/";

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private httpclient:HttpClient) { }

 getCategories():Observable<Icategory[]>{
   return this.httpclient.get<Icategory[]>(this.productCategories_urls);
 };

 create(productCategories: any): Observable<Icategory> {
  return this.httpclient.post<Icategory>(this.productCategories_add, JSON.stringify(productCategories), this.httpOptions);
}

find(id:number): Observable<Icategory> {
  return this.httpclient.get<Icategory>(this.productCategories_find+"/"+id);
}

update(id:number, productCategories: any): Observable<Icategory> {
  return this.httpclient.put<Icategory>(this.productCategories_update + id, JSON.stringify(productCategories), this.httpOptions)
}

delete(id:number){
  return this.httpclient.delete<Icategory>(this.productCategories_delete + id, this.httpOptions)
}


}
