import { Action } from '@ngrx/store';
import { ActionTypes } from '../actiontypes';
import { ProductModel } from '../../models/product.model';

export class Set implements Action {
  public readonly type = ActionTypes.PRODUCTS_SET;
  constructor(public payload: Array<ProductModel>) {}
}

export class Clear implements Action {
  public readonly type = ActionTypes.PRODUCTS_CLEAR;
  constructor() {}
}

export type Actions = Set | Clear;
