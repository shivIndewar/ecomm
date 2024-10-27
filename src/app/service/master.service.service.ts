import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel, Customer, Login } from '../model/product';
import { CartModel } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  apiUrl : string ="https://freeapi.miniprojectideas.com/api/BigBasket/";
  constructor(private http : HttpClient) { }

  getAllProducts () : Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(this.apiUrl+"GetAllProducts");
  } 

  getAllCategories () : Observable<APIResponseModel> {
    console.log("called GetAllCategory");
    return this.http.get<APIResponseModel>(this.apiUrl+"GetAllCategory");
  } 

  getProductByCategoryId (categoryId:number) : Observable<APIResponseModel> {
    const url = `${this.apiUrl}GetAllProductsByCategoryId?id=${categoryId}`;
    return this.http.get<APIResponseModel>(url);
  } 

  registerNewCustomer (customerM : Customer) : Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(this.apiUrl+"RegisterCustomer", customerM);
  } 

  loginCustomer (login : Login) : Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(this.apiUrl+"Login", login);
  } 

  addToCart (cart : CartModel ) : Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(this.apiUrl+"AddToCart", cart);
  } 
  

}
