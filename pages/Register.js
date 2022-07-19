import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import baseUrl from "../baseUrl";
const Register = () => {
  const router = useRouter();

  const [register, setRegister] = useState({});
  const onChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    const { name, userName, email, password } = register;
    addUser(name, userName, email, password);
  };

  const addUser = async (name, userName, email, password) => {
    const res = await fetch(baseUrl + "/api/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        userName,
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 201) {
      toast.success("Register Successfull !", {
        position: "top-left",
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        router.push("/Login");
      }, 2000);
    } else {
      toast.error("Error Occured", {
        position: "top-left",
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <form className="lg:w-2/6 mx-auto md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg text-center font-medium title-font mb-5">
              Register
            </h2>
            <div className="relative mb-4">
              <label htmlFor="Name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="Name"
                onChange={onChange}
                value={register.name ? register.name : ""}
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="userName"
                className="leading-7 text-sm text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                onChange={onChange}
                id="userName"
                name="userName"
                value={register.userName ? register.userName : ""}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="E-mail"
                className="leading-7 text-sm text-gray-600"
              >
                E-mail
              </label>
              <input
                type="email"
                id="Email"
                onChange={onChange}
                value={register.email ? register.email : ""}
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
                id="password"
                onChange={onChange}
                name="password"
                value={register.password ? register.password : ""}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {/* <div className="relative mb-4">
              <label
                htmlFor="cPassword"
                className="leading-7 text-sm text-gray-600"
              >
                Conform Password
              </label>
              <input
                type="cPassword"
                id="cPassword"
                name="cPassword"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div> */}
            <button
              onClick={submitForm}
              className="text-white  border-0 py-2 px-8 focus:outline-none primaryBtn rounded text-lg"
            >
              Register
            </button>

            <div className="text-center my-5">
              If you have an account ?
              <Link href="/Login">
                <a className="pColor"> Login</a>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
