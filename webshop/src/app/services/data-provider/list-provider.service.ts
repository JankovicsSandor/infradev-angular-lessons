import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductResponse } from '../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListProviderService {

  API_BASE_URL:string="https://dummyjson.com";

  constructor(private http:HttpClient) { }

  public getProducts() : Observable<IProductResponse> {
    return this.http.get<IProductResponse>(this.API_BASE_URL+"/products");
  }

  public getProductCategories():Observable<string[]>{
    return this.http.get<string[]>(this.API_BASE_URL+"/products/categories");
  }

  public getProductsByCategory(category:string):Observable<IProductResponse>{
    return this.http.get<IProductResponse>(this.API_BASE_URL+"/products/category/"+category);
  }
}
