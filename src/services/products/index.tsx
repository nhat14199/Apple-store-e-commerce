import React from "react";
import AxiosConfig from "../../utils/axios/axios-config";
import { Iphone } from "../../types/products";
import axios, { AxiosResponse } from "axios";
import { BASE_URL, URL_DEFAUT } from "../../utils/url";

const API: any = {
  Products: {
    iphone: "/product",
  },
};
export interface ProductsIphoneResponse {
  data: Iphone;
}
export const ProductService = {
  getListProductIphone: async (params?: any) => {
    const resp: AxiosResponse<ProductsIphoneResponse> = await axios.get(
      URL_DEFAUT,
      params
    );
    return resp;
  },
};
