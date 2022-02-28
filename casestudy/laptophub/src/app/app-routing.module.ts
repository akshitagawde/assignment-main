import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [{ path: 'Home', component: HomeComponent},
{ path: '', redirectTo: '/Home', pathMatch: 'full' },
{ path: 'Cart', component: CartComponent},
{path:'aboutus',component:AboutusComponent},
{path:'contactus',component:ContactusComponent},
{path:'productdetails/:id',component:ProductDetailsComponent},
{path:'order',component:OrderComponent},
{path:'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
