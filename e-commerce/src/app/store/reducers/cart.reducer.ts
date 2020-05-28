import { Actions } from '../actions/cart.action';
import { ActionTypes } from '../actiontypes';
import { CartModel } from '../../models/cart.model';

const initialState: Array<CartModel> = [];

export function CartReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.CART_ADD:
      const hasProduct = state.some((item) => {
        return item.product._id === action.payload.product._id;
      });

      if (!hasProduct) {
        return [...state, action.payload];
      }

      return state.map((item) => {
        if (item.product._id === action.payload.product._id) {
          return {
            ...item,
            quantity: item.quantity + action.payload.quantity,
          };
        }

        return item;
      });

    case ActionTypes.CART_REMOVE:
      console.log(action);
      return state.filter((item) => item.product._id !== action.id);

    default:
      return state;
  }
}

// const getTotalQuantity = (items) => {
//   let totalQuantity = 0;

//   items.forEach((product) => {
//     totalQuantity += product.quantity;
//   });
//   console.log(totalQuantity);
//   return totalQuantity;
// };

// const getTotalAmount = (items) => {
//   let totalAmount = 0;

//   items.forEach((product) => {
//     totalAmount += product.price * product.quantity;
//   });

//   return totalAmount;
// };
