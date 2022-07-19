import React from "react";
import baseUrl from "../../baseUrl";
import { parseCookies } from "nookies";
import CardPageVisits from "../../components/Cards/CardPageVisits.js";
import CardPageBlogs from "../../components/Cards/CardPageBlogs";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "../../layouts/Admin.js";
import CardCount from "../../components/Cards/CardCount";
import DashNavbar from "./AdminComponent/DashNavbar";

export default function Dashboard(props) {
  console.log("Length is :" + props.getBlogs.length);
  return (
    <>
      <section className="body-font py-10 text-gray-600">
        <DashNavbar />
        <div className="container mx-auto px-2 py-16">
          <div className="countTotal">
            <div className="flex flex-wrap justify-between">
              <CardCount title="Blogs" counts={props.countBlogs} btn="show" />
              <CardCount title="Contact" counts="200" btn="show" />
              <CardCount
                title="Connect"
                counts={props.countFeedback}
                btn="show"
              />
              <CardCount title="Users" counts="200" btn="show" />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap">
            <div className="mb-12 w-full px-4 xl:mb-0 xl:w-8/12">
              <CardPageVisits
                fieldName="Feedback"
                field1="Name"
                field2="E-mail"
                field3="Message"
                feedback={props.Connect}
              />
            </div>
            <div className="w-full px-4 xl:w-4/12">
              <CardSocialTraffic />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap">
            <div className="mb-12 w-full px-4 xl:mb-0 xl:w-8/12">
              <CardPageBlogs
                fieldName="Blogs"
                field1="Name"
                field2="Author"
                field3="Category"
                Blogs={props.getBlogs}
              />
            </div>
            <div className="w-full px-4 xl:w-4/12">
              <CardSocialTraffic />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(ctx) {
  // to fetch all blogs data
  const resBlogs = await fetch(baseUrl + "/api/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const dataBlogs = await resBlogs.json();

  // for get all connect us Data
  const res = await fetch(baseUrl + "/api/Connect", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  // for count all blogs
  const countBlogs = await fetch(baseUrl + "/api/countAllBlogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const countData = await countBlogs.json();
  const BlogsCount = countData;

  // for count all blogs
  const countFeedback = await fetch(baseUrl + "/api/countAllFeedback", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const countFeedbacks = await countFeedback.json();
  const Feedback = countFeedbacks;

  // for with login access
  const cookieuser = parseCookies(ctx);
  const user = cookieuser.User ? JSON.parse(cookieuser.User) : "";
  console.log(user);

  if (user.role != "root") {
    const { res } = ctx;
    res.writeHead(302, { Location: "/" });
    res.end();
  }
  return {
    props: {
      Connect: data,
      countBlogs: BlogsCount,
      countFeedback: Feedback,
      getBlogs: dataBlogs,
    },
  };
  इ;
}

Dashboard.layout = Admin;
