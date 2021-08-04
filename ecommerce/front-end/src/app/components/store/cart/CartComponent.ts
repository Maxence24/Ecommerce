import {Component, OnInit } from '@angular/core';
import {ProductService} from "../services/ProductService";
import {ProductsModel} from "../services/ProductModel";
import {LocalStorageService} from "../services/LocalStorageService";

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.html',
  styleUrls:['cart.css']
})

export class CartComponent implements OnInit {
  allProduct: Array<ProductsModel> = [];
  public cartproduct = Array();
  public cartprice = Array();

  constructor(private productService: ProductService, private localStorageService: LocalStorageService) {}

  cartPrice(key: string, value: any) {
    this.localStorageService.set(key, value);
    this.cartprice.push([value]);
  }

  deleteCart(){
    for (let i = 0; i < this.cartproduct.length+1; i++) {
      this.cartproduct.splice(0, i)
      //the last was not delete so we do twice
      this.cartproduct.splice(0, i)
      localStorage.clear();
    }
  }

  allStorage() {
    for(var t in localStorage) {
      console.log(t + ' = ' + localStorage[t]);
    }
    for (var i = 0; i < localStorage.length; i++){
      this.cartproduct.push(localStorage.key(i))
    }
  }

  private getAllProduct() {
    this.productService.getAllProduct().subscribe(allproductyes => {
      this.allProduct = allproductyes;
    });
  }

  ngOnInit() {
    this.getAllProduct();
    this.allStorage();
  }
}

/*
<div class="container">
  <div class="row">
    <div class="col-3" *ngFor="let key of cartproduct ">
      <div  *ngIf="key!=null">
        <div *ngFor="let item of allProduct">
          <div *ngIf="item.title === key">
            <mat-card class="example-card">
              <mat-card-header>
                <mat-card-title>{{item.title}}</mat-card-title>
                <mat-card-subtitle>{{item.description}}</mat-card-subtitle>
              </mat-card-header>
              <img mat-card-image [src]="item.imageUrl" >
              <mat-card-content>{{cartPrice(item.title, item.price)}}{{item.price}}</mat-card-content>
            </mat-card>
          </div>
        </div>
        {{show()}}
      </div>
    </div>
  </div>
</div>

 */
