import Footer from "@/components/Footer";
import WhiteNav from "@/components/shop/WhiteNav";
import Hero from "@/components/single/Hero";
import Stores from "@/components/Stores";
// import Hero from "@/components/signup/Hero";
import TopBar from "@/components/TopBar";

import '../new.css'

export default function Single() {
  return (
    <div className="page-wrapper">
      <div className="nav-group-home">
        <TopBar />
        <WhiteNav />
      </div>
      <div className="main-wrapper">
              <Hero />
              <Stores />
        {/* <Stores />
                      <Instagram /> */}
      </div>
      <Footer />
    </div>
  );
}
