import React from "react";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-wrapper">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-top">
              <div className="hero-content-left">
                <div className="hero-small-text-wrap">
                  <p className="hero-small-text">What our customers says</p>
                </div>
                <div className="hero-text-wrap">
                  <div
                    data-delay="3000"
                    data-animation="outin"
                    className="hero-text-slider w-slider"
                    data-autoplay="true"
                    data-easing="ease"
                    data-hide-arrows="false"
                    data-disable-swipe="false"
                    data-autoplay-limit="0"
                    data-nav-spacing="3"
                    data-duration="500"
                    data-infinite="true"
                  >
                    <div className="hero-text-slider-mask w-slider-mask">
                      <div className="hero-text-slide w-slide">
                        <p className="hero-text">
                          "I'm impressed by the quality of work and the level"
                        </p>
                      </div>
                      <div className="hero-text-slide w-slide">
                        <p className="hero-text">
                          "Fast, simple, user-friendly, absolutely amazing!"
                        </p>
                      </div>
                      <div className="hero-text-slide w-slide">
                        <p className="hero-text">
                          "Easy to use, fast checkout, excellent products!"
                        </p>
                      </div>
                    </div>
                    <div className="hero-text-slider-arrow w-slider-arrow-left">
                      <div className="w-icon-slider-left"></div>
                    </div>
                    <div className="hero-text-slider-arrow w-slider-arrow-right">
                      <div className="w-icon-slider-right"></div>
                    </div>
                    <div className="hero-text-slider-nav w-slider-nav"></div>
                  </div>
                </div>
              </div>
              <div className="hero-content-right">
                <div className="hero-product-wrap">
                  <a
                    href="/products"
                    className="hero-product-thumb-wrap w-inline-block"
                  >
                    <img
                      loading="eager"
                      src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1915_hero-product.png"
                      alt="hero-thumb"
                      className="hero-product-thumb"
                    />
                  </a>
                  <a
                    href="/products"
                    className="hero-product-title-wrap w-inline-block"
                  >
                    <div className="hero-product-title">
                      Explore New Arrivals
                    </div>
                    <div className="hero-product-title-icon-wrap">
                      <div className="hero-product-title-icon w-embed">
                        <svg
                          width=" 100%"
                          height=" 100%"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4763 9.1664L9.00634 4.6964L10.1847 3.51807L16.6663 9.99973L10.1847 16.4814L9.00634 15.3031L13.4763 10.8331H3.33301V9.1664H13.4763Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="hero-product-title-icon w-embed">
                        <svg
                          width=" 100%"
                          height=" 100%"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.4763 9.1664L9.00634 4.6964L10.1847 3.51807L16.6663 9.99973L10.1847 16.4814L9.00634 15.3031L13.4763 10.8331H3.33301V9.1664H13.4763Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-bottom">
              <div className="hero-bottom-left">
                <div className="hero-title-wrap">
                  <h1 className="hero-title">
                    Exclusive Collections
                    <br />
                    For Z-Generation
                  </h1>
                </div>
                <div className="hero-title-layout">
                  <div className="hero-btn-wrap">
                    <a
                      href="/products"
                      className="btn-wrap-white-2 hero-btn w-inline-block"
                    >
                      <div className="btn-inner-w-2">
                        <div>Shop Now</div>
                        <div className="btn-icon-wrap">
                          <div className="btn-icon-white-2 w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.4763 9.1664L9.00634 4.6964L10.1847 3.51807L16.6663 9.99973L10.1847 16.4814L9.00634 15.3031L13.4763 10.8331H3.33301V9.1664H13.4763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="btn-icon-white-2 w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.4763 9.1664L9.00634 4.6964L10.1847 3.51807L16.6663 9.99973L10.1847 16.4814L9.00634 15.3031L13.4763 10.8331H3.33301V9.1664H13.4763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="btn-shape-white-2"></div>
                    </a>
                    <a
                      href="/our-categories"
                      className="btn-wrap-2-white hero-btn w-inline-block"
                    >
                      <div className="btn-inner-2">
                        <div>Categories</div>
                        <div className="btn-icon-wrap">
                          <div className="btn-icon-2-white w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.4763 9.1664L9.00634 4.6964L10.1847 3.51807L16.6663 9.99973L10.1847 16.4814L9.00634 15.3031L13.4763 10.8331H3.33301V9.1664H13.4763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="btn-icon-2-white w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.4763 9.1664L9.00634 4.6964L10.1847 3.51807L16.6663 9.99973L10.1847 16.4814L9.00634 15.3031L13.4763 10.8331H3.33301V9.1664H13.4763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="btn-shape-2-white"></div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero-bottom-right">
                <a
                  href="#best-seller"
                  className="scrolldown-btn w-inline-block"
                >
                  <div>Scroll Down</div>
                  <div className="scrolldown-btn-icon-wrap">
                    <div className="scrolldown-btn-icon w-embed">
                      <svg
                        width=" 100%"
                        height=" 100%"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.12492 10.1075L11.4774 6.755L12.3612 7.63875L7.49992 12.5L2.63867 7.63875L3.52242 6.755L6.87492 10.1075V2.5H8.12492V10.1075Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="scrolldown-btn-icon w-embed">
                      <svg
                        width=" 100%"
                        height=" 100%"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.12492 10.1075L11.4774 6.755L12.3612 7.63875L7.49992 12.5L2.63867 7.63875L3.52242 6.755L6.87492 10.1075V2.5H8.12492V10.1075Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-thumb-wrap">
          <img
            className="hero-thumb xl"
            src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f191f_hero-bg.jpg"
            alt="A man wearing a white hat and green jacket."
            sizes="100vw"
            data-w-id="0f5f68fa-7a02-3586-da0f-d7fe3912c6a3"
            loading="eager"
          />
          <img
            className="hero-thumb lg"
            src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1938_hero-bg-lg.jpg"
            alt="hero-bg-lg"
            sizes="100vw"
            data-w-id="0f5f68fa-7a02-3586-da0f-d7fe3912c6a4"
            loading="eager"
          />
          <img
            className="hero-thumb xs"
            src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f192c_hero-bg-md.jpg"
            alt="a man wearing a white hat and a green jacket"
            sizes="100vw"
            data-w-id="0f5f68fa-7a02-3586-da0f-d7fe3912c6a5"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}
