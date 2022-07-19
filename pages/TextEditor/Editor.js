import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import { ToastContainer, toast } from "react-toastify";
import baseUrl from "../../baseUrl";
import DashNavbar from "../admin/AdminComponent/DashNavbar";

function Editor() {
  // const [mainData, setMainData] = useState()
  const [mainArtical, setMainArtical] = useState({});
  const mainData = "";
  const [blogs, setBlogs] = useState({
    title: "",
    category: "",
    author: "",
    image: "",
    description: "",
  });
  const handleChange = (content, delta, source, editor) => {
    // setMainData(editor.getHTML())
    // setMainData
    mainData = editor.getHTML();
    console.log(mainData);
  };

  function onChange(e) {
    setBlogs({
      ...blogs,
      [e.target.name]: e.target.value,
    });
    console.log(blogs);
  }

  const submitForm = async (e) => {
    e.preventDefault();
    const { title, category, author, image, description } = blogs;
    addBlogs(title, category, author, image, description, mainData);
  };

  const addBlogs = async (
    title,
    category,
    author,
    image,
    description,
    artical
  ) => {
    try {
      const res = await fetch(baseUrl + "/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category,
          author,
          image,
          description,
          artical,
        }),
      });
      const data = await res.json();
      if (res.status === 500 || !data || res.status === 422) {
        toast.error("Error Occured !", {
          position: "top-left",
          autoClose: 500,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success("Blog Created !", {
          position: "top-left",
          autoClose: 500,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (e) {
      toast.error("Error Occured !", {
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
      <ToastContainer />
      <DashNavbar />
      <section className="body-font relative pb-5 text-gray-600">
        <div className="container mx-auto  flex flex-wrap px-5 py-24 sm:flex-nowrap">
          <div className=" widthFull m-auto mt-8 flex flex-col bg-white md:mt-0 md:w-1/2 md:py-8">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
              Create Blogs
            </h2>
            <form onSubmit={submitForm}>
              <div className="relative mb-4">
                <label
                  htmlFor="titile"
                  className="text-sm leading-7 text-gray-600"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  onChange={onChange}
                  required
                  value={blogs.title}
                  name="title"
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="category"
                  className="text-sm leading-7 text-gray-600"
                >
                  category
                </label>
                <input
                  type="text"
                  onChange={onChange}
                  id="category"
                  value={blogs.category}
                  required
                  name="category"
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="author"
                  className="text-sm leading-7 text-gray-600"
                >
                  Author
                </label>
                <input
                  type="text"
                  value={blogs.author}
                  id="author"
                  required
                  onChange={onChange}
                  name="author"
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="image"
                  className="text-sm leading-7 text-gray-600"
                >
                  Image
                </label>
                <input
                  type="text"
                  id="image"
                  onChange={onChange}
                  required
                  name="image"
                  value={blogs.image}
                  className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="description"
                  className="text-sm leading-7 text-gray-600"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  onChange={onChange}
                  value={blogs.description}
                  className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="artical"
                  className="text-sm leading-7 text-gray-600"
                >
                  Artical
                </label>
                <ReactQuill
                  className="shadow-sm"
                  theme="snow"
                  style={{
                    height: "500px",
                    overflow: "scroll",
                    marginTop: "1rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onChange={handleChange}
                  value={mainArtical}
                  name="artical"
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ size: [] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [{ align: [] }],
                      [{ color: [] }, { background: [] }],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link", "video", "image", "code-block"],
                      ["clean"],
                    ],
                  }}
                  formats={[
                    "header",
                    "font",
                    "size",
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "blockquote",
                    "color",
                    "background",
                    "list",
                    "bullet",
                    "indent",
                    "link",
                    "video",
                    "image",
                    "code-block",
                    "align",
                  ]}
                />
              </div>
              <input
                className="primaryBtn cursor-pointer rounded border-0 py-2 px-6 text-lg  text-white focus:outline-none"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Editor;
