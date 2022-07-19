import React, { useState } from "react";
import { useRouter } from "next/router";
import SingleBlog from "./Component/SingleBlog";
import baseUrl from "../baseUrl";


const Blogs = (props) => {


  console.log(props.counts);

  const router = useRouter();
  function Home() {
    router.push("/");
  }
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="pb-6">
            <span onClick={Home} className="primaryColor cursor-pointer">
              Home /{" "}
            </span>
            <span className=" cursor-pointer"> Blogs</span>
          </div>
          <div className="-m-4 flex flex-wrap">
            {props.blogs.map((item) => {
              return (
                <SingleBlog
                  image={item.image}
                  Category={item.category}
                  Title={item.title.substring(0, 80)}
                  desc={item.description.substring(0, 200) + "..."}
                  key={item._id}
                  id={item._id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {

  // for show all blogs
  const res = await fetch(baseUrl + "/api/blogs", {
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
  const count = countData


  return {
    props: { blogs: data, counts: count, },
  };
}


export default Blogs;
