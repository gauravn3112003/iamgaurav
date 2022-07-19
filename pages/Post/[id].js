import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

import baseUrl from "../../baseUrl";
const Post = (props) => {
  const artical = props.blogs.artical;
  const router = useRouter();
  const { title } = router.query;
  console.log(title);
  function home() {
    router.push("/");
  }
  function blogs() {
    router.push("/Blogs");
  }
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 ">
          <div>
            <div className="container py-6 md:py-10">
              <div className="mx-auto max-w-5xl">
                <div>
                  <span onClick={home} className="primaryColor cursor-pointer">
                    Home /{" "}
                  </span>
                  <span onClick={blogs} className=" cursor-pointer">
                    {" "}
                    blogs /{" "}
                  </span>{" "}
                  <span> {title}</span>
                </div>
                <div className="">
                  <h1 className="font-body text-primary pt-5 text-justify text-3xl font-semibold sm:text-4xl md:text-5xl xl:text-6xl">
                    {props.blogs.title}
                  </h1>
                  <div className="flex items-center pt-5 md:pt-10">
                    <div>
                      <image
                        src="https://images.pexels.com/photos/4298629/pexels-photo-4298629.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="border-grey-70 h-20 w-20 rounded-full border-2 shadow"
                        alt="author image"
                      />
                    </div>
                    <div className="pl-5">
                      <span className="font-body text-grey-10 block text-xl font-bold">
                        {props.blogs.author}
                      </span>
                      <span className="font-body text-grey-30 block pt-1 text-xl font-bold">
                        {props.blogs.date}
                      </span>
                    </div>
                  </div>
                  <div className=" horizonatal"></div>
                </div>

                <div className="prose max-w-none pt-8">
                  {/* <div className="font-bold">{props.blogs.description}</div> */}
                  <div
                    className="overflow-scroll "
                    dangerouslySetInnerHTML={{ __html: artical }}
                  />

                  <div className="border-lila flex flex-col items-center border-t py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                    <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                      <image
                        src="https://images.pexels.com/photos/4298629/pexels-photo-4298629.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="rounded-ful  l shadow"
                        alt="author image"
                      />
                    </div>
                    <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                      <h3 className="font-body text-secondary pt-10 text-2xl font-bold md:pt-0">
                        Christy Smith
                      </h3>
                      <p className="font-body text-secondary pt-5 text-lg leading-8 sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit.
                      </p>

                      <div className="flex items-center justify-center pt-5 md:justify-start">
                        <Link>
                          <a href="/">
                            <i className="bx bxl-facebook-square text-primary hover:text-yellow text-2xl"></i>
                          </a>
                        </Link>
                        <Link>
                          <a href="/" className="pl-4">
                            <i className="bx bxl-twitter text-primary hover:text-yellow text-2xl"></i>
                          </a>
                        </Link>
                        <Link>
                          <a href="/" className="pl-4">
                            <i className="bx bxl-dribbble text-primary hover:text-yellow text-2xl"></i>
                          </a>
                        </Link>
                        <Link>
                          <a href="/" className="pl-4">
                            <i className="bx bxl-linkedin text-primary hover:text-yellow text-2xl"></i>
                          </a>
                        </Link>
                        <Link>
                          <a href="/" className="pl-4">
                            <i className="bx bxl-instagram text-primary hover:text-yellow text-2xl"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary">
              <div className="container flex flex-col justify-between py-6 sm:flex-row">
                <p className="font-body text-center text-white md:text-left">
                  © Copyright 2022. All right reserved, ATOM.
                </p>
                <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                  <Link href="/">
                    <a className="pl-4">
                      <i className="bx bxl-facebook-square hover:text-yellow text-2xl text-white"></i>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="pl-4">
                      <i className="bx bxl-twitter hover:text-yellow text-2xl text-white"></i>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="pl-4">
                      <i className="bx bxl-dribbble hover:text-yellow text-2xl text-white"></i>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="pl-4">
                      <i className="bx bxl-linkedin hover:text-yellow text-2xl text-white"></i>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="pl-4">
                      <i className="bx bxl-instagram hover:text-yellow text-2xl text-white"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <script src="/assets/js/main.js"></script>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(baseUrl + "/api/post/" + id, {
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
export default Post;
