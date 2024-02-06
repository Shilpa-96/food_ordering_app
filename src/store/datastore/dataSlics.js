import { createSlice } from "@reduxjs/toolkit";
import products from "../../assets/products";

const initialState = {
  data: products,
  category: "ALL",
};

const dataSlice = createSlice({
  name: "data",
  initialState,

  reducers: {
    categorialData(state, action) {
      if (action.payload === "ALL") {
        state.data = products;
        state.category = "All";
      } else {
        const filteredproducts = products.filter(
          (item) => item.category.toLowerCase() === action.payload.toLowerCase()
        );
        state.data = filteredproducts;
        state.category = action.payload;
      }
    },
    searchedData(state, action) {
      if (action.payload === "") {
        state.data = products;
      } else {
        state.data = products.filter((item) => {
          return item.title
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        });
      }
    },
    sortedData(state, action) {
      const data = state.data;
      if (action.payload === "default") {
        state.data = products;
      }
      if (action.payload === "alphabetically, a-z") {
        const d = data.sort((a, b) => a.title.localeCompare(b.title));
        state.data = d;
      }
      if (action.payload === "alphabetically, z-a") {
        const d = data.sort((a, b) => b.title.localeCompare(a.title));
        state.data = d;
      }
      if (action.payload === "price high-low") {
        const d = data.sort((a, b) => b.price - a.price);
        state.data = d;
      }
      if (action.payload === "price low-high") {
        const d = data.sort((a, b) => a.price - b.price);
        state.data = d;
      }
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
