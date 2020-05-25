import { Actions } from '../actions/products.action';
import { ActionTypes } from '../actiontypes';
import { ProductModel } from '../../models/product.model';

const initialState: Array<ProductModel> = [];

export function ProdcutsReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.PRODUCTS_SET:
      return (state = action.payload);

    case ActionTypes.PRODUCTS_CLEAR:
      return (state = initialState);
    default:
      return state;
  }
}
