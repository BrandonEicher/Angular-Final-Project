import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  datasource: string = "http://localhost:3000/product";

  title: string = "My Discs";

  constructor(private http: HttpClient) { }

  getAllProducts(sortParam?: string): Observable<Product[]> {
    let url = this.datasource;
    if (sortParam) {
      url += `?${sortParam}`;
    }
    return this.http.get<Product[]>(url);
  }

  getProductByID(id: string): Observable<Product> {
    return this.http.get<Product>(this.datasource + "/" + id);
  }

  createNewProduct(newProduct: Product): Observable<Product>{
    return this.http.post<Product>(this.datasource, newProduct);
  }

  editProductByID(id: string, edittedProduct: Product): Observable<Product> {
    return this.http.put<Product>(this.datasource + "/" + id, edittedProduct);
  }

  deleteProductById(id: string): Observable<any> {
    return this.http.delete<any>(this.datasource +"/" + id);
  }
}
