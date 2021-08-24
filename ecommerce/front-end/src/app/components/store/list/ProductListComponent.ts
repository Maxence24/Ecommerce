import {Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {ProductsModel} from "../services/ProductModel";
import {ProductService} from "../services/ProductService";
import {LocalStorageService} from "../services/LocalStorageService";

@Component({
  selector: 'app-product-list',
  templateUrl: 'productList.html'
})

export class ProductListComponent implements OnInit {
  public cartproduct= Array(0);
  allProduct: Array<ProductsModel> = [];
  localStorageChanges$ = this.localStorageService.changes$;

  constructor(private productService: ProductService, private localStorageService: LocalStorageService) {
  }

  cartlist(key: string, value: any) {
    this.localStorageService.set(key, value);
    this.cartproduct.push([value]);
  }

  ngOnInit() {
    this.getAllProduct();
  }

  private getAllProduct() {
    this.productService.getAllProduct().subscribe(allproductyes => {
      this.allProduct = allproductyes;
    });
  }
}

