import React from "react";
import Contact from "./Component/Contact";
import HomeBlogs from "./Component/HomeBlogs";
import Skills from "./Component/Skills";

const HomePage = (blogs) => {
  return (
    <>
      <section className="body-font home text-gray-600">
        <div className="container mx-auto px-5 py-16">
        {/* <div className="shape"></div>
        <div className=" shape2"></div>
        <div className=" shape3"></div> */}
        <div className="overlay">
          <div className="head-home">
            Hi, <br /> I'm <span className="primaryColor">Unknow</span>
          </div>
          <div className="img-shape">
            <div className="square">
              <image
                src="https://images.pexels.com/photos/3124332/pexels-photo-3124332.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="cr-1 card-img">Front-end Developer</div>
            <div className="cr-2 card-img">Full Stack sDeveloper</div>
            <div className="cr-3 card-img">Digital Marketer</div>
          </div>
          {/* <div className="home-text">
            Founder of <span>Spiritual Codes</span>
          </div> */}
          <div className="home-icons">
            <div className="home-icon">
              <i className="bi bi-facebook"></i>
            </div>
            <div className="home-icon">
              <i className="bi bi-whatsapp"></i>
            </div>
            <div className="home-icon">
              <i className="bi bi-instagram"></i>
            </div>
            <div className="home-icon">
              <i className="bi bi-github"></i>
            </div>
          </div>
          <div className="scroll-home">
            <div className="scroll-flex">
              <div className="circle"></div>
              <div className="swipe-text">Swipe Down</div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <HomeBlogs blogData={blogs.homeBlog} />
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
