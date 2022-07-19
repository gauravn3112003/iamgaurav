import React,{useEffect} from "react";
import SingleBlog from "./SingleBlog";

const HomeBlogs = (props) => {
  const blog = props.blogData.blogs;

    const last = blog.length;
    const first = last - 3;

  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-20">
          <div className=" my-5 text-3xl ">Blogs</div>
          <div className="-m-4 flex  flex-wrap">
            {blog.slice(first, last).map((item) => {
              return (
                <SingleBlog
                  image={item.image}
                  Category={item.category}
                  Title={item.title.substring(0, 80) }
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

export default HomeBlogs;
