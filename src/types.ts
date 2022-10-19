export interface reviews {
  date: string;
  message: string;
  reviewer: string;
  stars: number;
  subject: string;
}
export interface bookItems {
  name: string;
  author: string;
  payAmount: number | string;
  rentAmount: number | string;
  imageUrl: string;
  stars?: number;
  reviews?: reviews[];
  description: string;
}

export interface book {
  books: bookItems[];
}

export interface loginType {
  email: string | null;
  password: string | null;
}

export interface initialStateType {
  username: string;
  token: string;
  isSuccess: boolean;
  isLoggedIn: boolean;
}

export interface createBook {
  name: string;
  author: string;
  payAmount: number;
  rentAmount: number;
  imageUrl: string;
  reviews: reviews[];
  description: string;
}
