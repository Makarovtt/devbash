import { ICafeOrder, IGetProduct } from "@/interfaces/menu-cafe.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let items = [];
if (
  typeof window !== "undefined" &&
  localStorage.getItem("cafeOrder") !== null
) {
  items = JSON.parse(localStorage.getItem("cafeOrder") || "");
}

const initialState = items as ICafeOrder[];

export const cafe = createSlice({
  name: "cafeOrder",
  initialState,
  reducers: {
    addToCafeOrder: (
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
          description: idProduct.description,
          min_portion: idProduct.min_portion,
          price: idProduct.price,
          portion: idProduct.portion,
          unit: idProduct.unit,
          quantity: 1,
        };
        state.push(tempObj);
      }
      localStorage.setItem("cafeOrder", JSON.stringify(state));
    },
    addItemToCafeOrder: (
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
      localStorage.setItem("cafeOrder", JSON.stringify(state));
    },
    removeItemToCafeOrder: (
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
      localStorage.setItem("cafeOrder", JSON.stringify(state));
    },
    deleteItemToCafeOrder: (
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
      localStorage.setItem("cafeOrder", JSON.stringify(state));
    },

    clearToCafeOrder: (state: ICafeOrder[]) => {
      state = [];
      localStorage.setItem("cafeOrder", JSON.stringify(state));
    },
  },
});

export const {
  addToCafeOrder,
  addItemToCafeOrder,
  removeItemToCafeOrder,
  deleteItemToCafeOrder,
  clearToCafeOrder,
} = cafe.actions;
export default cafe.reducer;
