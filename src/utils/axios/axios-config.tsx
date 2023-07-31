import axios from "axios";
import React from "react";
import { BASE_URL } from "../url";

export const AxiosConfig = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export default AxiosConfig;
