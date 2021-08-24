import  {NgModule} from "@angular/core";
import {CartComponent} from "./CartComponent";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";


@NgModule({
  imports:[MatCardModule, MatButtonModule, CommonModule],
  exports:[CartComponent],
  declarations:[CartComponent],
  providers:[],
})
export class CartModule {

}
