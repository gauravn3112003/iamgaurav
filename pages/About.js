import React from "react";
import { useRouter } from "next/router";

const About = () => {
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
              Home /
            </span>
            <span className=" cursor-pointer"> About</span>
          </div>
          <div>
            About
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
