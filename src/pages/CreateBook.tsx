import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../app/store";
import { createNewBook } from "../features/auth/authSlice";
import { createBook } from "../types";

const CreateBook = () => {
  const { username } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [bookFields, setBookFields] = useState<createBook>({
    bookName: "",
    authorName: "",
    buyAmount: 0,
    rentAmount: 0,
    imageUrl: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createNewBook(bookFields));
    navigate("/submit-book");
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <form
          onSubmit={handleSubmit}
          className="container px-5 py-24 mx-auto  flex flex-wrap flex-col items-center"
        >
          <div className="text-2xl mx-auto md:mb-10 md:text-3xl ">
            Welcome admin <span className="capitalize">{username}</span>
          </div>
          <div className=" mx-auto lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5 md:mx-auto md:text-2xl">
              create a book that people love
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="book-name"
                className="leading-7 text-sm text-gray-600"
              >
                book Name
              </label>
              <input
                value={bookFields.bookName}
                onChange={(e) =>
                  setBookFields({
                    ...bookFields,
                    [e.target.name]: e.target.value,
                  })
                }
                autoFocus
                required
                type="text"
                id="book-name"
                name="bookName"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="author-name"
                className="leading-7 text-sm text-gray-600"
              >
                Author name
              </label>
              <input
                value={bookFields.authorName}
                onChange={(e) =>
                  setBookFields({
                    ...bookFields,
                    [e.target.name]: e.target.value,
                  })
                }
                required
                type="text"
                id="author-name"
                name="authorName"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="buy-amount"
                className="leading-7 text-sm text-gray-600"
              >
                Buy amount
              </label>
              <input
                value={bookFields.buyAmount}
                onChange={(e) =>
                  setBookFields({
                    ...bookFields,
                    [e.target.name]: e.target.value,
                  })
                }
                required
                type="number"
                id="buy-amount"
                name="buyAmount"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="rent-amount"
                className="leading-7 text-sm text-gray-600"
              >
                Rent Amount
              </label>
              <input
                value={bookFields.rentAmount}
                onChange={(e) =>
                  setBookFields({
                    ...bookFields,
                    [e.target.name]: e.target.value,
                  })
                }
                required
                type="number"
                id="rent-amount"
                name="rentAmount"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="image-url"
                className="leading-7 text-sm text-gray-600"
              >
                Image Url
              </label>
              <input
                value={bookFields.imageUrl}
                onChange={(e) =>
                  setBookFields({
                    ...bookFields,
                    [e.target.name]: e.target.value,
                  })
                }
                required
                type="url"
                id="image-url"
                name="imageUrl"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="description"
                className="leading-7 text-sm text-gray-600"
              >
                Description
              </label>
              <input
                value={bookFields.description}
                onChange={(e) =>
                  setBookFields({
                    ...bookFields,
                    [e.target.name]: e.target.value,
                  })
                }
                required
                type="text"
                id="description"
                name="description"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateBook;
