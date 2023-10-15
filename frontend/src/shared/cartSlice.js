import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const cartItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (cartItem) {
        cartItem.itemCount++;
        cartItem.isAddedToCart = true;
      } else {
        state.items.push({
          ...action.payload,
          itemCount: 1,
        });
      }
    },
    incrementItem: (state, action) => {
      const cartItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      cartItem.itemCount++;
    },
    decrementItem: (state, action) => {
      const cartItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (cartItem.itemCount == 1) {
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        cartItem.itemCount--;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { incrementItem, decrementItem, addItem, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
