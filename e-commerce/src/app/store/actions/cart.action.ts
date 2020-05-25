import { Action } from '@ngrx/store';
import { ActionTypes } from '../actiontypes';
import { ProductModel } from '../../models/product.model';

export class Add implements Action {
  public readonly type = ActionTypes.CART_ADD;
  constructor(public payload: ProductModel) {}
}

export class Remove implements Action {
  public readonly type = ActionTypes.CART_REMOVE;
  constructor(public id: string) {}
}

export type Actions = Add | Remove;
