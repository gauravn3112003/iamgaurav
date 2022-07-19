import React, { useState, useEffect } from "react";
import { parseCookies } from "nookies";
import baseUrl from "../../baseUrl";
import DashNavbar from "./AdminComponent/DashNavbar";
const AllBlogs = (props) => {
  // console.log(props.Feedback);

  const Deletefeedback = (id) => {
    // console.log(id)
  };

  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto items-center px-5  py-24">
          <DashNavbar />
          <div className="mb-0 rounded-t border-0 px-4 py-3">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-1 flex-grow px-4">
                <h3 className="text-blueGray-700 text-base font-semibold">
                  Feedback's
                </h3>
              </div>
            </div>
          </div>
          <div className="block max-h-fit w-full   overflow-x-auto">
            {/* Projects table */}
            <table className="table w-full border-collapse items-center bg-transparent">
              <thead>
                <tr>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Sr. NO.
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Name
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    E-mail
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Message
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Date
                  </th>
                  <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                    Update/Delete
                  </th>
                </tr>
              </thead>

              <tbody>
                {props.Feedback.map((item, index) => {
                  return (
                    <tr className="my-1 border" key={index}>
                      <th className="w-1as whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left text-center align-middle text-xs font-bold">
                        {index + 1}
                      </th>
                      <th className="w-96 whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                        {item.name}
                      </th>
                      <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                        {item.email}
                      </td>
                      <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                        {item.message}
                      </td>
                      <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                        {item.date}
                      </td>
                      <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                        <div className="CurdIcons" F>
                          <button onClick={Deletefeedback(item.name)}>
                            <i className="bi bi-pencil-square"></i>
                          </button>
                          <button>
                            {" "}
                            <i className="bi bi-trash3"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(baseUrl + "/api/Connect", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();


  const cookieuser = parseCookies(ctx);
  const user = cookieuser.User ? JSON.parse(cookieuser.User) : "";
  
  if (user.role != "root") {
    const { res } = ctx;
    res.writeHead(302, { Location: "/" });
    res.end();
  }
  return {
    props: { Feedback: data },
  };
}

export default AllBlogs;
