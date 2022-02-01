import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent}from './Admin/admin-dashboard/admin-dashboard.component'
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminUserComponent } from './Admin/admin-user/admin-user.component';
import { CategoryListComponent } from './Admin/category-list/category-list.component';
import { CategoryUpdateComponent } from './Admin/category-update/category-update.component';
import { CategoryComponent } from './Admin/category/category.component';
import { ProductListComponent } from './Admin/product-list/product-list.component';
import { ProductUpdateComponent } from './Admin/product-update/product-update.component';
import { ProductComponent } from './Admin/product/product.component';
const routes: Routes = [
{path:'',redirectTo:'/AdminLogin',pathMatch:'full'},
{path:'AdminLogin',component:AdminLoginComponent},
{path:'dashboard',component:AdminDashboardComponent},
{path:'addadminuser',component:AdminUserComponent},
{path:'addcategory',component:CategoryComponent},
{path:'categorylist',component:CategoryListComponent},
{path: "productCategories/:id/UpdateDetails",component: CategoryUpdateComponent},

{path: "addproduct",component: ProductComponent },
{path: "productlist",component: ProductListComponent},
{path: "Products/:id/UpdateDetails",component: ProductUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
