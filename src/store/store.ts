import { configureStore } from "@reduxjs/toolkit";
import { menuCafeApi } from "./menu-cafe/menu-cafe.api";
import cafeReducer from "./features/cafe.slice";
import deliveryReducer from "./features/delivery.slice";
import isOpenAsideOrderReducer from "./features/aside-menu-order.slice";

export const store = configureStore({
  reducer: {
    [menuCafeApi.reducerPath]: menuCafeApi.reducer,
    cafeReducer,
    deliveryReducer,
    isOpenAsideOrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuCafeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
