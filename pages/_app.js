import "../styles/globals.css";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { BrowserRouter } from "react-router-dom";
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
        <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
