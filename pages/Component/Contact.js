import React from "react";
import { useState } from "react";
// const { MAIN_URL } = process.env;
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import baseUrl from "../../baseUrl";

const Contact = () => {
  const [connect, setConnect] = useState({});
  const onChange = (e) => {
    setConnect({
      ...connect,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const { name, email, message } = connect;
    addConnect(name, email, message);
  };

  const addConnect = async (name, email, message) => {
    const res = await fetch(baseUrl + "/api/Connect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const data = await res.json();
    if (res.status === 201) {
      toast.success("Thanks For feedback !", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Error Occured", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className="body-font relative text-gray-600">
        <div className="container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap">
          <div className="relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
            {" "}
            <div className="relative flex flex-wrap rounded bg-white py-6 shadow-md">
              <div className="px-6 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  EMAIL
                </h2>
                <a className="leading-relaxed text-indigo-500">
                  example@email.com
                </a>
                <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col bg-white md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
              Feedback
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <form onSubmit={submitForm}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="text-sm leading-7 text-gray-600"
                >
                  Name
                </label>
                <input
                  onChange={onChange}
                  value={connect.name ? connect.name : ""}
                  type="text"
                  id="name"
                  required
                  name="name"
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="text-sm leading-7 text-gray-600"
                >
                  Email
                </label>
                <input
                  onChange={onChange}
                  value={connect.email ? connect.email : ""}
                  type="email"
                  id="email"
                  required
                  name="email"
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="text-sm leading-7 text-gray-600"
                >
                  Message
                </label>
                <textarea
                  onChange={onChange}
                  value={connect.message ? connect.message : ""}
                  id="message"
                  name="message"
                  required
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>

              <input
                className="primaryBtn cursor-pointer rounded border-0 py-2 px-6 text-lg  text-white focus:outline-none"
                type="submit"
                value="Submit"
              />
            </form>
            <p className="mt-3 text-xs text-gray-500">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
