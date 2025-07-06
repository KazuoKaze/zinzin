import React from "react";

export default function ClientReviews() {
  return (
    <div className="client-section">
      <div className="section-spacing">
        <div className="container">
          <div className="common-title-wrap client-heading">
            <h2 className="common-title left">Our client reviews</h2>
          </div>
          <div
            data-delay="4000"
            data-animation="slide"
            className="client-slider w-slider"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div className="client-slider-mask w-slider-mask">
              <div className="client-slide w-slide">
                <div className="clients">
                  <div className="clients-thumb-wrap">
                    <img
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 46vw"
                      srcSet="
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1884_clients-thumb-1-p-500.jpg  500w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1884_clients-thumb-1-p-800.jpg  800w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1884_clients-thumb-1.jpg       1190w
                      "
                      alt="A pair of jeans, a sweater, and a tulip on a bed."
                      src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1884_clients-thumb-1.jpg"
                      loading="lazy"
                      className="clients-thumb"
                    />
                  </div>
                  <div className="clients-content">
                    <div className="clients-star-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f188a_star.svg"
                        alt="a yellow star on a white background"
                        className="clients-star"
                      />
                    </div>
                    <div className="clients-title-wrap">
                      <h2 className="clients-title">
                        Exceptional quality and service
                      </h2>
                    </div>
                    <div className="clients-text-wrap">
                      <p className="clients-text">
                        "I was blown away by the quality of products from
                        Zinzira. Every detail exceeded my expectations, and the
                        customer service was top-notch. I highly recommend them
                        to anyone looking for reliability and style."
                      </p>
                    </div>
                    <div className="clients-info-wrap">
                      <div className="clients-author-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f188b_client-author.png"
                          alt="A young man wearing sunglasses and a blue shirt."
                          className="clients-author"
                        />
                      </div>
                      <div className="clients-info">
                        <h3 className="clients-info-name">Lisa Brown</h3>
                        <p className="clients-info-text">Fashion Model</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="client-slide w-slide">
                <div className="clients">
                  <div className="clients-thumb-wrap">
                    <img
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 46vw"
                      srcSet="
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a7_clients-thumb-2-p-500.jpg  500w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a7_clients-thumb-2-p-800.jpg  800w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a7_clients-thumb-2.jpg       1190w
                      "
                      alt="The contents of a women's clothing laid out on a table."
                      src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a7_clients-thumb-2.jpg"
                      loading="lazy"
                      className="clients-thumb"
                    />
                  </div>
                  <div className="clients-content">
                    <div className="clients-star-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18cb_star-2.svg"
                        alt="a yellow star on a white background"
                        className="clients-star"
                      />
                    </div>
                    <div className="clients-title-wrap">
                      <h2 className="clients-title">
                        A brand I trust for all my purchases
                      </h2>
                    </div>
                    <div className="clients-text-wrap">
                      <p className="clients-text">
                        "Zinzira has become my go-to for online shopping. They
                        consistently offer amazing products, and their customer
                        support is always there when I need it. Shopping has
                        never been this convenient."
                      </p>
                    </div>
                    <div className="clients-info-wrap">
                      <div className="clients-author-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18fb_client-author-5.png"
                          alt="a man wearing sunglasses and a black shirt"
                          className="clients-author"
                        />
                      </div>
                      <div className="clients-info">
                        <h3 className="clients-info-name">Emma Moore</h3>
                        <p className="clients-info-text">
                          Social Media Influencer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="client-slide w-slide">
                <div className="clients">
                  <div className="clients-thumb-wrap">
                    <img
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 46vw"
                      srcSet="
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18af_clients-thumb-3-p-500.jpg   500w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18af_clients-thumb-3-p-800.jpg   800w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18af_clients-thumb-3-p-1080.jpg 1080w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18af_clients-thumb-3.jpg        1190w
                      "
                      alt="A close up of a shirt on a table."
                      src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18af_clients-thumb-3.jpg"
                      loading="lazy"
                      className="clients-thumb"
                    />
                  </div>
                  <div className="clients-content">
                    <div className="clients-star-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f188a_star.svg"
                        alt="a yellow star on a white background"
                        className="clients-star"
                      />
                    </div>
                    <div className="clients-title-wrap">
                      <h2 className="clients-title">
                        Unmatched product selection and prices
                      </h2>
                    </div>
                    <div className="clients-text-wrap">
                      <p className="clients-text">
                        "The variety of products Zinzira offers is incredible,
                        and their prices are unbeatable. I've found everything I
                        need in one place, and the quality always impresses me.
                        Highly recommend!"
                      </p>
                    </div>
                    <div className="clients-info-wrap">
                      <div className="clients-author-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18b8_client-author-2.png"
                          alt="A man with glasses and a beard smiling."
                          className="clients-author"
                        />
                      </div>
                      <div className="clients-info">
                        <h3 className="clients-info-name">Mark Lewis</h3>
                        <p className="clients-info-text">Product Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="client-slide w-slide">
                <div className="clients">
                  <div className="clients-thumb-wrap">
                    <img
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 46vw"
                      srcSet="
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18c5_clients-thumb-4-p-500.jpg   500w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18c5_clients-thumb-4-p-800.jpg   800w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18c5_clients-thumb-4-p-1080.jpg 1080w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18c5_clients-thumb-4.jpg        1190w
                      "
                      alt="A suitcase filled with clothes and shoes."
                      src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18c5_clients-thumb-4.jpg"
                      loading="lazy"
                      className="clients-thumb"
                    />
                  </div>
                  <div className="clients-content">
                    <div className="clients-star-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18cb_star-2.svg"
                        alt="a yellow star on a white background"
                        className="clients-star"
                      />
                    </div>
                    <div className="clients-title-wrap">
                      <h2 className="clients-title">
                        Excellent customer service experience
                      </h2>
                    </div>
                    <div className="clients-text-wrap">
                      <p className="clients-text-2">
                        "I had a minor issue with my order, but Zinzira's
                        customer service team went above and beyond to resolve
                        it quickly. Their commitment to customer satisfaction is
                        evident. I'll continue shopping sure!"
                      </p>
                    </div>
                    <div className="clients-info-wrap">
                      <div className="clients-author-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18b4_client-author-3.png"
                          alt="A man wearing glasses and a plaid shirt."
                          className="clients-author"
                        />
                      </div>
                      <div className="clients-info">
                        <h3 className="clients-info-name">James Carter</h3>
                        <p className="clients-info-text-2">IT Consultant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="client-slide w-slide">
                <div className="clients">
                  <div className="clients-thumb-wrap">
                    <img
                      sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, 46vw"
                      srcSet="
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18bd_clients-thumb-5-p-500.jpg   500w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18bd_clients-thumb-5-p-800.jpg   800w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18bd_clients-thumb-5-p-1080.jpg 1080w,
                        https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18bd_clients-thumb-5.jpg        1190w
                      "
                      alt="A pile of clothes sitting on top of each other."
                      src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18bd_clients-thumb-5.jpg"
                      loading="lazy"
                      className="clients-thumb"
                    />
                  </div>
                  <div className="clients-content">
                    <div className="clients-star-wrap">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18cb_star-2.svg"
                        alt="a yellow star on a white background"
                        className="clients-star"
                      />
                    </div>
                    <div className="clients-title-wrap">
                      <h2 className="clients-title">
                        Top-notch design and usability
                      </h2>
                    </div>
                    <div className="clients-text-wrap">
                      <p className="clients-text">
                        "The design and functionality of the Zinzira website
                        make shopping a breeze. The ease of navigation and the
                        detailed product descriptions make the experience truly
                        enjoyable. Definitely a 5-star platform!"
                      </p>
                    </div>
                    <div className="clients-info-wrap">
                      <div className="clients-author-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18b6_client-author-4.png"
                          alt="A man wearing sunglasses and a white shirt."
                          className="clients-author"
                        />
                      </div>
                      <div className="clients-info">
                        <h3 className="clients-info-name">John Evans</h3>
                        <p className="clients-info-text">Fashion Model</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="client-slider-arrow-left w-slider-arrow-left">
              <div className="client-slider-arrow-icon w-embed">
                <svg
                  width=" 100%"
                  height=" 100%"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6663 10H3.33301M3.33301 10L8.33301 15M3.33301 10L8.33301 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="client-slider-arrow-right w-slider-arrow-right">
              <div className="client-slider-arrow-icon w-embed">
                <svg
                  width=" 100%"
                  height=" 100%"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16699 10.0003H15.8337M15.8337 10.0003L10.0003 4.16699M15.8337 10.0003L10.0003 15.8337"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="slide-nav w-slider-nav w-round w-num"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
