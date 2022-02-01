import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{MatCardModule} from '@angular/material/card';
import{MatIconModule} from '@angular/material/icon'
import{MatInputModule} from '@angular/material/input';
import{MatToolbarModule}from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Admin/header/header.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import{SidenavComponent} from './Admin/sidenav/sidenav.component';
import { FooterComponent } from './Admin/footer/footer.component';
import { ProductComponent } from './Admin/product/product.component';
import { ProductListComponent } from './Admin/product-list/product-list.component';
import { CategoryComponent } from './Admin/category/category.component';
import { CategoryListComponent } from './Admin/category-list/category-list.component';
import { OrdersListComponent } from './Admin/orders-list/orders-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductUpdateComponent } from './Admin/product-update/product-update.component';
import { CategoryUpdateComponent } from './Admin/category-update/category-update.component';
import { AdminUserComponent } from './Admin/admin-user/admin-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HeaderComponent,
    AdminDashboardComponent,
    SidenavComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    CategoryComponent,
    CategoryListComponent,
    OrdersListComponent,
    ProductUpdateComponent,
    CategoryUpdateComponent,
    AdminUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
