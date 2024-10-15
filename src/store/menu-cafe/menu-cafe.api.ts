import { IGetMenuCafe } from "@/interfaces/menu-cafe.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuCafeApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server.devbash.ru/",
  }),
  endpoints: (build) => ({
    getProducts: build.query<IGetMenuCafe, string>({
      query: (search: string) => ({
        url: "app2.php",
        params: {
          type: search,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = menuCafeApi;
