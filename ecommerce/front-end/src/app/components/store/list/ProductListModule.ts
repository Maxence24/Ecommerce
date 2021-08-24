import  {NgModule} from "@angular/core";
import {ProductListComponent} from "./ProductListComponent";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";


@NgModule({
  imports:[MatCardModule, MatButtonModule, CommonModule],
  exports:[ProductListComponent],
  declarations:[ProductListComponent],
  providers:[],
})
export class ProductListModule {

}
