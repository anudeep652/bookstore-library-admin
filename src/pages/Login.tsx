import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { login, reset } from "../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { username, isSuccess } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(login(data));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/createbook");
      dispatch(reset());
    }
  }, [dispatch]);
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <h1 className="md:text-3xl text-2xl text-purple-700 mx-auto pt-20">
          Bookstore Library admin login
        </h1>
        <div className="w-full p-6 m-auto bg-white rounded-md mt-20 shadow-md lg:max-w-xl">
          <h1 className="md:text-3xl text-xl font-semibold text-center text-purple-700 underline">
            Sign in
          </h1>
          <form onSubmit={handleClick} className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
