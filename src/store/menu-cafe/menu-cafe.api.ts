import { IGetMenuCafe } from "@/components/menu-cafe/menu-cafe.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuCafeApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server.devbash.ru/",
  }),
  endpoints: (build) => ({
    getProducts: build.query<IGetMenuCafe, string>({
      query: (search: string) => ({
        url: "app.php",
        params: {
          type: search,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = menuCafeApi;
