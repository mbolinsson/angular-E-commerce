import { Action } from '@ngrx/store';
import { ActionTypes } from '../actiontypes';
import { ProductModel } from '../../models/product.model';

export class Set implements Action {
  public readonly type = ActionTypes.PRODUCT_SET;
  constructor(public payload: ProductModel) {}
}

export class Clear implements Action {
  public readonly type = ActionTypes.PRODUCT_CLEAR;
  constructor() {}
}

export type Actions = Set | Clear;
