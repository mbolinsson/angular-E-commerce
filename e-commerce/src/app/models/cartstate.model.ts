import { CartModel } from './cart.model';

export interface CartStateModel {
  items: Array<CartModel>;
  totalQuantity: number;
}
