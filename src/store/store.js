import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";

import menuUiSlice from "./shopping-cart/menuUiSlice";
import dataSlice from "./datastore/dataSlics";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    menuUi: menuUiSlice.reducer,
    data: dataSlice.reducer,
  },
});

export default store;
