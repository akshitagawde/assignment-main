export interface IOrder {
  id:number,
  productId:number,
  customerId:number,
  orderDate:Date,
  orderAddress:string,
  totalAmount:number,
  status:string,
  cartId:number
}
