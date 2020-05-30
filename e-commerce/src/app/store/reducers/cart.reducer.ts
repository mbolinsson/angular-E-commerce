import { Actions } from '../actions/cart.action';
import { ActionTypes } from '../actiontypes';
import { CartModel } from '../../models/cart.model';
import { CartStateModel } from '../../models/cartstate.model';

const initialState = {
  items: [],
  totalQuantity: 0,
};

export function CartReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.CART_ADD:
      const hasProduct = state.items.some((item) => {
        return item.product._id === action.payload.product._id;
      });

      if (!hasProduct) {
        return {
          ...state,
          items: [...state.items, action.payload],
          totalQuantity: state.totalQuantity + action.payload.quantity,
        };
      }
      let newTotalQuantity = 0;

      const newItems = state.items.map((item) => {
        if (item.product._id === action.payload.product._id) {
          newTotalQuantity += item.quantity + action.payload.quantity;
          return {
            ...item,
            quantity: item.quantity + action.payload.quantity,
          };
        }
        newTotalQuantity += item.quantity;

        return item;
      });

      return {
        ...state,
        items: newItems,
        totalQuantity: newTotalQuantity,
      };

    case ActionTypes.CART_REMOVE:
      console.log(action);
      return state.items.filter((item) => item.product._id !== action.id);

    default:
      return state;
  }
}
