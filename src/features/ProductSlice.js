import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  ordred: [],
  orderTotal: 0,
  totalProduct: 0,
};

export const ProductSlice = createSlice({
  name: "furniture",
  initialState,
  reducers: {
    addAllProducts: (state, { payload }) => {
      state.allProducts = payload;
    },

    incrementOrder: (state, { payload }) => {
      const item = state.allProducts.find((product) => product.id === payload);
      const orderedItem = state.ordred.find(
        (product) => product.id === payload
      );

      if (item) {
        if (orderedItem) {
          orderedItem.amount += 1;
        } else {
          state.ordred.push({ ...item, amount: 1 });
        }
      } else {
        console.error(`Product with id ${payload} not found`);
      }
    },

    decrementOrder: (state, { payload }) => {
      const orderedItem = state.ordred.find((product) => product.id == payload);

      if (orderedItem) {
        if (orderedItem.amount > 1) {
          orderedItem.amount -= 1;
        } else {
          state.ordred = state.ordred.filter(
            (product) => product.id != payload
          );
        }
      } else {
        console.error(`Product with id ${payload} not found in order`);
      }
    },

    deleteOrder: (state, { payload }) => {
      state.ordred = state.ordred.filter((product) => product.id !== payload);
    },

    calculateOrder: (state) => {
      let allOrderedAmount = 0;
      let allOrderPrice = 0;
      state.ordred.forEach((order) => {
        allOrderedAmount += order.amount;
        allOrderPrice += order.amount * order.attributes.price;
      });

      state.orderTotal = allOrderedAmount;
      state.totalProduct = allOrderPrice;
    },
  },
});

export const {
  incrementOrder,
  decrementOrder,
  addAllProducts,
  deleteOrder,
  calculateOrder,
} = ProductSlice.actions;

export default ProductSlice.reducer;
