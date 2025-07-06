import Footer from "@/components/Footer";
import WhiteNav from "@/components/shop/WhiteNav";
import Hero from "@/components/signin/Hero";
import TopBar from "@/components/TopBar";
import "../new.css";

export default function SingIn() {
    return (
        <div className="page-wrapper">
              <div className="nav-group-home">
                <TopBar />
                <WhiteNav />
              </div>
              <div className="main-wrapper">
                      <Hero />
                      {/* <Stores />
                      <Instagram /> */}
              </div>
              <Footer />
            </div>
    )
}