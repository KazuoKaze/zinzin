import React from "react";

export default function Collection() {
  return (
    <div className="collection-section">
      <div className="section-spacing">
        <div className="container">
          <div className="collection-layout">
            <div className="collection-content">
              <div className="collection-title-wrap">
                <h2 className="collection-title">
                  Find something new in every Zinzira collection
                </h2>
              </div>
              <div className="collection-content-thumb-wrap">
                <img
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 44vw, (max-width: 991px) 290px, 22vw"
                  alt="A row of shirts hanging on a rack."
                  src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1864_collection-thumb-2.jpg"
                  loading="lazy"
                  className="collection-content-thumb"
                />
                <img
                  sizes="(max-width: 479px) 92vw, (max-width: 767px) 44vw, (max-width: 991px) 290px, 22vw"
                  alt="A rack of clothes and a potted plant."
                  src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1876_collection-thumb-3.jpg"
                  loading="lazy"
                  className="collection-content-thumb"
                />
              </div>
              <div className="collection-text-wrap">
                <p className="collection-text">
                  We are passionate about modern &stylish cloth. We specialize
                  in offering a curated selection of modern &stylish cloth that
                  reflects elegance.
                </p>
              </div>
              <div className="collection-btn-wrap">
                <a href="/about-us" className="btn-wrap w-inline-block">
                  <div className="btn-inner">
                    <div>About us</div>
                    <div className="btn-icon-wrap">
                      <div className="btn-icon w-embed">
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
                      <div className="btn-icon w-embed">
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
                  <div className="btn-shape"></div>
                </a>
              </div>
            </div>
            <div className="collection-thumb-wrap">
              <img
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 47vw"
                alt="A rack of clothes in front of a window."
                src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f186f_collection-thumb-1.jpg"
                loading="lazy"
                className="collection-thumb"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
