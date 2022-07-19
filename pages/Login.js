import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import cookie from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import baseUrl from "../baseUrl";
const Login = () => {
  const [login, setLogin] = useState({});
  const onChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const router = useRouter();
  const submitForm = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    loginUser(email, password);
  };

  const loginUser = async (email, password) => {
    const res = await fetch(baseUrl + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const res2 = await res.json();
    if (res2.error) {
      toast.error("Invalid Credentials !", {
        position: "top-left",
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Welcome " + res2.User.userName, {
        position: "top-left",
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(res2);
      cookie.set("token", res2.token);
      cookie.set("User", JSON.stringify(res2.User));
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  };

  return (
    <>
      <ToastContainer/>
      <section className="text-gray-600 body-font mb-24">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <form className="lg:w-2/6 mx-auto md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-32 md:mt-0">
            <h2 className="text-gray-900 text-lg text-center font-medium title-font mb-5">
              Login
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="Email"
                className="leading-7 text-sm text-gray-600"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                onChange={onChange}
                value={login.email ? login.email : ""}
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                value={login.password ? login.password : ""}
                onChange={onChange}
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={submitForm}
              className="text-white  border-0 py-2 px-8 focus:outline-none primaryBtn rounded text-lg"
            >
              Login
            </button>
            <div className="forgot pColor text-center  mt-8">
              <Link href="/">
                <a className="text-center  ">Forgot the password ?</a>
              </Link>
            </div>

            <div className="text-center">
              If you dont have an account 
              <Link href="/Register">
                <a className="pColor "> Register</a>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
