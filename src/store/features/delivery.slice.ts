import { ICafeOrder, IGetProduct } from "@/interfaces/menu-cafe.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let items = [];
if (
  typeof window !== "undefined" &&
  localStorage.getItem("deliveryOrder") !== null
) {
  items = JSON.parse(localStorage.getItem("deliveryOrder") || "");
}

const initialState = items as ICafeOrder[];

export const delivery = createSlice({
  name: "deliveryOrder",
  initialState,
  reducers: {
    addToDeliveryOrder: (
      state: ICafeOrder[],
      action: PayloadAction<IGetProduct>
    ) => {
      const idProduct = action.payload;
      const isExists = state.some((r) => r.id === idProduct.id);
      if (isExists) {
      } else {
        const tempObj = {
          id: idProduct.id,
          title: idProduct.title,
          picture: idProduct.picture,
          price: idProduct.price_delivery,
          portion: idProduct.portion,
          unit: idProduct.unit,
          quantity: 1,
        };
        state.push(tempObj);
      }
      localStorage.setItem("deliveryOrder", JSON.stringify(state));
    },
    addItemToDeliveryOrder: (
      state: ICafeOrder[],
      action: PayloadAction<number>
    ) => {
      const idProduct = action.payload;
      const isExists = state.some((r) => Number(r.id) === idProduct);
      if (isExists) {
        const rt = state.map((item) => {
          if (idProduct === Number(item.id)) {
            return { ...item, quantity: Number(item.quantity) + 1 };
          } else {
            return item;
          }
        });
        return rt;
      } else {
      }
      localStorage.setItem("deliveryOrder", JSON.stringify(state));
    },
    removeItemToDeliveryOrder: (
      state: ICafeOrder[],
      action: PayloadAction<number>
    ) => {
      const idProduct = action.payload;
      const isExists = state.some((r) => Number(r.id) === idProduct);
      if (isExists) {
        const rt = state.map((item) => {
          if (idProduct === Number(item.id)) {
            return { ...item, quantity: Number(item.quantity) - 1 };
          } else {
            return item;
          }
        });
        return rt;
      } else {
      }
      localStorage.setItem("deliveryOrder", JSON.stringify(state));
    },
    deleteItemToDeliveryOrder: (
      state: ICafeOrder[],
      action: PayloadAction<number>
    ) => {
      const idProduct = action.payload;
      const isExists = state.some((r) => Number(r.id) === idProduct);
      if (isExists) {
        const findKey = state.findIndex(
          (item) => Number(item.id) === idProduct
        );
        state.splice(findKey, 1);
      } else {
      }
      localStorage.setItem("deliveryOrder", JSON.stringify(state));
    },

    clearToDeliveryOrder: (state: ICafeOrder[]) => {
      state.splice(0, state.length);
      localStorage.setItem("deliveryOrder", JSON.stringify(state));
    },
  },
});

export const {
  addToDeliveryOrder,
  addItemToDeliveryOrder,
  removeItemToDeliveryOrder,
  deleteItemToDeliveryOrder,
  clearToDeliveryOrder,
} = delivery.actions;
export default delivery.reducer;
