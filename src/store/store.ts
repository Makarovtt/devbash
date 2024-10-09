import { configureStore } from "@reduxjs/toolkit";
import { menuCafeApi } from "./menu-cafe/menu-cafe.api";

export const store = configureStore({
  reducer: {
    [menuCafeApi.reducerPath]: menuCafeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuCafeApi.middleware),
});
