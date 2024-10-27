export class CartModel{
  CartId : number;
  CustId: number;
  ProductId: number;
  Quantity: number;
  AddedDate : Date;

  constructor(){
    this.CartId = 0;
    this.CustId = 0;
    this.ProductId = 0;
    this.Quantity = 1;
    this.AddedDate = new Date();
  }
}