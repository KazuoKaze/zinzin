




import Hero from "@/components/category/Hero";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Instagram from "@/components/Instagram";
import Navigation from "@/components/Navigation";

import WhiteNav from "@/components/shop/WhiteNav";
import Stores from "@/components/Stores";
import TopBar from "@/components/TopBar";
import React from "react";

import "../new.css";


function Category() {
  return (
    <div className="page-wrapper">
      <div className="nav-group-home">
        <TopBar />
        <WhiteNav />
      </div>
      <div className="main-wrapper">
              <Hero />
              <Explore />
              <Stores />
              <Instagram />
      </div>
      <Footer />
    </div>
  );
}

export default Category;