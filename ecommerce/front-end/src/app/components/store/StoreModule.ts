import  {NgModule} from "@angular/core";
import {ProductService} from "./services/ProductService";
import {ProductResource} from "./services/ProductResource";
import {ProductListModule} from "./list/ProductListModule";
import {CartModule} from "./cart/CartModule";


@NgModule({
  imports:[ProductListModule,CartModule],
  exports:[ProductListModule,CartModule],
  declarations:[],
  providers:[ProductService,ProductResource],
})
export class StoreModule {

}
