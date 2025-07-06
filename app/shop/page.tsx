

import Footer from "@/components/Footer";
import Instagram from "@/components/Instagram";
import Navigation from "@/components/Navigation";
import Hero from "@/components/shop/Hero";
import WhiteNav from "@/components/shop/WhiteNav";
import Stores from "@/components/Stores";
import TopBar from "@/components/TopBar";
import React from "react";
import "../new.css";

function Shop() {
  return (
    <div className="page-wrapper">
      <div className="nav-group-home">
        <TopBar />
        <WhiteNav />
      </div>
      <div className="main-wrapper">
              <Hero />
              <Stores />
              <Instagram />
      </div>
      <Footer />
    </div>
  );
}

export default Shop;