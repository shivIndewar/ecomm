import { Component, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MasterServiceService } from '../service/master.service.service';
import { APIResponseModel, Category, Customer, ProductList } from '../model/product';
import { map, Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CartModel } from '../model/cart';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy {

  //productList : ProductList [] = [];
 
  productList = signal<ProductList[]>([]);
  subscriptionList : Subscription[]=[];
  categoryList$ : Observable<Category[]> = new Observable<Category[]>();
  loggedInUserData : Customer = new Customer();
  constructor(private masterServiceService: MasterServiceService){
    if (typeof window !== 'undefined' && window.localStorage) {
      const isUser = localStorage.getItem('ecom18');
      if(isUser != null){
        this.loggedInUserData = JSON.parse(isUser);
      }
  }
  } 
  ngOnDestroy(): void {
    this.subscriptionList.forEach(element => {
      element.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.loadAllProducts();
    this.categoryList$ = this.masterServiceService.getAllCategories().pipe(
      map(item => item.data)); 
  }

  loadAllProducts(){
    this.subscriptionList.push(
    this.masterServiceService.getAllProducts().subscribe((res : APIResponseModel)=>{
      this.productList.set(res.data);
    }))
  }

  getProductByCategoryId(categoryId:number){
    console.log("getProductByCategoryId called");
    this.masterServiceService.getProductByCategoryId(categoryId).subscribe((res:APIResponseModel)=>{
      this.productList.set(res.data);
    })
  }

  addToCart(productId : number){
    const newObj : CartModel = new CartModel();
    newObj.ProductId  = productId;
    newObj.CustId = this.loggedInUserData.custId;
    debugger;
    this.masterServiceService.addToCart(newObj).subscribe((res: APIResponseModel) =>{
      if(res.result){
        alert(res.message);
      }
      else{
        alert(res.message);
      }
    })
  }


}
