import axios from "axios";
import { createBook, loginType } from "../../types";
const URL = process.env.API_URL || "http://localhost:5000";

export const loginUser = async (data: loginType) => {
  const response = await axios.post(`${URL}/admin/login`, data);
  return response.data;
};

export const createABook = async (data: createBook, token: string) => {
  const response = await axios.post(`${URL}/admin/createbook`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
