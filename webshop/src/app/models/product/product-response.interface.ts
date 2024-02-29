import { IProductItem } from "./product-item.interface";

export interface IProductResponse{
    products:IProductItem[];
    total:number;
    skip:number;
    limit:number;
}