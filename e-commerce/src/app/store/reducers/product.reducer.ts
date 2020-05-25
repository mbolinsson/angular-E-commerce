import { Actions } from '../actions/product.action';
import { ActionTypes } from '../actiontypes';
import { ProductModel } from '../../models/product.model';

const initialState: ProductModel = {};

export function ProdcutReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.PRODUCT_SET:
      return (state = action.payload);

    case ActionTypes.PRODUCT_CLEAR:
      return (state = initialState);
    default:
      return state;
  }
}
