import Link from "next/link";
import React from "react";
import Router from "next/router";
import { useState } from "react";
import Profile from "../Component/Profile";
import { parseCookies } from "nookies";
import NavLocal from "./NavLocal";
const Navbar = () => {
  const [search, setSearch] = useState({
    title: "",
  });

  function handleChange(e) {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  }

  const [sidebar, setSidebar] = useState("closeNav");
  const [menu, setMenu] = useState("bi-list");

  function navigation() {
    if (sidebar === "openNav") {
      setSidebar("closeNav");
      setMenu("bi-list");
    } else {
      setSidebar("openNav");
      setMenu("bi-x-lg");
    }
  }
  function change() {
    Router.push("/Login");
  }

  const { token } = parseCookies();
  let userLogin = false;
  if (token) {
    userLogin = true;
  } else {
    userLogin = false;
  }
  const cookieuser = parseCookies();
  const user = cookieuser.User ? JSON.parse(cookieuser.User) : "";
  return (
    <>
      <nav className="nav">
        <div className="navbar">
          <div className="left">
            <div className="image">
              <image
                src="https://images.pexels.com/photos/6948652/pexels-photo-6948652.jpeg?auto=compress&cs=tinysrgb&w=600"
                width="30px"
                alt=""
              />
            </div>
            <div className="nameTitle">Unknown</div>
            <i onClick={navigation} className={`bi open ${menu}  `}></i>
          </div>

          <div className={`right ${sidebar}`}>
            <div className="center">
              <form action={`/Search/ ${search.title} `} className="search">
                <input
                  className="px-2"
                  type="Search"
                  name="title"
                  value={search.title ? search.title : ""}
                  onChange={handleChange}
                  placeholder="Search Blog"
                />

                <button className="  px-4 py-0.5  ">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>

            <ul className="lis">
              {NavLocal.map((item) => {
                return (
                  <Link key={item.location} href={item.location}>
                    <a>
                      <i className={`bi pr-3 ${item.icon}`}></i> {item.Name}
                    </a>
                  </Link>
                );
              })}
              {user.role === "root" ? (
                <Link href="/admin/dashboard">
                  <a>
                    <i className="bi pr-3 bi-calendar-event-fill"></i>
                    Dashboard
                  </a>
                </Link>
              ) : (
                ""
              )}
              {!userLogin && (
                <button
                  onClick={change}
                  className="primaryBtn login ml-3 px-4 py-1"
                >
                  Login
                </button>
              )}
            </ul>
          </div>
          {userLogin && (
            <div className="profile">
              <Profile />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
