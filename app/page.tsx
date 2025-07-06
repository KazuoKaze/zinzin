// import React from "react";
// import Header from "../components/Header";
// import Hero from "../components/Hero";
// import BestSellers from "../components/BestSellers";
// import Collection from "../components/Collection";
// import Brand from "../components/Brand";
// import Categories from "../components/Categories";
// import Explore from "../components/Explore";
// import Products from "../components/Products";
// import ClientReviews from "../components/ClientReviews";
// import Support from "../components/Support";
// import Blog from "../components/Blog";
// import Stores from "../components/Stores";
// import Instagram from "../components/Instagram";
// import Footer from "../components/Footer";
// import New from "@/components/New";

// function App() {
//   return (
//     // <div className="page-wrapper">
//     //   <Header />
//     //   <div className="main-wrapper">
//     //     <Hero />
//     //     <BestSellers />
//     //     <Collection />
//     //     <Brand />
//     //     <Categories />
//     //     <Explore />
//     //     <Products />
//     //     <ClientReviews />
//     //     <Support />
//     //     <Blog />
//     //     <Stores />
//     //     <Instagram />
//     //   </div>
//     //   <Footer />
//     // </div>

//     <>
//       <New />
//     </>
//   );
// }

// export default App;

import React from "react";
import TopBar from "../components/TopBar";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import BestSellers from "../components/BestSellers";
import Collection from "../components/Collection";
import Brand from "../components/Brand";
import Categories from "../components/Categories";
import Explore from "../components/Explore";
import Products from "../components/Products";
import ClientReviews from "../components/ClientReviews";
import Support from "../components/Support";
import Blog from "../components/Blog";
import Stores from "../components/Stores";
import Instagram from "../components/Instagram";
import Footer from "../components/Footer";

import './new.css'

function App() {
  return (
    <div className="page-wrapper">
      <div className="nav-group-home">
        <TopBar />
        <Navigation />
      </div>
      <div className="main-wrapper">
        <Hero />
        <BestSellers />
        <Collection />
        {/* <Brand /> */}
        <Categories />
        <Explore />
        <Products />
        <ClientReviews />
        <Support />
        <Blog />
        <Stores />
        <Instagram />
      </div>
      <Footer />
    </div>
  );
}

export default App;
