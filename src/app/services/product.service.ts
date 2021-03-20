import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { responseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44398/api/';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath =
      this.apiUrl + `products/getbycategory?categoryId=${categoryId}`;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product: Product):Observable<responseModel> {
    let newPath = this.apiUrl + 'products/add';
    return this.httpClient.post<responseModel>(newPath, product);
  }
}
