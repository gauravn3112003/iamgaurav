import Link from "next/link";
import React, { useState } from "react";

const DashNavbar = () => {
  const [sidebar, setSidebar] = useState("closeNav");
  function navigation() {
    if (sidebar === "openNav") {
      setSidebar("closeNav");
    } else {
      setSidebar("openNav");
    }
  }


  return (
    <>
      <div className="dashOpen">
        <i onClick={navigation} className="bi bi-menu-button-wide-fill"></i>
      </div>
      <div className={`dashContainer ${sidebar}`}>
        <div className="dashList">
          {/* <Link href="/admin/CreateBlogs">
            <a>Create Blog</a>
          </Link> */}
          <Link href="/">
            <a>All Contact Us</a>
          </Link>
          <Link href="/admin/Feedback">
            <a>All Feedback</a>
          </Link>{" "}
          <Link href="/admin/AllBlogs">
            <a>All Blogs</a>
          </Link>
          <Link className="logOut" href="/">
            <a className="logOut">
              Log Out
              <i className="bi ml-3  bi-box-arrow-right"></i>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashNavbar;
