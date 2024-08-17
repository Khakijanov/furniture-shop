import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  orderTotal: 0,
  totalProduct: 0,
};

export const ProductSlice = createSlice({
  name: "furniture",
  initialState,
  reducers: {
    addAllProducts: (state, { payload }) => {
      console.log(payload);
      state.allProducts = payload;
    },

    incrementOrder: (state, { payload }) => {
      const item = state.allProducts.find((product) => product.id == payload);

      if (item) {
        // Mahsulot topilganligini tekshiramiz
        if (!item.amount) {
          item.amount = 1;
        } else {
          item.amount += 1;
        }
        console.log(item);
      } else {
        console.error(`Product with id ${payload} not found`);
      }
    },

    decrementOrder: (state, { payload }) => {
      // Decrement funksiyasini ham to'ldirish kerak bo'ladi
    },
  },
});

export const { incrementOrder, decrementOrder, addAllProducts } =
  ProductSlice.actions;
export default ProductSlice.reducer;
