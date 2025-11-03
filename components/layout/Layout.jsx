import React from "react";
import Head from "next/head";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Analytics } from "@vercel/analytics/next"

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Head>
        <title>Raouf Store</title>
      </Head>
      <header className="header">
        <Navbar />
      </header>
      <section className="layout-section">{children}</section>
      <footer>
        <Footer />
      </footer>
      <Analytics />
    </div>
  );
};

export default Layout;
