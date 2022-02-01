import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdminUser } from '../admin-user/IAdminUser';
@Injectable({
  providedIn: 'root'
})
export class AdminuserService {
 //http://localhost:3000/AdminLogins/
 private AdminLogins_urls = "http://localhost:3000/app/AdminLogins";
 private AdminLogins_find = "http://localhost:3000/app/AdminLogins";
 private AdminLogins_add = "http://localhost:3000/app/AdminLogins/add";
 private AdminLogins_update = "http://localhost:3000/app/AdminLogins/update/";
 private AdminLogins_delete = "http://localhost:3000/app/AdminLogins/delete/";

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private httpclient:HttpClient) { }

 getAdminLogins():Observable<IAdminUser[]>{
   return this.httpclient.get<IAdminUser[]>(this.AdminLogins_urls);
 };

 create(AdminLogins: any): Observable<IAdminUser> {
  return this.httpclient.post<IAdminUser>(this.AdminLogins_add, JSON.stringify(AdminLogins), this.httpOptions);
}

find(id:number): Observable<IAdminUser> {
  return this.httpclient.get<IAdminUser>(this.AdminLogins_find+"/"+id);
}

update(id:number, AdminLogins: any): Observable<IAdminUser> {
  return this.httpclient.put<IAdminUser>(this.AdminLogins_update + id, JSON.stringify(AdminLogins), this.httpOptions)
}

delete(id:number){
  return this.httpclient.delete<IAdminUser>(this.AdminLogins_delete + id, this.httpOptions)
}


}
