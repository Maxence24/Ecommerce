import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./components/store/list/ProductListComponent";
import {CartComponent} from "./components/store/cart/CartComponent";


const routes: Routes = [
  {path: 'productList', component: ProductListComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
