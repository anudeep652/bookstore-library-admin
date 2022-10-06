import React from "react";
import { Link } from "react-router-dom";
import "./submitpage.css";

const SubmitBook = () => {
  return (
    <>
      <div className="content">
        <div className="wrapper-1">
          <div className="wrapper-2 ">
            <h1 className="text-6xl mb-5">Thank you !</h1>
            <p>
              Thanks for Adding the book to book store library
              <span className="text-black"></span>
            </p>
            <p>
              Soon your book is going to be displayed in{" "}
              <Link
                to={
                  process.env.REACT_APP_BOOKSTORE ||
                  "https://bookstore-library.netlify.app/"
                }
              >
                {" "}
                Bookstore Library
              </Link>
              <span className="text-black"></span>{" "}
            </p>
            <div className="button mt-5">
              <Link to={"/"} className="go-home ">
                go home
              </Link>
            </div>
          </div>
          <div className="footer-like">
            <p>
              book not added?
              <a href="mailto:anudeepsvka@gmail.com">
                Click here to contact admin
              </a>
            </p>
          </div>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro"
        rel="stylesheet"
      ></link>
    </>
  );
};

export default SubmitBook;
