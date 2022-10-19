import axios from "axios";
import { createBook, loginType } from "../../types";
const URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const loginUser = async (data: loginType) => {
  const response = await axios.post(`${URL}/admin/login`, data);
  return response.data;
};

export const createABook = async (data: createBook, token: string) => {
  const response = await axios.post(`${URL}/admin/createbook`, data);

  return response.data;
};
