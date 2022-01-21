import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  updateProduct(_id: any, products: any[]) {
    throw new Error('Method not implemented.');
  }
  deleteProduct(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}
  getProduct() {
    return this.http.get<any[]>('http://localhost:3000/api/products');
  }
  postProduct(product: Product) {
    return this.http.post<any[]>('http://localhost:3000/api/products', product);
  }
/*
  updateProduct(_id:String){
    return this.http.post<any[]>('http://localhost:3000/api/products/id', _id);
  }

  deleteProduct(_id:any){
    return this.http.post<any[]>('http://localhost:3000/api/products/id', _id);
  }

*/
}
