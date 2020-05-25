import { Actions } from '../actions/cart.action';
import { ActionTypes } from '../actiontypes';
import { ProductModel } from '../../models/product.model';

const initialState: Array<ProductModel> = [];

export function CartReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.CART_ADD:
      return (state = [...state, action.payload]);

    case ActionTypes.CART_REMOVE:
      return (state = state.filter((item) => item._id !== action.id));
    default:
      return state;
  }
}
