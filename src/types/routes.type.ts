
export interface Route {
  title : string;
  items : {
    title : string;
    url : string;
  }[];
}
export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export interface Order {
  id : string,
  quantity : number,
  totalAmount : number,
  status : OrderStatus
}

export interface MedicinePost {
  id : string | number,
  name : string,
  price : number,
  stock : number,
  categoryId : string,
  categoryName : string,
  createdAt : string,
  updatedAt : string,
  orders : Order[]
}