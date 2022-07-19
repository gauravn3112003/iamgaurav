import HomePage from "./HomePage.js";
import baseUrl from "../baseUrl.js";
import React from "react";

import Head from "next/head"

export default function Home(props) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <HomePage homeBlog={props} />
    </>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(baseUrl + "/api/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return {
    props: { blogs: data },
  };
}
