export interface APIResponseModel {
    message: string,
    result: boolean,
    data : any
}

export interface Category {
    categoryId: number,
    categoryName: string,
    parentCategoryId : number,
    userId : number,
}

export interface ProductList {
    productId: number;
    productSku: string;
    productName: string;
    productPrice: number;
    productShortName: string;
    productDescription: string;
    createdDate: string;
    deliveryTimeSpan: string;
    categoryId: number;
    productImageUrl: string;
    categoryName: string;
  }

  export class Customer{
    custId: number;
    name: string;
    MobileNo: string;
    Password: string;

    constructor(){
        this.custId = 0;
        this.name = '';
        this.MobileNo= '';
        this.Password ='';
    }
  }

  export class Login{
    UserName : string;
    UserPassword : string;

    constructor(){
        this.UserName='';
        this.UserPassword = '';
    }
  }