import {Injectable} from '@angular/core';
import {ProductResource} from "./ProductResource";
import {ProductsModel} from "./ProductModel";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  allProduct: Array<ProductsModel> = [];
  url = 'http://localhost:3000/product';

  constructor(private productResource: ProductResource,private httpClient:HttpClient) {}


  getAllProduct(): Observable<Array<ProductsModel>>{
    return this.httpClient.get<Array<ProductsModel>>(this.url);
  }
/*
  addProduct(userName: string): any {
    const newProduct = new Product();
    newProduct.name = userName;
    return this.httpClient.post(this.url, newProduct);
  }*/
}
