import { Actions } from '../actions/cart.action';
import { ActionTypes } from '../actiontypes';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
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

      let newItems = state.items.map((item) => {
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

      let index = -1;
      newItems.forEach((item) => {
        index++;
        if (item.quantity < 1) {
          newItems.splice(index, 1);
        }
        return;
      });

      return {
        ...state,
        items: newItems,
        totalQuantity: newTotalQuantity,
        totalAmount: getTotalAmount(newItems),
      };

    case ActionTypes.CART_REMOVE:
      let newItemsState = state.items.filter(
        (item) => item.product._id !== action.id
      );
      return {
        ...state,
        items: newItemsState,
        totalQuantity: getTotalQuantity(newItemsState),
        totalAmount: getTotalAmount(newItemsState),
      };

    default:
      return state;
  }
}

const getTotalQuantity = (items) => {
  let totalQuantity = 0;

  items.forEach((product) => {
    totalQuantity += product.quantity;
  });

  return totalQuantity;
};

const getTotalAmount = (items) => {
  let totalAmount = 0;
  items.forEach((item) => {
    let totalAmountSpecificProduct = item.quantity * item.product.price;
    totalAmount += totalAmountSpecificProduct;
  });

  return totalAmount;
};
