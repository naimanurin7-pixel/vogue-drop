import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  const cartData = localStorage.getItem("cartItems");
  return cartData ? JSON.parse(cartData) : [];
};

const saveCartToStorage = (cartItems) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems)
  );
};

const initialState = {
  cartItems: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      saveCartToStorage(state.cartItems);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      saveCartToStorage(state.cartItems);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.cartItems.find(
        (item) => item.id === id
      );

      if (item) {
        item.quantity = quantity;
      }

      saveCartToStorage(state.cartItems);
    },

    clearCart: (state) => {
  state.cartItems = [];
  localStorage.removeItem("cartItems");
  localStorage.removeItem("cart");
}
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;