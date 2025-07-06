

export default function New() {
    return (
      <>
        <div className="page-wrapper">
          <div className="nav-group-home">
            <div className="topbar-section">
              <div className="section-spacing">
                <div className="container">
                  <div className="topbar-text-wrap">
                    <p className="topbar-text">
                      Sign up for our newsletterssss and get 15% off your next
                      order
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-section white">
              <div className="section-spacing">
                <div className="container">
                  <div className="nav-layout">
                    <div className="nav-left">
                      <a
                        href="/"
                        aria-current="page"
                        className="logo-wrap w-inline-block w--current"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f8_logo-white.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="logo"
                        />
                      </a>
                    </div>
                    <div className="nav-middle dark">
                      <div className="nav-menu">
                        <a
                          href="/"
                          aria-current="page"
                          className="nav-link white w--current"
                        >
                          Home
                        </a>
                        <a href="/products" className="nav-link white">
                          Shop
                        </a>
                        <a href="/our-categories" className="nav-link white">
                          Category
                        </a>
                        <a href="/about-us" className="nav-link white">
                          About
                        </a>
                        <a href="/client-reviews" className="nav-link white">
                          Reviews
                        </a>
                        <a href="/faq" className="nav-link white">
                          FAQ
                        </a>
                        <a href="/blog" className="nav-link white">
                          Journal
                        </a>
                      </div>
                    </div>
                    <div className="nav-right">
                      <div className="search-icon-wrap">
                        <img
                          width="24"
                          loading="lazy"
                          alt=""
                          src="https://cdn.prod.website-files.com/66f12ee2729357c157164bde/670d5df8d83d34d3ef18c1e5_search-white.svg"
                          className="search-icon"
                        />
                      </div>
                      <a
                        href="/user-account"
                        className="user-icon-wrap w-inline-block"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f9_user-white.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="user-icon"
                        />
                      </a>
                      <div
                        data-open-product=""
                        data-wf-cart-type="modal"
                        data-wf-cart-query='query Dynamo3 {
  database {
    id
    commerceOrder {
      comment
      extraItems {
        name
        pluginId
        pluginName
        price {
          decimalValue
          string
          unit
          value
        }
      }
      id
      startedOn
      statusFlags {
        hasDownloads
        hasSubscription
        isFreeOrder
        requiresShipping
      }
      subtotal {
        decimalValue
        string
        unit
        value
      }
      total {
        decimalValue
        string
        unit
        value
      }
      updatedOn
      userItems {
        count
        id
        price {
          value
          unit
          decimalValue
          string
        }
        product {
          id
          cmsLocaleId
          draft
          archived
          f_discounts_text_9dr: fieldPlainText(slug: "discounts-text")
          f_name_: name
          f_sku_properties_3dr: skuProperties {
            id
            name
            enum {
              id
              name
              slug
            }
          }
        }
        rowTotal {
          decimalValue
          string
          unit
          value
        }
        sku {
          cmsLocaleId
          draft
          archived
          f_main_image_4dr: mainImage {
            url
            file {
              size
              origFileName
              createdOn
              updatedOn
              mimeType
              width
              height
              variants {
                origFileName
                quality
                height
                width
                s3Url
                error
                size
              }
            }
            alt
          }
          f_sku_values_3dr: skuValues {
            property {
              id
            }
            value {
              id
            }
          }
          id
        }
        subscriptionFrequency
        subscriptionInterval
        subscriptionTrial
      }
      userItemsCount
    }
  }
  site {
    commerce {
      id
      businessAddress {
        country
      }
      defaultCountry
      defaultCurrency
      quickCheckoutEnabled
    }
  }
}'
                        data-wf-page-link-href-prefix=""
                        className="w-commerce-commercecartwrapper c-cart-wrapper"
                        data-node-type="commerce-cart-wrapper"
                      >
                        <a
                          className="w-commerce-commercecartopenlink cart-icon-wrap w-inline-block"
                          role="button"
                          aria-haspopup="dialog"
                          aria-label="Open cart"
                          data-node-type="commerce-cart-open-link"
                          href="#"
                        >
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18fa_shopping-white.svg"
                            alt="a man riding a wave on top of a surfboard"
                            className="cart-icon"
                          />
                          <div
                            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                            className="w-commerce-commercecartopenlinkcount cart-quantity white"
                          >
                            0
                          </div>
                        </a>
                        <div
                          
                          className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal c-cart-wrapper"
                          data-node-type="commerce-cart-container-wrapper"
                        >
                          <div
                            data-node-type="commerce-cart-container"
                            role="dialog"
                            className="w-commerce-commercecartcontainer c-cart-container"
                          >
                            <div className="w-commerce-commercecartheader c-cart-header">
                              <h4 className="w-commerce-commercecartheading c-cart-header-title">
                                Your Cart
                              </h4>
                              <a
                                className="w-commerce-commercecartcloselink c-cart-close w-inline-block"
                                role="button"
                                aria-label="Close cart"
                                data-node-type="commerce-cart-close-link"
                              >
                                <svg
                                  className="c-cart-close-icon"
                                  width="16px"
                                  height="16px"
                                  viewBox="0 0 16 16"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <g fill-rule="nonzero" fill="#333333">
                                      <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
                                    </g>
                                  </g>
                                </svg>
                              </a>
                            </div>
                            <div className="w-commerce-commercecartformwrapper c-cart-form-wrapper">
                              <form
                                
                                className="w-commerce-commercecartform c-cart-default-state"
                                data-node-type="commerce-cart-form"
                              >
                                <script
                                  type="text/x-wf-template"
                                  id="wf-template-11c19aa8-38be-1f84-70ff-686e89d86dca"
                                >
                                  %3Cdiv%20class%3D%22w-commerce-commercecartitem%20c-cart-item%22%3E%3Cdiv%20class%3D%22c-cart-thumb-wrap%22%3E%3Cimg%20src%3D%22https%3A%2F%2Fcdn.prod.website-files.com%2Fplugins%2FBasic%2Fassets%2Fplaceholder.60f9b1840c.svg%22%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20c-cart-thumb%20w-dyn-bind-empty%22%2F%3E%3Cdiv%20data-wf-bindings%3D%22%255B%255D%22%20data-wf-conditions%3D%22%257B%2522condition%2522%253A%257B%2522fields%2522%253A%257B%2522product%253Adiscounts-text%2522%253A%257B%2522exists%2522%253A%2522yes%2522%252C%2522type%2522%253A%2522PlainText%2522%257D%257D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D%2522%257D%22%20class%3D%22offer-text-wrap%20small%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_discounts_text_9dr%2522%257D%257D%255D%22%20class%3D%22offer-text%20small%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22w-commerce-commercecartiteminfo%20c-cart-content-wrap%22%3E%3Cdiv%20class%3D%22c-cart-content-left%22%3E%3Cdiv%20class%3D%22c-cart-title-wrap%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartproductname%20c-cart-title%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22c-cart-option-wrap%22%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-11c19aa8-38be-1f84-70ff-686e89d86dd6%22%3E%253Cli%2520class%253D%2522c-cart-option%2522%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%253E%253C%252Fspan%253E%253Cspan%253E%253A%2520%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartoptionlist%20option-list%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-11c19aa8-38be-1f84-70ff-686e89d86dd6%22%3E%3Cli%20class%3D%22c-cart-option%22%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22c-cart-quantity-wrap%22%3E%3Cinput%20aria-label%3D%22Update%20quantity%22%20data-wf-bindings%3D%22%255B%257B%2522value%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%252C%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartquantity%20c-cart-quantity%22%20required%3D%22%22%20pattern%3D%22%5E%5B0-9%5D%2B%24%22%20inputMode%3D%22numeric%22%20type%3D%22number%22%20name%3D%22quantity%22%20autoComplete%3D%22off%22%20data-wf-cart-action%3D%22update-item-quantity%22%20data-commerce-sku-id%3D%22%22%20value%3D%221%22%2F%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22c-cart-price-wrap%20mobile-only%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.price%2522%257D%257D%255D%22%20class%3D%22c-cart-price%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22c-cart-remove-wrap%22%3E%3Ca%20href%3D%22%23%22%20role%3D%22button%22%20data-wf-bindings%3D%22%255B%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22c-cart-remove%20w-inline-block%22%20data-wf-cart-action%3D%22remove-item%22%20data-commerce-sku-id%3D%22%22%20aria-label%3D%22Remove%20item%20from%20cart%22%3E%3Cdiv%3ERemove%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22c-cart-content-right%22%3E%3Cdiv%20class%3D%22c-cart-price-wrap%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.price%2522%257D%257D%255D%22%20class%3D%22c-cart-price%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E
                                </script>
                                <div
                                  className="w-commerce-commercecartlist c-cart-list"
                                  data-wf-collection="database.commerceOrder.userItems"
                                  data-wf-template-id="wf-template-11c19aa8-38be-1f84-70ff-686e89d86dca"
                                >
                                  <div className="w-commerce-commercecartitem c-cart-item">
                                    <div className="c-cart-thumb-wrap">
                                      <img
                                        src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                                        data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D"
                                        alt=""
                                        className="w-commerce-commercecartitemimage c-cart-thumb w-dyn-bind-empty"
                                      />
                                      <div
                                        data-wf-bindings="%5B%5D"
                                        data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22product%3Adiscounts-text%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22PlainText%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D%22%7D"
                                        className="offer-text-wrap small"
                                      >
                                        <div
                                          data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_discounts_text_9dr%22%7D%7D%5D"
                                          className="offer-text small w-dyn-bind-empty"
                                        ></div>
                                      </div>
                                    </div>
                                    <div className="w-commerce-commercecartiteminfo c-cart-content-wrap">
                                      <div className="c-cart-content-left">
                                        <div className="c-cart-title-wrap">
                                          <div
                                            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D"
                                            className="w-commerce-commercecartproductname c-cart-title w-dyn-bind-empty"
                                          ></div>
                                        </div>
                                        <div className="c-cart-option-wrap">
                                          <script
                                            type="text/x-wf-template"
                                            id="wf-template-11c19aa8-38be-1f84-70ff-686e89d86dd6"
                                          >
                                            %3Cli%20class%3D%22c-cart-option%22%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%3E%3C%2Fspan%3E%3C%2Fli%3E
                                          </script>
                                          <ul
                                            data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D"
                                            className="w-commerce-commercecartoptionlist option-list"
                                            data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr"
                                            data-wf-template-id="wf-template-11c19aa8-38be-1f84-70ff-686e89d86dd6"
                                          >
                                            <li className="c-cart-option">
                                              <span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D"></span>
                                              <span>: </span>
                                              <span data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D"></span>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="c-cart-quantity-wrap">
                                          <input
                                            aria-label="Update quantity"
                                            data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                                            className="w-commerce-commercecartquantity c-cart-quantity"
                                            required
                                            pattern="^[0-9]+$"
                                            
                                            type="number"
                                            name="quantity"
                                            
                                            data-wf-cart-action="update-item-quantity"
                                            data-commerce-sku-id=""
                                            // value="1"
                                          />
                                        </div>
                                        <div className="c-cart-price-wrap mobile-only">
                                          <div
                                            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D"
                                            className="c-cart-price"
                                          >
                                            $ 0.00 USD
                                          </div>
                                        </div>
                                        <div className="c-cart-remove-wrap">
                                          <a
                                            href="#"
                                            role="button"
                                            data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
                                            className="c-cart-remove w-inline-block"
                                            data-wf-cart-action="remove-item"
                                            data-commerce-sku-id=""
                                            aria-label="Remove item from cart"
                                          >
                                            <div>Remove</div>
                                          </a>
                                        </div>
                                      </div>
                                      <div className="c-cart-content-right">
                                        <div className="c-cart-price-wrap">
                                          <div
                                            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D"
                                            className="c-cart-price"
                                          >
                                            $ 0.00 USD
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-commerce-commercecartfooter c-cart-footer-wrap">
                                  <div
                                    aria-live="polite"
                                    aria-atomic="true"
                                    className="w-commerce-commercecartlineitem c-cart-line-item"
                                  >
                                    <div className="c-cart-line-item-label">
                                      Subtotal
                                    </div>
                                    <div
                                      data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"
                                      className="w-commerce-commercecartordervalue c-cart-line-item-value"
                                    ></div>
                                  </div>
                                  <div className="c-cart-checkout-actions">
                                    <div
                                      data-node-type="commerce-cart-quick-checkout-actions"
                                    //   
                                      className="c-cart-checkout-payment"
                                    >
                                      <a
                                        role="button"
                                        aria-haspopup="dialog"
                                        aria-label="Apple Pay"
                                        data-node-type="commerce-cart-apple-pay-button"
                                    //     style="
                                    //   background-image: -webkit-named-image(
                                    //     apple-pay-logo-white
                                    //   );
                                    //   background-size: 100% 50%;
                                    //   background-position: 50% 50%;
                                    //   background-repeat: no-repeat;
                                    // "
                                        className="w-commerce-commercecartapplepaybutton c-cart-checkout-payment-apple"
                                        // 
                                      >
                                        <div></div>
                                      </a>
                                      <a
                                        role="button"
                                        
                                        aria-haspopup="dialog"
                                        data-node-type="commerce-cart-quick-checkout-button"
                                        // 
                                        className="w-commerce-commercecartquickcheckoutbutton c-cart-checkout-payment-apple"
                                      >
                                        <svg
                                          className="w-commerce-commercequickcheckoutgoogleicon"
                                          xmlns="http://www.w3.org/2000/svg"
                                        //   xmlns:xlink="http://www.w3.org/1999/xlink"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                        >
                                          <defs>
                                            <polygon
                                              id="google-mark-a"
                                              points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                                            ></polygon>
                                            <polygon
                                              id="google-mark-c"
                                              points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                                            ></polygon>
                                          </defs>
                                          <g fill="none" fill-rule="evenodd">
                                            <path
                                              fill="#4285F4"
                                              d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                                            ></path>
                                            <path
                                              fill="#34A853"
                                              d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                                            ></path>
                                            <g transform="translate(0 4)">
                                              <mask
                                                id="google-mark-b"
                                                fill="#fff"
                                              >
                                                {/* <use xlink:href="#google-mark-a"></use> */}
                                              </mask>
                                              <path
                                                fill="#FBBC04"
                                                d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                                mask="url(#google-mark-b)"
                                              ></path>
                                            </g>
                                            <mask
                                              id="google-mark-d"
                                              fill="#fff"
                                            >
                                              {/* <use xlink:href="#google-mark-c"></use> */}
                                            </mask>
                                            <path
                                              fill="#EA4335"
                                              d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                              mask="url(#google-mark-d)"
                                            ></path>
                                          </g>
                                        </svg>
                                        <svg
                                          className="w-commerce-commercequickcheckoutmicrosofticon"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                        >
                                          <g fill="none" fill-rule="evenodd">
                                            <polygon
                                              fill="#F05022"
                                              points="7 7 1 7 1 1 7 1"
                                            ></polygon>
                                            <polygon
                                              fill="#7DB902"
                                              points="15 7 9 7 9 1 15 1"
                                            ></polygon>
                                            <polygon
                                              fill="#00A4EE"
                                              points="7 15 1 15 1 9 7 9"
                                            ></polygon>
                                            <polygon
                                              fill="#FFB700"
                                              points="15 15 9 15 9 9 15 9"
                                            ></polygon>
                                          </g>
                                        </svg>
                                        <div>Pay with browser.</div>
                                      </a>
                                    </div>
                                    <a
                                      href="/checkout"
                                    //   value="Continue to Checkout"
                                      className="w-commerce-commercecartcheckoutbutton c-cart-checkout-button"
                                      data-loading-text="Hang Tight..."
                                      data-node-type="cart-checkout-button"
                                    >
                                      Continue to Checkout
                                    </a>
                                  </div>
                                </div>
                              </form>
                              <div className="w-commerce-commercecartemptystate c-cart-empty-state">
                                <div className="c-cart-empty-wrap">
                                  <div
                                    aria-label="This cart is empty"
                                    aria-live="polite"
                                  >
                                    No items found.
                                  </div>
                                </div>
                                <div className="c-cart-empty-btn-wrap">
                                  <a href="#" className="c-cart-empty-btn w-button">
                                    Shop Now
                                  </a>
                                </div>
                              </div>
                              <div
                                aria-live="assertive"
                                // 
                                data-node-type="commerce-cart-error"
                                className="w-commerce-commercecarterrorstate c-cart-error-state"
                              >
                                <div
                                  className="w-cart-error-msg"
                                  data-w-cart-quantity-error="Product is not available in this quantity."
                                  data-w-cart-general-error="Something went wrong when adding this item to the cart."
                                  data-w-cart-checkout-error="Checkout is disabled on this site."
                                  data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                                  data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates."
                                >
                                  Product is not available in this quantity.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="menu-bar-wrap">
                        <div className="menu-bar bar-1 white"></div>
                        <div className="menu-bar bar-2 white"></div>
                        <div className="menu-bar bar-3 white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="search-wrapper">
                <div className="section-spacing">
                  <div className="container">
                    <form action="/search" className="search-wrap w-form">
                      <input
                        className="search-input w-input"
                        // maxlength="256"
                        name="query"
                        placeholder="Search…"
                        type="search"
                        id="search"
                        required
                      />
                      <input
                        type="submit"
                        className="search-button w-button"
                        value="Search"
                      />
                    </form>
                  </div>
                </div>
                <div className="search-close">
                  <div className="search-close-icon w-embed">
                    <svg
                      width=" 100%"
                      height=" 100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9997 10.5857L16.9497 5.63574L18.3637 7.04974L13.4137 11.9997L18.3637 16.9497L16.9497 18.3637L11.9997 13.4137L7.04974 18.3637L5.63574 16.9497L10.5857 11.9997L5.63574 7.04974L7.04974 5.63574L11.9997 10.5857Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-wrapper">
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
                                  &quot;I’m impressed by the quality of work and
                                  the level”
                                </p>
                              </div>
                              <div className="hero-text-slide w-slide">
                                <p className="hero-text">
                                  &quot;Fast, simple, user-friendly, absolutely
                                  amazing!&quot;
                                </p>
                              </div>
                              <div className="hero-text-slide w-slide">
                                <p className="hero-text">
                                  &quot;Easy to use, fast checkout, excellent
                                  products!&quot;
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
                    // style="opacity: 0"
                    sizes="100vw"
                    data-w-id="0f5f68fa-7a02-3586-da0f-d7fe3912c6a3"
                    loading="eager"
                    
                  />
                  <img
                    className="hero-thumb lg"
                    src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1938_hero-bg-lg.jpg"
                    alt="hero-bg-lg"
                    // style="opacity: 0"
                    sizes="100vw"
                    data-w-id="0f5f68fa-7a02-3586-da0f-d7fe3912c6a4"
                    loading="eager"
                    
                  />
                  <img
                    className="hero-thumb xs"
                    src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f192c_hero-bg-md.jpg"
                    alt="a man wearing a white hat and a green jacket"
                    // style="opacity: 0"
                    sizes="100vw"
                    data-w-id="0f5f68fa-7a02-3586-da0f-d7fe3912c6a5"
                    loading="eager"
                    
                  />
                </div>
              </div>
            </div>
            <div id="best-seller" className="sellers-section">
              <div className="section-spacing">
                <div className="container">
                  <div className="common-title-wrap sellers-heading">
                    <h2 className="common-title">Best Sellers</h2>
                  </div>
                  <div
                    data-w-id="0f5f68fa-7a02-3586-da0f-d7fe3912c6ac"
                    // style="opacity: 0"
                    className="w-dyn-list"
                  >
                    <div role="list" className="sellers-layout w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="sellers-products">
                          <a
                            aria-label="product"
                            href="/product/sleeve-casual-shirts"
                            className="sellers-products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/6734587a2ca7616f46594374_670a813b3f067af3080ee968_seller-thumb-1.jpeg"
                              alt=""
                              loading="lazy"
                              className="sellers-products-thumb"
                            />
                            <div className="offer-text-wrap">
                              <div className="offer-text">30% Off</div>
                            </div>
                          </a>
                          <div className="sellers-products-content">
                            <div className="sellers-products-title-wrap">
                              <a
                                href="/product/sleeve-casual-shirts"
                                className="sellers-products-title"
                              >
                                Sleeve Casual Shirts
                              </a>
                            </div>
                            <div className="sellers-products-price-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="sellers-products-price"
                              >
                                $ 54.00 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="sellers-products">
                          <a
                            aria-label="product"
                            href="/product/sleeve-linen-shirt"
                            className="sellers-products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/6734587a2ca7616f46594371_670a82e07889a2e3d6809f1b_seller-thumb-6.jpeg"
                              alt=""
                              loading="lazy"
                              className="sellers-products-thumb"
                            />
                            <div className="offer-text-wrap">
                              <div className="offer-text">20% Off</div>
                            </div>
                          </a>
                          <div className="sellers-products-content">
                            <div className="sellers-products-title-wrap">
                              <a
                                href="/product/sleeve-linen-shirt"
                                className="sellers-products-title"
                              >
                                Sleeve Linen Shirt
                              </a>
                            </div>
                            <div className="sellers-products-price-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="sellers-products-price"
                              >
                                $ 56.70 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="sellers-products">
                          <a
                            aria-label="product"
                            href="/product/embroidered-sweatshirt"
                            className="sellers-products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/6734587a2ca7616f4659436e_670a8220ab9cd62ffa2e71ba_seller-thumb-2.jpeg"
                              alt=""
                              loading="lazy"
                              className="sellers-products-thumb"
                            />
                            <div className="offer-text-wrap w-condition-invisible">
                              <div className="offer-text w-dyn-bind-empty"></div>
                            </div>
                          </a>
                          <div className="sellers-products-content">
                            <div className="sellers-products-title-wrap">
                              <a
                                href="/product/embroidered-sweatshirt"
                                className="sellers-products-title"
                              >
                                Embroidered Sweatshirt
                              </a>
                            </div>
                            <div className="sellers-products-price-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="sellers-products-price"
                              >
                                $ 107.98 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="sellers-products">
                          <a
                            aria-label="product"
                            href="/product/abstract-print-t-shirt"
                            className="sellers-products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/6734587a2ca7616f46594366_66fbffbb037ebfe46a42e0b0_seller-thumb-7.jpeg"
                              alt=""
                              loading="lazy"
                              className="sellers-products-thumb"
                            />
                            <div className="offer-text-wrap w-condition-invisible">
                              <div className="offer-text w-dyn-bind-empty"></div>
                            </div>
                          </a>
                          <div className="sellers-products-content">
                            <div className="sellers-products-title-wrap">
                              <a
                                href="/product/abstract-print-t-shirt"
                                className="sellers-products-title"
                              >
                                Abstract Print T-shirt
                              </a>
                            </div>
                            <div className="sellers-products-price-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="sellers-products-price"
                              >
                                $ 946.98 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="sellers-products">
                          <a
                            aria-label="product"
                            href="/product/shirt-fashion-casual"
                            className="sellers-products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673458792ca7616f4659435f_670a8341bb067d45c2477762_seller-thumb-8.jpeg"
                              alt=""
                              loading="lazy"
                              className="sellers-products-thumb"
                            />
                            <div className="offer-text-wrap w-condition-invisible">
                              <div className="offer-text w-dyn-bind-empty"></div>
                            </div>
                          </a>
                          <div className="sellers-products-content">
                            <div className="sellers-products-title-wrap">
                              <a
                                href="/product/shirt-fashion-casual"
                                className="sellers-products-title"
                              >
                                Shirt Fashion Casual
                              </a>
                            </div>
                            <div className="sellers-products-price-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="sellers-products-price"
                              >
                                $ 890.98 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="sellers-products">
                          <a
                            aria-label="product"
                            href="/product/whisker-ripped-sweater"
                            className="sellers-products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673458792ca7616f46594358_670a82b97889a2e3d68087b6_seller-thumb-5.jpeg"
                              alt=""
                              loading="lazy"
                              className="sellers-products-thumb"
                            />
                            <div className="offer-text-wrap w-condition-invisible">
                              <div className="offer-text w-dyn-bind-empty"></div>
                            </div>
                          </a>
                          <div className="sellers-products-content">
                            <div className="sellers-products-title-wrap">
                              <a
                                href="/product/whisker-ripped-sweater"
                                className="sellers-products-title"
                              >
                                Whisker Ripped Sweater
                              </a>
                            </div>
                            <div className="sellers-products-price-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="sellers-products-price"
                              >
                                $ 882.98 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="sellers-products">
                          <a
                            aria-label="product"
                            href="/product/short-sleeved-shirts"
                            className="sellers-products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673458792ca7616f46594345_670a8257f18c07a2d813f924_seller-thumb-3.jpeg"
                              alt=""
                              loading="lazy"
                              className="sellers-products-thumb"
                            />
                            <div className="offer-text-wrap w-condition-invisible">
                              <div className="offer-text w-dyn-bind-empty"></div>
                            </div>
                          </a>
                          <div className="sellers-products-content">
                            <div className="sellers-products-title-wrap">
                              <a
                                href="/product/short-sleeved-shirts"
                                className="sellers-products-title"
                              >
                                Short-Sleeved Shirts
                              </a>
                            </div>
                            <div className="sellers-products-price-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="sellers-products-price"
                              >
                                $ 40.00 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="sellers-products">
                          <a
                            aria-label="product"
                            href="/product/obey-idris-shirt-jacket"
                            className="sellers-products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673458792ca7616f4659434a_670a828a31a658cd85cf386d_seller-thumb-4.jpeg"
                              alt=""
                              loading="lazy"
                              className="sellers-products-thumb"
                            />
                            <div className="offer-text-wrap w-condition-invisible">
                              <div className="offer-text w-dyn-bind-empty"></div>
                            </div>
                          </a>
                          <div className="sellers-products-content">
                            <div className="sellers-products-title-wrap">
                              <a
                                href="/product/obey-idris-shirt-jacket"
                                className="sellers-products-title"
                              >
                                Obey Idris Shirt Jacket
                              </a>
                            </div>
                            <div className="sellers-products-price-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="sellers-products-price"
                              >
                                $ 970.98 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                          We are passionate about modern &amp;stylish cloth. We
                          specialize in offering a curated selection of modern
                          &amp;stylish cloth that reflects elegance.
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
            <div className="brand-section">
              <div className="section-spacing">
                <div className="container">
                  <div className="brand-content">
                    <div className="brand-title-wrap">
                      <h2 className="brand-title">Trusted Partners</h2>
                    </div>
                    <div className="brand-text-wrap">
                      <p className="brand-text">
                        Explore our selection of top brands known for quality
                        &amp;style.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brand-marquee-wrap">
                <div className="brand-marquee">
                  <div className="brand-marquee-layout">
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187a_brand-1.svg"
                        alt="a white background with the word vit on it"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187b_brand-2.svg"
                        alt="the logo for the company elegard"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187c_brand-3.svg"
                        alt="a white background with the word nexa on it"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187d_brand-4.svg"
                        alt="the zesty logo on a white background"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187e_brand-5.svg"
                        alt="the logo for the company cozym"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187f_brand-6.svg"
                        alt="the logo for the energy company"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1880_brand-7.svg"
                        alt="the digin logo with the word digin on it"
                        className="brand-item-thumb"
                      />
                    </div>
                  </div>
                  <div className="brand-marquee-layout">
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187a_brand-1.svg"
                        alt="a white background with the word vit on it"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187b_brand-2.svg"
                        alt="the logo for the company elegard"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187c_brand-3.svg"
                        alt="a white background with the word nexa on it"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187d_brand-4.svg"
                        alt="the zesty logo on a white background"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187e_brand-5.svg"
                        alt="the logo for the company cozym"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187f_brand-6.svg"
                        alt="the logo for the energy company"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1880_brand-7.svg"
                        alt="the digin logo with the word digin on it"
                        className="brand-item-thumb"
                      />
                    </div>
                  </div>
                  <div className="brand-marquee-layout">
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187a_brand-1.svg"
                        alt="a white background with the word vit on it"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187b_brand-2.svg"
                        alt="the logo for the company elegard"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187c_brand-3.svg"
                        alt="a white background with the word nexa on it"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187d_brand-4.svg"
                        alt="the zesty logo on a white background"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187e_brand-5.svg"
                        alt="the logo for the company cozym"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f187f_brand-6.svg"
                        alt="the logo for the energy company"
                        className="brand-item-thumb"
                      />
                    </div>
                    <div className="brand-item">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1880_brand-7.svg"
                        alt="the digin logo with the word digin on it"
                        className="brand-item-thumb"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="categories-section">
              <div className="section-spacing">
                <div className="container">
                  <div className="common-title-wrap categories-heading">
                    <h2 className="common-title left">Our Categories</h2>
                  </div>
                  <div
                    data-delay="4000"
                    data-animation="slide"
                    className="categories-slider w-slider"
                    data-autoplay="false"
                    data-easing="ease"
                    data-hide-arrows="false"
                    data-disable-swipe="false"
                    data-autoplay-limit="0"
                    data-nav-spacing="3"
                    data-duration="500"
                    data-infinite="true"
                  >
                    <div className="categories-slider-mask w-slider-mask">
                      <div className="categories-slide w-slide">
                        <div className="cms-product-category w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div className="categories-products">
                                <a
                                  aria-label="category"
                                  href="/category/denim-jacket"
                                  className="categories-products-thumb-wrap w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673478282b3109d89ba11fec_categories-thumb-2.jpg"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 479px) 83vw, (max-width: 991px) 200px, 295px"
                                    srcset="
                                  https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673478282b3109d89ba11fec_categories-thumb-2-p-500.jpg 500w,
                                  https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673478282b3109d89ba11fec_categories-thumb-2.jpg       885w
                                "
                                    className="categories-products-thumb"
                                  />
                                </a>
                                <div className="categories-products-content">
                                  <div className="categories-products-title-wrap">
                                    <a
                                      href="/category/denim-jacket"
                                      className="categories-products-title"
                                    >
                                      Denim Jacket
                                    </a>
                                  </div>
                                  <a
                                    aria-label="categories"
                                    href="/category/denim-jacket"
                                    className="categories-products-icon-wrap w-inline-block"
                                  >
                                    <div className="categories-products-icon w-embed">
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M13.3372 7.845L6.16466 15.0175L4.98633 13.8392L12.158 6.66667H5.83716V5H15.0038V14.1667H13.3372V7.845Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="categories-slide w-slide">
                        <div className="cms-product-category w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div className="categories-products">
                                <a
                                  aria-label="category"
                                  href="/category/long-sleeve-shirt"
                                  className="categories-products-thumb-wrap w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/67347812092fa872b5769827_categories-thumb-1.jpg"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 479px) 83vw, (max-width: 991px) 200px, 295px"
                                    srcset="
                                  https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/67347812092fa872b5769827_categories-thumb-1-p-500.jpg 500w,
                                  https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/67347812092fa872b5769827_categories-thumb-1.jpg       885w
                                "
                                    className="categories-products-thumb"
                                  />
                                </a>
                                <div className="categories-products-content">
                                  <div className="categories-products-title-wrap">
                                    <a
                                      href="/category/long-sleeve-shirt"
                                      className="categories-products-title"
                                    >
                                      Long sleeve shirt
                                    </a>
                                  </div>
                                  <a
                                    aria-label="categories"
                                    href="/category/long-sleeve-shirt"
                                    className="categories-products-icon-wrap w-inline-block"
                                  >
                                    <div className="categories-products-icon w-embed">
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M13.3372 7.845L6.16466 15.0175L4.98633 13.8392L12.158 6.66667H5.83716V5H15.0038V14.1667H13.3372V7.845Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="categories-slide w-slide">
                        <div className="cms-product-category w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div className="categories-products">
                                <a
                                  aria-label="category"
                                  href="/category/motorcycle-jacket"
                                  className="categories-products-thumb-wrap w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673477ddc6388cc41c0a0ddc_categories-thumb-7.jpg"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 479px) 83vw, (max-width: 991px) 200px, 295px"
                                    srcset="
                                  https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673477ddc6388cc41c0a0ddc_categories-thumb-7-p-500.jpg 500w,
                                  https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673477ddc6388cc41c0a0ddc_categories-thumb-7.jpg       885w
                                "
                                    className="categories-products-thumb"
                                  />
                                </a>
                                <div className="categories-products-content">
                                  <div className="categories-products-title-wrap">
                                    <a
                                      href="/category/motorcycle-jacket"
                                      className="categories-products-title"
                                    >
                                      Motorcycle Jacket
                                    </a>
                                  </div>
                                  <a
                                    aria-label="categories"
                                    href="/category/motorcycle-jacket"
                                    className="categories-products-icon-wrap w-inline-block"
                                  >
                                    <div className="categories-products-icon w-embed">
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M13.3372 7.845L6.16466 15.0175L4.98633 13.8392L12.158 6.66667H5.83716V5H15.0038V14.1667H13.3372V7.845Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="categories-slide w-slide">
                        <div className="cms-product-category w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div className="categories-products">
                                <a
                                  aria-label="category"
                                  href="/category/sleeve-polo-shirt"
                                  className="categories-products-thumb-wrap w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673477cddc574ee71b453d57_categories-thumb-3.jpg"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 479px) 83vw, (max-width: 991px) 200px, 295px"
                                    srcset="
                                  https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673477cddc574ee71b453d57_categories-thumb-3-p-500.jpg 500w,
                                  https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673477cddc574ee71b453d57_categories-thumb-3.jpg       885w
                                "
                                    className="categories-products-thumb"
                                  />
                                </a>
                                <div className="categories-products-content">
                                  <div className="categories-products-title-wrap">
                                    <a
                                      href="/category/sleeve-polo-shirt"
                                      className="categories-products-title"
                                    >
                                      Sleeve polo shirt
                                    </a>
                                  </div>
                                  <a
                                    aria-label="categories"
                                    href="/category/sleeve-polo-shirt"
                                    className="categories-products-icon-wrap w-inline-block"
                                  >
                                    <div className="categories-products-icon w-embed">
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M13.3372 7.845L6.16466 15.0175L4.98633 13.8392L12.158 6.66667H5.83716V5H15.0038V14.1667H13.3372V7.845Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="categories-slide w-slide">
                        <div className="cms-product-category w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div className="categories-products">
                                <a
                                  aria-label="category"
                                  href="/category/american-style-hoodie"
                                  className="categories-products-thumb-wrap w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673477b5314142e73724673f_categories-thumb-12.jpg"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 479px) 83vw, (max-width: 991px) 200px, 295px"
                                    srcset="
                                  https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673477b5314142e73724673f_categories-thumb-12-p-500.jpg 500w,
                                  https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673477b5314142e73724673f_categories-thumb-12.jpg       885w
                                "
                                    className="categories-products-thumb"
                                  />
                                </a>
                                <div className="categories-products-content">
                                  <div className="categories-products-title-wrap">
                                    <a
                                      href="/category/american-style-hoodie"
                                      className="categories-products-title"
                                    >
                                      American Style Hoodie
                                    </a>
                                  </div>
                                  <a
                                    aria-label="categories"
                                    href="/category/american-style-hoodie"
                                    className="categories-products-icon-wrap w-inline-block"
                                  >
                                    <div className="categories-products-icon w-embed">
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M13.3372 7.845L6.16466 15.0175L4.98633 13.8392L12.158 6.66667H5.83716V5H15.0038V14.1667H13.3372V7.845Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="categories-slide w-slide">
                        <div className="cms-product-category w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div className="categories-products">
                                <a
                                  aria-label="category"
                                  href="/category/baseball-jacket"
                                  className="categories-products-thumb-wrap w-inline-block"
                                >
                                  <img
                                    src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673477aa6fbfb23cbfefd2ba_categories-thumb-8.jpg"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 479px) 83vw, (max-width: 991px) 200px, 295px"
                                    srcset="
                                  https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673477aa6fbfb23cbfefd2ba_categories-thumb-8-p-500.jpg 500w,
                                  https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673477aa6fbfb23cbfefd2ba_categories-thumb-8.jpg       885w
                                "
                                    className="categories-products-thumb"
                                  />
                                </a>
                                <div className="categories-products-content">
                                  <div className="categories-products-title-wrap">
                                    <a
                                      href="/category/baseball-jacket"
                                      className="categories-products-title"
                                    >
                                      Baseball Jacket
                                    </a>
                                  </div>
                                  <a
                                    aria-label="categories"
                                    href="/category/baseball-jacket"
                                    className="categories-products-icon-wrap w-inline-block"
                                  >
                                    <div className="categories-products-icon w-embed">
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M13.3372 7.845L6.16466 15.0175L4.98633 13.8392L12.158 6.66667H5.83716V5H15.0038V14.1667H13.3372V7.845Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="categories-slider-arrow-left w-slider-arrow-left">
                      <div className="categories-slider-arrow-icon w-embed">
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="categories-slider-arrow-right w-slider-arrow-right">
                      <div className="categories-slider-arrow-icon w-embed">
                        <svg
                          width=" 100%"
                          height=" 100%"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16699 9.99984H15.8337M15.8337 9.99984L10.0003 4.1665M15.8337 9.99984L10.0003 15.8332"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="cateogry-slider-nav w-slider-nav w-round w-num"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="explore-section">
              <div className="section-spacing">
                <div className="container">
                  <div className="common-title-wrap explore-heading">
                    <h2 className="common-title left">
                      Explore our offer collections
                    </h2>
                  </div>
                  <div
                    data-delay="4000"
                    data-animation="slide"
                    className="explore-slider w-slider"
                    data-autoplay="false"
                    data-easing="ease"
                    data-hide-arrows="false"
                    data-disable-swipe="false"
                    data-autoplay-limit="0"
                    data-nav-spacing="3"
                    data-duration="500"
                    data-infinite="true"
                  >
                    <div className="explore-slider-mask w-slider-mask">
                      <div className="explore-slide w-slide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div className="explore-products">
                                <a
                                  href="/collections/fall-collection-for-women"
                                  className="explore-products-thumb-wrap w-inline-block"
                                >
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/6734580c9b813944eb315567_670fb837572595c3bf42f2a4_collection-4.jpeg"
                                    alt=""
                                    className="explore-products-thumb"
                                  />
                                  <div className="offer-text-wrap">
                                    <div className="offer-text">35% Off</div>
                                  </div>
                                </a>
                                <div className="explore-products-content-wrap">
                                  <div className="explore-products-content">
                                    <div className="explore-products-title-wrap">
                                      <a
                                        href="/collections/fall-collection-for-women"
                                        className="explore-products-title"
                                      >
                                        Fall collection for women
                                      </a>
                                    </div>
                                    <div className="explore-products-text-wrap">
                                      <p className="explore-products-text">96</p>
                                      <p className="explore-products-text">Items</p>
                                    </div>
                                  </div>
                                  <div className="explore-products-btn-wrap">
                                    <a
                                      href="/collections/fall-collection-for-women"
                                      className="btn-wrap-2 explore-btn w-inline-block"
                                    >
                                      <div className="btn-inner-2">
                                        <div>Explore All</div>
                                        <div className="btn-icon-wrap">
                                          <div className="btn-icon-2 w-embed">
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
                                          <div className="btn-icon-2 w-embed">
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
                                      <div className="btn-shape-2"></div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="explore-slide w-slide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div className="explore-products">
                                <a
                                  href="/collections/summer-special-collection-for-women"
                                  className="explore-products-thumb-wrap w-inline-block"
                                >
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/6734580c3dd434a47f2f514d_670fa50b9c497307800e5988_collection-1.jpeg"
                                    alt=""
                                    className="explore-products-thumb"
                                  />
                                  <div className="offer-text-wrap">
                                    <div className="offer-text">20% Off</div>
                                  </div>
                                </a>
                                <div className="explore-products-content-wrap">
                                  <div className="explore-products-content">
                                    <div className="explore-products-title-wrap">
                                      <a
                                        href="/collections/summer-special-collection-for-women"
                                        className="explore-products-title"
                                      >
                                        Summer special collection for women
                                      </a>
                                    </div>
                                    <div className="explore-products-text-wrap">
                                      <p className="explore-products-text">120</p>
                                      <p className="explore-products-text">Items</p>
                                    </div>
                                  </div>
                                  <div className="explore-products-btn-wrap">
                                    <a
                                      href="/collections/summer-special-collection-for-women"
                                      className="btn-wrap-2 explore-btn w-inline-block"
                                    >
                                      <div className="btn-inner-2">
                                        <div>Explore All</div>
                                        <div className="btn-icon-wrap">
                                          <div className="btn-icon-2 w-embed">
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
                                          <div className="btn-icon-2 w-embed">
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
                                      <div className="btn-shape-2"></div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="explore-slide w-slide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div className="explore-products">
                                <a
                                  href="/collections/winter-special-collection-for-man"
                                  className="explore-products-thumb-wrap w-inline-block"
                                >
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/6734580c7e01c7d83ad42b75_670fb2599cfe94e7e7fbf87c_collection-2.jpeg"
                                    alt=""
                                    className="explore-products-thumb"
                                  />
                                  <div className="offer-text-wrap">
                                    <div className="offer-text">25% Off</div>
                                  </div>
                                </a>
                                <div className="explore-products-content-wrap">
                                  <div className="explore-products-content">
                                    <div className="explore-products-title-wrap">
                                      <a
                                        href="/collections/winter-special-collection-for-man"
                                        className="explore-products-title"
                                      >
                                        Winter special collection for man
                                      </a>
                                    </div>
                                    <div className="explore-products-text-wrap">
                                      <p className="explore-products-text">40</p>
                                      <p className="explore-products-text">Items</p>
                                    </div>
                                  </div>
                                  <div className="explore-products-btn-wrap">
                                    <a
                                      href="/collections/winter-special-collection-for-man"
                                      className="btn-wrap-2 explore-btn w-inline-block"
                                    >
                                      <div className="btn-inner-2">
                                        <div>Explore All</div>
                                        <div className="btn-icon-wrap">
                                          <div className="btn-icon-2 w-embed">
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
                                          <div className="btn-icon-2 w-embed">
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
                                      <div className="btn-shape-2"></div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="explore-slide w-slide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div className="explore-products">
                                <a
                                  href="/collections/summer-collection-for-women"
                                  className="explore-products-thumb-wrap w-inline-block"
                                >
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/6734580c614e9ede23fb9970_670fb86fa6d9d2e9486713f3_collection-5.jpeg"
                                    alt=""
                                    className="explore-products-thumb"
                                  />
                                  <div className="offer-text-wrap">
                                    <div className="offer-text">30% Off</div>
                                  </div>
                                </a>
                                <div className="explore-products-content-wrap">
                                  <div className="explore-products-content">
                                    <div className="explore-products-title-wrap">
                                      <a
                                        href="/collections/summer-collection-for-women"
                                        className="explore-products-title"
                                      >
                                        Summer collection for women
                                      </a>
                                    </div>
                                    <div className="explore-products-text-wrap">
                                      <p className="explore-products-text">72</p>
                                      <p className="explore-products-text">Items</p>
                                    </div>
                                  </div>
                                  <div className="explore-products-btn-wrap">
                                    <a
                                      href="/collections/summer-collection-for-women"
                                      className="btn-wrap-2 explore-btn w-inline-block"
                                    >
                                      <div className="btn-inner-2">
                                        <div>Explore All</div>
                                        <div className="btn-icon-wrap">
                                          <div className="btn-icon-2 w-embed">
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
                                          <div className="btn-icon-2 w-embed">
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
                                      <div className="btn-shape-2"></div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="explore-slide w-slide">
                        <div className="w-dyn-list">
                          <div role="list" className="w-dyn-items">
                            <div role="listitem" className="w-dyn-item">
                              <div className="explore-products">
                                <a
                                  href="/collections/special-collection-for-kids"
                                  className="explore-products-thumb-wrap w-inline-block"
                                >
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/6734580c48bb0681d78af840_670fb285020e2e65058cbf74_collection-3.jpeg"
                                    alt=""
                                    className="explore-products-thumb"
                                  />
                                  <div className="offer-text-wrap">
                                    <div className="offer-text">15% Off</div>
                                  </div>
                                </a>
                                <div className="explore-products-content-wrap">
                                  <div className="explore-products-content">
                                    <div className="explore-products-title-wrap">
                                      <a
                                        href="/collections/special-collection-for-kids"
                                        className="explore-products-title"
                                      >
                                        Special collection for Kids
                                      </a>
                                    </div>
                                    <div className="explore-products-text-wrap">
                                      <p className="explore-products-text">84</p>
                                      <p className="explore-products-text">Items</p>
                                    </div>
                                  </div>
                                  <div className="explore-products-btn-wrap">
                                    <a
                                      href="/collections/special-collection-for-kids"
                                      className="btn-wrap-2 explore-btn w-inline-block"
                                    >
                                      <div className="btn-inner-2">
                                        <div>Explore All</div>
                                        <div className="btn-icon-wrap">
                                          <div className="btn-icon-2 w-embed">
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
                                          <div className="btn-icon-2 w-embed">
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
                                      <div className="btn-shape-2"></div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="explore-slider-arrow-left w-slider-arrow-left">
                      <div className="explore-slider-arrow-icon w-embed">
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="explore-slider-arrow-right w-slider-arrow-right">
                      <div className="explore-slider-arrow-icon w-embed">
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="slide-nav-4 w-slider-nav w-round w-num"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-section">
              <div className="section-spacing">
                <div className="container">
                  <div className="common-title-wrap sellers-heading">
                    <h2 className="common-title">Latest Products</h2>
                  </div>
                  <div
                    data-w-id="0f5f68fa-7a02-3586-da0f-d7fe3912c771"
                    // style="opacity: 0"
                    className="w-dyn-list"
                  >
                    <div role="list" className="products-layout-2 w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="products">
                          <a
                            aria-label="product"
                            href="/product/denim-shorts"
                            className="products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/6734587a2ca7616f46594382_670a845daedd0923db095293_products-thumb-6.jpeg"
                              alt=""
                              loading="lazy"
                              className="products-thumb"
                            />
                            <div className="offer-text-wrap">
                              <div className="offer-text">30% Off</div>
                            </div>
                          </a>
                          <div className="products-content">
                            <div className="products-title-wrap">
                              <a
                                href="/product/denim-shorts"
                                className="products-title"
                              >
                                Denim Shorts
                              </a>
                            </div>
                            <div className="products-text-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="products-text"
                              >
                                $ 335.98 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="products">
                          <a
                            aria-label="product"
                            href="/product/whisker-ripped-sweater"
                            className="products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673458792ca7616f46594358_670a82b97889a2e3d68087b6_seller-thumb-5.jpeg"
                              alt=""
                              loading="lazy"
                              className="products-thumb"
                            />
                            <div className="offer-text-wrap w-condition-invisible">
                              <div className="offer-text w-dyn-bind-empty"></div>
                            </div>
                          </a>
                          <div className="products-content">
                            <div className="products-title-wrap">
                              <a
                                href="/product/whisker-ripped-sweater"
                                className="products-title"
                              >
                                Whisker Ripped Sweater
                              </a>
                            </div>
                            <div className="products-text-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="products-text"
                              >
                                $ 882.98 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="products">
                          <a
                            aria-label="product"
                            href="/product/long-sleeve-shirt"
                            className="products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/6734587a2ca7616f4659438d_670a8491a5ed872f8014c44a_products-thumb-7.jpeg"
                              alt=""
                              loading="lazy"
                              className="products-thumb"
                            />
                            <div className="offer-text-wrap">
                              <div className="offer-text">35% Off</div>
                            </div>
                          </a>
                          <div className="products-content">
                            <div className="products-title-wrap">
                              <a
                                href="/product/long-sleeve-shirt"
                                className="products-title"
                              >
                                Long Sleeve Shirt
                              </a>
                            </div>
                            <div className="products-text-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="products-text"
                              >
                                $ 714.98 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="products">
                          <a
                            aria-label="product"
                            href="/product/short-sleeved-shirts"
                            className="products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673458792ca7616f46594345_670a8257f18c07a2d813f924_seller-thumb-3.jpeg"
                              alt=""
                              loading="lazy"
                              className="products-thumb"
                            />
                            <div className="offer-text-wrap w-condition-invisible">
                              <div className="offer-text w-dyn-bind-empty"></div>
                            </div>
                          </a>
                          <div className="products-content">
                            <div className="products-title-wrap">
                              <a
                                href="/product/short-sleeved-shirts"
                                className="products-title"
                              >
                                Short-Sleeved Shirts
                              </a>
                            </div>
                            <div className="products-text-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="products-text"
                              >
                                $ 40.00 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="products">
                          <a
                            aria-label="product"
                            href="/product/sleeve-summer-shirt"
                            className="products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673458792ca7616f4659435c_670a84331b09b4d3570fe181_products-thumb-5.jpeg"
                              alt=""
                              loading="lazy"
                              className="products-thumb"
                            />
                            <div className="offer-text-wrap w-condition-invisible">
                              <div className="offer-text w-dyn-bind-empty"></div>
                            </div>
                          </a>
                          <div className="products-content">
                            <div className="products-title-wrap">
                              <a
                                href="/product/sleeve-summer-shirt"
                                className="products-title"
                              >
                                Sleeve Summer Shirt
                              </a>
                            </div>
                            <div className="products-text-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="products-text"
                              >
                                $ 36.30 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="products">
                          <a
                            aria-label="product"
                            href="/product/obey-idris-shirt-jacket"
                            className="products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673458792ca7616f4659434a_670a828a31a658cd85cf386d_seller-thumb-4.jpeg"
                              alt=""
                              loading="lazy"
                              className="products-thumb"
                            />
                            <div className="offer-text-wrap w-condition-invisible">
                              <div className="offer-text w-dyn-bind-empty"></div>
                            </div>
                          </a>
                          <div className="products-content">
                            <div className="products-title-wrap">
                              <a
                                href="/product/obey-idris-shirt-jacket"
                                className="products-title"
                              >
                                Obey Idris Shirt Jacket
                              </a>
                            </div>
                            <div className="products-text-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="products-text"
                              >
                                $ 970.98 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="products">
                          <a
                            aria-label="product"
                            href="/product/casual-cuban-shirts"
                            className="products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673458792ca7616f46594355_670a8401d43d7adda2c7e7e7_products-thumb-4.jpeg"
                              alt=""
                              loading="lazy"
                              className="products-thumb"
                            />
                            <div className="offer-text-wrap">
                              <div className="offer-text">35% Off</div>
                            </div>
                          </a>
                          <div className="products-content">
                            <div className="products-title-wrap">
                              <a
                                href="/product/casual-cuban-shirts"
                                className="products-title"
                              >
                                Casual Cuban Shirts
                              </a>
                            </div>
                            <div className="products-text-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="products-text"
                              >
                                $ 23.70 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="products">
                          <a
                            aria-label="product"
                            href="/product/neon-water-shirts"
                            className="products-thumb-wrap w-inline-block"
                          >
                            <img
                              data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                              src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673458792ca7616f4659433c_670aa5067c77f6a160740630_products-thumb-14.jpeg"
                              alt=""
                              loading="lazy"
                              className="products-thumb"
                            />
                            <div className="offer-text-wrap">
                              <div className="offer-text">25% Off</div>
                            </div>
                          </a>
                          <div className="products-content">
                            <div className="products-title-wrap">
                              <a
                                href="/product/neon-water-shirts"
                                className="products-title"
                              >
                                Letter Graffiti Hoodie
                              </a>
                            </div>
                            <div className="products-text-wrap">
                              <p
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                className="products-text"
                              >
                                $ 56.70 USD
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="products-btn-wrap">
                    <a
                      href="/products"
                      className="btn-wrap-2 products-btn w-inline-block"
                    >
                      <div className="btn-inner-2">
                        <div>Explore All</div>
                        <div className="btn-icon-wrap">
                          <div className="btn-icon-2 w-embed">
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
                          <div className="btn-icon-2 w-embed">
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
                      <div className="btn-shape-2"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                              srcset="
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
                                &quot;I was blown away by the quality of
                                products from Zinzira. Every detail exceeded my
                                expectations, and the customer service was
                                top-notch. I highly recommend them to anyone
                                looking for reliability and style.&quot;
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
                              srcset="
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a7_clients-thumb-2-p-500.jpg  500w,
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a7_clients-thumb-2-p-800.jpg  800w,
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a7_clients-thumb-2.jpg       1190w
                          "
                              alt="The contents of a women&#x27;s clothing laid out on a table."
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
                                &quot;Zinzira has become my go-to for online
                                shopping. They consistently offer amazing
                                products, and their customer support is always
                                there when I need it. Shopping has never been
                                this convenient.&quot;
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
                              srcset="
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
                                &quot;The variety of products Zinzira offers is
                                incredible, and their prices are unbeatable.
                                I’ve found everything I need in one place, and
                                the quality always impresses me. Highly
                                recommend!&quot;
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
                                <p className="clients-info-text">
                                  Product Designer
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
                              srcset="
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
                                &quot;I had a minor issue with my order, but
                                Zinzira’s customer service team went above and
                                beyond to resolve it quickly. Their commitment
                                to customer satisfaction is evident. I’ll
                                continue shopping sure!&quot;
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
                              srcset="
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
                                &quot;The design and functionality of the
                                Zinzira website make shopping a breeze. The ease
                                of navigation and the detailed product
                                descriptions make the experience truly
                                enjoyable. Definitely a 5-star platform!&quot;
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="slide-nav w-slider-nav w-round w-num"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="support-section">
              <div className="section-spacing">
                <div className="container">
                  <div className="support-layout">
                    <div className="support-box">
                      <div className="support-box-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1890_support-icon-1.svg"
                          alt="a black and white icon of a box with an arrow"
                          className="support-box-icon"
                        />
                      </div>
                      <div className="support-box-title-wrap">
                        <h2 className="support-box-title">Free Shipping</h2>
                      </div>
                      <div className="support-box-text-wrap">
                        <p className="support-box-text">
                          You will love at great low prices
                        </p>
                      </div>
                    </div>
                    <div className="support-box">
                      <div className="support-box-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f188f_support-icon-2.svg"
                          alt="a black and white picture of a credit card"
                          className="support-box-icon"
                        />
                      </div>
                      <div className="support-box-title-wrap">
                        <h2 className="support-box-title">Flexible Payment</h2>
                      </div>
                      <div className="support-box-text-wrap">
                        <p className="support-box-text">
                          Pay with Multiple Credit Cards
                        </p>
                      </div>
                    </div>
                    <div className="support-box">
                      <div className="support-box-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f188d_support-icon-3.svg"
                          alt="a black and white icon of a truck"
                          className="support-box-icon"
                        />
                      </div>
                      <div className="support-box-title-wrap">
                        <h2 className="support-box-title">Fast Delivery</h2>
                      </div>
                      <div className="support-box-text-wrap">
                        <p className="support-box-text">
                          Experience the joy of fast shipping
                        </p>
                      </div>
                    </div>
                    <div className="support-box">
                      <div className="support-box-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f188e_support-icon-4.svg"
                          alt="a black and white icon of a headset"
                          className="support-box-icon"
                        />
                      </div>
                      <div className="support-box-title-wrap">
                        <h2 className="support-box-title">Premium Support</h2>
                      </div>
                      <div className="support-box-text-wrap">
                        <p className="support-box-text">
                          Outstanding premium support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-section">
              <div className="section-spacing">
                <div className="container">
                  <div className="common-title-wrap blog-heading">
                    <h2 className="common-title">Latest Articles</h2>
                  </div>
                  <div
                    data-w-id="76ad65f2-2bce-f313-56ad-38789d5805ce"
                    className="blog-cms-wrapper"
                  >
                    <div className="w-dyn-list">
                      <div role="list" className="blog-layout w-dyn-items">
                        <div role="listitem" className="w-dyn-item">
                          <div
                            data-w-id="76ad65f2-2bce-f313-56ad-38789d5805d2"
                            className="blog-box"
                          >
                            <a
                              href="/blogs/using-email-marketing-to-boost-ecommerce-conversions"
                              className="blog-box-thumb-wrap w-inline-block"
                            >
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673457e93dd434a47f2f3e0a_66fb971a287f029060e916d7_blog-thumb-9.jpeg"
                                alt=""
                                className="blog-box-thumb"
                              />
                            </a>
                            <div className="blog-box-content">
                              <a
                                aria-label="blog"
                                href="/blogs/using-email-marketing-to-boost-ecommerce-conversions"
                                className="blog-box-title-wrap w-inline-block"
                              >
                                <h2 className="blog-box-title">
                                  Using email marketing to boost eCommerce
                                  conversions
                                </h2>
                              </a>
                              <div className="blog-box-info-wrap">
                                <div className="blog-box-date-wrap">
                                  <div className="blog-box-date-icon-wrap">
                                    <div className="blog-box-date-icon w-embed">
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.333 2.50033H13.9997C14.1765 2.50033 14.3461 2.57056 14.4711 2.69559C14.5961 2.82061 14.6663 2.99018 14.6663 3.16699V13.8337C14.6663 14.0105 14.5961 14.18 14.4711 14.3051C14.3461 14.4301 14.1765 14.5003 13.9997 14.5003H1.99967C1.82286 14.5003 1.65329 14.4301 1.52827 14.3051C1.40325 14.18 1.33301 14.0105 1.33301 13.8337V3.16699C1.33301 2.99018 1.40325 2.82061 1.52827 2.69559C1.65329 2.57056 1.82286 2.50033 1.99967 2.50033H4.66634V1.16699H5.99967V2.50033H9.99967V1.16699H11.333V2.50033ZM13.333 7.83366H2.66634V13.167H13.333V7.83366ZM9.99967 3.83366H5.99967V5.16699H4.66634V3.83366H2.66634V6.50033H13.333V3.83366H11.333V5.16699H9.99967V3.83366ZM3.99967 9.16699H5.33301V10.5003H3.99967V9.16699ZM7.33301 9.16699H8.66634V10.5003H7.33301V9.16699ZM10.6663 9.16699H11.9997V10.5003H10.6663V9.16699Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="blog-box-date-text-wrap">
                                    <p className="blog-box-date-text">
                                      November 13, 2024
                                    </p>
                                  </div>
                                </div>
                                <div className="blog-box-time-wrap">
                                  <div className="blog-box-time-icon-wrap">
                                    <div className="blog-box-time-icon w-embed">
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.99967 15.1663C4.31767 15.1663 1.33301 12.1817 1.33301 8.49967C1.33301 4.81767 4.31767 1.83301 7.99967 1.83301C11.6817 1.83301 14.6663 4.81767 14.6663 8.49967C14.6663 12.1817 11.6817 15.1663 7.99967 15.1663ZM7.99967 13.833C9.41416 13.833 10.7707 13.2711 11.7709 12.2709C12.7711 11.2707 13.333 9.91416 13.333 8.49967C13.333 7.08519 12.7711 5.72863 11.7709 4.72844C10.7707 3.72824 9.41416 3.16634 7.99967 3.16634C6.58519 3.16634 5.22863 3.72824 4.22844 4.72844C3.22824 5.72863 2.66634 7.08519 2.66634 8.49967C2.66634 9.91416 3.22824 11.2707 4.22844 12.2709C5.22863 13.2711 6.58519 13.833 7.99967 13.833ZM8.66634 8.49967H11.333V9.83301H7.33301V5.16634H8.66634V8.49967Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="blog-box-time-text-wrap">
                                    <p className="blog-box-time-text">6 min read</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <div
                            data-w-id="76ad65f2-2bce-f313-56ad-38789d5805d2"
                            className="blog-box"
                          >
                            <a
                              href="/blogs/the-role-of-ai-in-transforming-ecommerce"
                              className="blog-box-thumb-wrap w-inline-block"
                            >
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673457e95d5d6320059cfb0d_66fb96ff4bcf4a9532281b9c_blog-thumb-8.jpeg"
                                alt=""
                                className="blog-box-thumb"
                              />
                            </a>
                            <div className="blog-box-content">
                              <a
                                aria-label="blog"
                                href="/blogs/the-role-of-ai-in-transforming-ecommerce"
                                className="blog-box-title-wrap w-inline-block"
                              >
                                <h2 className="blog-box-title">
                                  The role of AI in transforming eCommerce
                                </h2>
                              </a>
                              <div className="blog-box-info-wrap">
                                <div className="blog-box-date-wrap">
                                  <div className="blog-box-date-icon-wrap">
                                    <div className="blog-box-date-icon w-embed">
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.333 2.50033H13.9997C14.1765 2.50033 14.3461 2.57056 14.4711 2.69559C14.5961 2.82061 14.6663 2.99018 14.6663 3.16699V13.8337C14.6663 14.0105 14.5961 14.18 14.4711 14.3051C14.3461 14.4301 14.1765 14.5003 13.9997 14.5003H1.99967C1.82286 14.5003 1.65329 14.4301 1.52827 14.3051C1.40325 14.18 1.33301 14.0105 1.33301 13.8337V3.16699C1.33301 2.99018 1.40325 2.82061 1.52827 2.69559C1.65329 2.57056 1.82286 2.50033 1.99967 2.50033H4.66634V1.16699H5.99967V2.50033H9.99967V1.16699H11.333V2.50033ZM13.333 7.83366H2.66634V13.167H13.333V7.83366ZM9.99967 3.83366H5.99967V5.16699H4.66634V3.83366H2.66634V6.50033H13.333V3.83366H11.333V5.16699H9.99967V3.83366ZM3.99967 9.16699H5.33301V10.5003H3.99967V9.16699ZM7.33301 9.16699H8.66634V10.5003H7.33301V9.16699ZM10.6663 9.16699H11.9997V10.5003H10.6663V9.16699Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="blog-box-date-text-wrap">
                                    <p className="blog-box-date-text">
                                      November 13, 2024
                                    </p>
                                  </div>
                                </div>
                                <div className="blog-box-time-wrap">
                                  <div className="blog-box-time-icon-wrap">
                                    <div className="blog-box-time-icon w-embed">
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.99967 15.1663C4.31767 15.1663 1.33301 12.1817 1.33301 8.49967C1.33301 4.81767 4.31767 1.83301 7.99967 1.83301C11.6817 1.83301 14.6663 4.81767 14.6663 8.49967C14.6663 12.1817 11.6817 15.1663 7.99967 15.1663ZM7.99967 13.833C9.41416 13.833 10.7707 13.2711 11.7709 12.2709C12.7711 11.2707 13.333 9.91416 13.333 8.49967C13.333 7.08519 12.7711 5.72863 11.7709 4.72844C10.7707 3.72824 9.41416 3.16634 7.99967 3.16634C6.58519 3.16634 5.22863 3.72824 4.22844 4.72844C3.22824 5.72863 2.66634 7.08519 2.66634 8.49967C2.66634 9.91416 3.22824 11.2707 4.22844 12.2709C5.22863 13.2711 6.58519 13.833 7.99967 13.833ZM8.66634 8.49967H11.333V9.83301H7.33301V5.16634H8.66634V8.49967Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="blog-box-time-text-wrap">
                                    <p className="blog-box-time-text">9 min read</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div role="listitem" className="w-dyn-item">
                          <div
                            data-w-id="76ad65f2-2bce-f313-56ad-38789d5805d2"
                            className="blog-box"
                          >
                            <a
                              href="/blogs/how-to-leverage-social-media-for-ecommerce-success"
                              className="blog-box-thumb-wrap w-inline-block"
                            >
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/673456a62c11f0880874b3e2/673457e9cc5e3033153eff7d_66fb96e45a691bd128a358b7_blog-thumb-7.jpeg"
                                alt=""
                                className="blog-box-thumb"
                              />
                            </a>
                            <div className="blog-box-content">
                              <a
                                aria-label="blog"
                                href="/blogs/how-to-leverage-social-media-for-ecommerce-success"
                                className="blog-box-title-wrap w-inline-block"
                              >
                                <h2 className="blog-box-title">
                                  How to leverage social media for eCommerce
                                  success
                                </h2>
                              </a>
                              <div className="blog-box-info-wrap">
                                <div className="blog-box-date-wrap">
                                  <div className="blog-box-date-icon-wrap">
                                    <div className="blog-box-date-icon w-embed">
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.333 2.50033H13.9997C14.1765 2.50033 14.3461 2.57056 14.4711 2.69559C14.5961 2.82061 14.6663 2.99018 14.6663 3.16699V13.8337C14.6663 14.0105 14.5961 14.18 14.4711 14.3051C14.3461 14.4301 14.1765 14.5003 13.9997 14.5003H1.99967C1.82286 14.5003 1.65329 14.4301 1.52827 14.3051C1.40325 14.18 1.33301 14.0105 1.33301 13.8337V3.16699C1.33301 2.99018 1.40325 2.82061 1.52827 2.69559C1.65329 2.57056 1.82286 2.50033 1.99967 2.50033H4.66634V1.16699H5.99967V2.50033H9.99967V1.16699H11.333V2.50033ZM13.333 7.83366H2.66634V13.167H13.333V7.83366ZM9.99967 3.83366H5.99967V5.16699H4.66634V3.83366H2.66634V6.50033H13.333V3.83366H11.333V5.16699H9.99967V3.83366ZM3.99967 9.16699H5.33301V10.5003H3.99967V9.16699ZM7.33301 9.16699H8.66634V10.5003H7.33301V9.16699ZM10.6663 9.16699H11.9997V10.5003H10.6663V9.16699Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="blog-box-date-text-wrap">
                                    <p className="blog-box-date-text">
                                      November 13, 2024
                                    </p>
                                  </div>
                                </div>
                                <div className="blog-box-time-wrap">
                                  <div className="blog-box-time-icon-wrap">
                                    <div className="blog-box-time-icon w-embed">
                                      <svg
                                        width=" 100%"
                                        height=" 100%"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.99967 15.1663C4.31767 15.1663 1.33301 12.1817 1.33301 8.49967C1.33301 4.81767 4.31767 1.83301 7.99967 1.83301C11.6817 1.83301 14.6663 4.81767 14.6663 8.49967C14.6663 12.1817 11.6817 15.1663 7.99967 15.1663ZM7.99967 13.833C9.41416 13.833 10.7707 13.2711 11.7709 12.2709C12.7711 11.2707 13.333 9.91416 13.333 8.49967C13.333 7.08519 12.7711 5.72863 11.7709 4.72844C10.7707 3.72824 9.41416 3.16634 7.99967 3.16634C6.58519 3.16634 5.22863 3.72824 4.22844 4.72844C3.22824 5.72863 2.66634 7.08519 2.66634 8.49967C2.66634 9.91416 3.22824 11.2707 4.22844 12.2709C5.22863 13.2711 6.58519 13.833 7.99967 13.833ZM8.66634 8.49967H11.333V9.83301H7.33301V5.16634H8.66634V8.49967Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="blog-box-time-text-wrap">
                                    <p className="blog-box-time-text">8 min read</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stores-section">
              <div className="section-spacing">
                <div className="container">
                  <div className="common-title-wrap stores-heading">
                    <h2 className="common-title left">Visit our stores</h2>
                  </div>
                  <div
                    data-delay="4000"
                    data-animation="slide"
                    className="stores-slider w-slider"
                    data-autoplay="false"
                    data-easing="ease"
                    data-hide-arrows="false"
                    data-disable-swipe="false"
                    data-autoplay-limit="0"
                    data-nav-spacing="3"
                    data-duration="500"
                    data-infinite="true"
                  >
                    <div className="stores-slider-mask w-slider-mask">
                      <div className="stores-slide w-slide">
                        <div className="stores-layout">
                          <div className="stores-content">
                            <div className="stores-title-wrap">
                              <h2 className="stores-title">Zinzira Store, NYC</h2>
                            </div>
                            <div className="stores-addres-wrap">
                              <p className="stores-addres">
                                2118 Thornridge Cir. Syracuse, Connecticut 35624
                              </p>
                            </div>
                            <div className="stores-email-wrap">
                              <p className="stores-email">info@zinzirastore.com</p>
                            </div>
                            <div className="stores-num-wrap">
                              <p className="stores-num">+(313) 456-535-732</p>
                            </div>
                            <div className="stores-btn-wrap">
                              <a
                                href="/products"
                                className="btn-wrap-2 stores-btn w-inline-block"
                              >
                                <div className="btn-inner-2">
                                  <div>Visit Store</div>
                                  <div className="btn-icon-wrap">
                                    <div className="btn-icon-2 w-embed">
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
                                    <div className="btn-icon-2 w-embed">
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
                                <div className="btn-shape-2"></div>
                              </a>
                            </div>
                          </div>
                          <div className="stores-thumb-wrap">
                            <img
                              sizes="(max-width: 479px) 92vw, (max-width: 991px) 43vw, 33vw"
                              srcset="
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1899_store-thumb-1-p-500.jpg 500w,
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1899_store-thumb-1.jpg       690w
                          "
                              alt="A rack of clothes in front of a window."
                              src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1899_store-thumb-1.jpg"
                              loading="lazy"
                              className="stores-thumb"
                            />
                            <img
                              sizes="(max-width: 479px) 92vw, (max-width: 991px) 43vw, 33vw"
                              srcset="
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1892_store-thumb-2-p-500.jpg 500w,
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1892_store-thumb-2.jpg       690w
                          "
                              alt="A rack of shirts and a pair of shoes."
                              src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1892_store-thumb-2.jpg"
                              loading="lazy"
                              className="stores-thumb"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="stores-slide w-slide">
                        <div className="stores-layout">
                          <div className="stores-content">
                            <div className="stores-title-wrap">
                              <h2 className="stores-title">Zinzira Store, CA</h2>
                            </div>
                            <div className="stores-addres-wrap">
                              <p className="stores-addres">
                                2715 Ash Dr. San Jose, South Dakota 83475
                              </p>
                            </div>
                            <div className="stores-email-wrap">
                              <p className="stores-email">info@zinzirastore.com</p>
                            </div>
                            <div className="stores-num-wrap">
                              <p className="stores-num">+(313) 456-535-732</p>
                            </div>
                            <div className="stores-btn-wrap">
                              <a
                                href="/products"
                                className="btn-wrap-2 stores-btn w-inline-block"
                              >
                                <div className="btn-inner-2">
                                  <div>Visit Store</div>
                                  <div className="btn-icon-wrap">
                                    <div className="btn-icon-2 w-embed">
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
                                    <div className="btn-icon-2 w-embed">
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
                                <div className="btn-shape-2"></div>
                              </a>
                            </div>
                          </div>
                          <div className="stores-thumb-wrap">
                            <img
                              sizes="(max-width: 479px) 92vw, (max-width: 991px) 43vw, 33vw"
                              srcset="
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18ff_store-thumb-3-p-500.jpg  500w,
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18ff_store-thumb-3-p-800.jpg  800w,
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18ff_store-thumb-3.jpg       1035w
                          "
                              alt="jeans hanging on a rack in a store"
                              src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18ff_store-thumb-3.jpg"
                              loading="lazy"
                              className="stores-thumb"
                            />
                            <img
                              sizes="(max-width: 479px) 92vw, (max-width: 991px) 43vw, 33vw"
                              srcset="
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f190b_store-thumb-4-p-500.jpg  500w,
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f190b_store-thumb-4-p-800.jpg  800w,
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f190b_store-thumb-4.jpg       1035w
                          "
                              alt="a row of clothes hanging on a rack"
                              src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f190b_store-thumb-4.jpg"
                              loading="lazy"
                              className="stores-thumb"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="stores-slide w-slide">
                        <div className="stores-layout">
                          <div className="stores-content">
                            <div className="stores-title-wrap">
                              <h2 className="stores-title">Zinzira Store, LA</h2>
                            </div>
                            <div className="stores-addres-wrap">
                              <p className="stores-addres">
                                1901 Thornridge Cir. Shiloh, Hawaii 81063
                              </p>
                            </div>
                            <div className="stores-email-wrap">
                              <p className="stores-email">info@zinzirastore.com</p>
                            </div>
                            <div className="stores-num-wrap">
                              <p className="stores-num">+(313) 456-535-732</p>
                            </div>
                            <div className="stores-btn-wrap">
                              <a
                                href="/products"
                                className="btn-wrap-2 stores-btn w-inline-block"
                              >
                                <div className="btn-inner-2">
                                  <div>Visit Store</div>
                                  <div className="btn-icon-wrap">
                                    <div className="btn-icon-2 w-embed">
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
                                    <div className="btn-icon-2 w-embed">
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
                                <div className="btn-shape-2"></div>
                              </a>
                            </div>
                          </div>
                          <div className="stores-thumb-wrap">
                            <img
                              sizes="(max-width: 479px) 92vw, (max-width: 991px) 43vw, 33vw"
                              srcset="
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1905_store-thumb-5-p-500.jpg  500w,
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1905_store-thumb-5-p-800.jpg  800w,
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1905_store-thumb-5.jpg       1035w
                          "
                              alt="a rack of shirts hanging in a store"
                              src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1905_store-thumb-5.jpg"
                              loading="lazy"
                              className="stores-thumb"
                            />
                            <img
                              sizes="(max-width: 479px) 92vw, (max-width: 991px) 43vw, 33vw"
                              srcset="
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1911_store-thumb-6-p-500.jpg  500w,
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1911_store-thumb-6-p-800.jpg  800w,
                            https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1911_store-thumb-6.jpg       1035w
                          "
                              alt="a rack of clothes in a clothing store"
                              src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1911_store-thumb-6.jpg"
                              loading="lazy"
                              className="stores-thumb"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="stores-slider-arrow-left w-slider-arrow-left">
                      <div className="stores-slider-arrow-icon w-embed">
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
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="stores-slider-arrow-right w-slider-arrow-right">
                      <div className="stores-slider-arrow-icon w-embed">
                        <svg
                          width=" 100%"
                          height=" 100%"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16699 9.99984H15.8337M15.8337 9.99984L10.0003 4.1665M15.8337 9.99984L10.0003 15.8332"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="slide-nav-4 w-slider-nav w-round w-num"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="instra-section">
              <div className="section-spacing">
                <div className="container">
                  <div className="common-title-wrap cta-heading">
                    <h2 className="common-title">Follow us on @zinzira</h2>
                  </div>
                </div>
              </div>
              <div className="instra-showcase-wrapper">
                <div className="instra-marquee">
                  <div className="instra-layout">
                    <a
                      aria-label="cta"
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f189d_cta-thumb-1-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f189d_cta-thumb-1.jpg       699w
                    "
                        alt="A pair of black shoes sitting on top of a wooden table."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f189d_cta-thumb-1.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18cd_cta-thumb-2-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18cd_cta-thumb-2.jpg       699w
                    "
                        alt="A clothing store with a lot of items on the shelves."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18cd_cta-thumb-2.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d1_cta-thumb-11-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d1_cta-thumb-11.jpg       699w
                    "
                        alt="A rack of clothes in a clothing store."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d1_cta-thumb-11.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d5_cta-thumb-4-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d5_cta-thumb-4.jpg       699w
                    "
                        alt="A person taking a picture of a clothing rack."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d5_cta-thumb-4.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18dd_cta-thumb-5-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18dd_cta-thumb-5.jpg       699w
                    "
                        alt="A row of clothes hanging on a rack."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18dd_cta-thumb-5.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d9_cta-thumb-6-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d9_cta-thumb-6.jpg       699w
                    "
                        alt="A line of socks hanging on a clothes line."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d9_cta-thumb-6.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e1_cta-thumb-7-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e1_cta-thumb-7.jpg       699w
                    "
                        alt="A room filled with lots of clothes on a wooden floor."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e1_cta-thumb-7.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="instra-layout">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f189d_cta-thumb-1-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f189d_cta-thumb-1.jpg       699w
                    "
                        alt="A pair of black shoes sitting on top of a wooden table."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f189d_cta-thumb-1.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18cd_cta-thumb-2-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18cd_cta-thumb-2.jpg       699w
                    "
                        alt="A clothing store with a lot of items on the shelves."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18cd_cta-thumb-2.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d1_cta-thumb-11-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d1_cta-thumb-11.jpg       699w
                    "
                        alt="A rack of clothes in a clothing store."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d1_cta-thumb-11.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d5_cta-thumb-4-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d5_cta-thumb-4.jpg       699w
                    "
                        alt="A person taking a picture of a clothing rack."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d5_cta-thumb-4.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18dd_cta-thumb-5-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18dd_cta-thumb-5.jpg       699w
                    "
                        alt="A row of clothes hanging on a rack."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18dd_cta-thumb-5.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d9_cta-thumb-6-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d9_cta-thumb-6.jpg       699w
                    "
                        alt="A line of socks hanging on a clothes line."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d9_cta-thumb-6.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e1_cta-thumb-7-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e1_cta-thumb-7.jpg       699w
                    "
                        alt="A room filled with lots of clothes on a wooden floor."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e1_cta-thumb-7.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="instra-marquee-2">
                  <div className="instra-layout-2">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a1_cta-thumb-8-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a1_cta-thumb-8.jpg       699w
                    "
                        alt="A rack of jeans hanging on a rail."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a1_cta-thumb-8.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e5_cta-thumb-9-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e5_cta-thumb-9.jpg       699w
                    "
                        alt="A rack of baby clothes hanging on a wall."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e5_cta-thumb-9.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f5_cta-thumb-10-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f5_cta-thumb-10.jpg       699w
                    "
                        alt="A bunch of cloths are hanging on a rack."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f5_cta-thumb-10.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d1_cta-thumb-11-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d1_cta-thumb-11.jpg       699w
                    "
                        alt="A rack of clothes in a clothing store."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d1_cta-thumb-11.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e9_cta-thumb-12-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e9_cta-thumb-12.jpg       699w
                    "
                        alt="A rack of clothes and handbags in a store."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e9_cta-thumb-12.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18ed_cta-thumb-13-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18ed_cta-thumb-13.jpg       699w
                    "
                        alt="A woman is looking at a rack of clothes."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18ed_cta-thumb-13.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f1_cta-thumb-14-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f1_cta-thumb-14.jpg       699w
                    "
                        alt="A rack of clothes hanging on a wall."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f1_cta-thumb-14.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="instra-layout-2">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a1_cta-thumb-8-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a1_cta-thumb-8.jpg       699w
                    "
                        alt="A rack of jeans hanging on a rail."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18a1_cta-thumb-8.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e5_cta-thumb-9-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e5_cta-thumb-9.jpg       699w
                    "
                        alt="A rack of baby clothes hanging on a wall."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e5_cta-thumb-9.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f5_cta-thumb-10-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f5_cta-thumb-10.jpg       699w
                    "
                        alt="A bunch of cloths are hanging on a rack."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f5_cta-thumb-10.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d1_cta-thumb-11-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d1_cta-thumb-11.jpg       699w
                    "
                        alt="A rack of clothes in a clothing store."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18d1_cta-thumb-11.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e9_cta-thumb-12-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e9_cta-thumb-12.jpg       699w
                    "
                        alt="A rack of clothes and handbags in a store."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18e9_cta-thumb-12.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18ed_cta-thumb-13-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18ed_cta-thumb-13.jpg       699w
                    "
                        alt="A woman is looking at a rack of clothes."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18ed_cta-thumb-13.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="instagram-thumb-wrap w-inline-block"
                    >
                      <img
                        sizes="(max-width: 479px) 140px, (max-width: 767px) 170px, 233px"
                        srcset="
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f1_cta-thumb-14-p-500.jpg 500w,
                      https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f1_cta-thumb-14.jpg       699w
                    "
                        alt="A rack of clothes hanging on a wall."
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f18f1_cta-thumb-14.jpg"
                        loading="lazy"
                        className="instagram-thumb"
                      />
                      <div className="instra-icon-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/67345a7a5d5d6320059f1917_instra.svg"
                          alt="a man riding a wave on top of a surfboard"
                          className="instra-icon"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="section-spacing">
              <div className="container">
                <div className="footer-layout">
                  <div className="footer-top">
                    <div className="footer-left">
                      <div className="footer-widget">
                        <div className="footer-widget-title-wrap">
                          <h3 className="footer-widget-title">PAGES</h3>
                        </div>
                        <div className="footer-widget-link-text-wrap">
                          <a
                            href="/"
                            aria-current="page"
                            className="footer-widget-link-text w--current"
                          >
                            Home
                          </a>
                          <a href="/about-us" className="footer-widget-link-text">
                            About us
                          </a>
                          <a
                            href="/our-categories"
                            className="footer-widget-link-text"
                          >
                            Categories
                          </a>
                          <a href="/products" className="footer-widget-link-text">
                            Shop
                          </a>
                          <a
                            href="https://zinzira.webflow.io/product/denim-shorts"
                            className="footer-widget-link-text"
                          >
                            Product Details
                          </a>
                          <a
                            href="/client-reviews"
                            className="footer-widget-link-text"
                          >
                            Reviews
                          </a>
                        </div>
                      </div>
                      <div className="footer-widget">
                        <div className="footer-widget-title-wrap">
                          <h3 className="footer-widget-title">RESOURCES</h3>
                        </div>
                        <div className="footer-widget-link-text-wrap">
                          <a href="/blog" className="footer-widget-link-text">
                            Blogs
                          </a>
                          <a
                            href="https://zinzira.webflow.io/blogs/5-essential-tools-for-growing-your-online-store"
                            className="footer-widget-link-text"
                          >
                            Blog Details
                          </a>
                          <a href="/faq" className="footer-widget-link-text">
                            FAQ
                          </a>
                          <a href="/contact" className="footer-widget-link-text">
                            Contact us
                          </a>
                          <a href="/404" className="footer-widget-link-text">
                            Error 404
                          </a>
                          <a
                            href="/collections"
                            className="footer-widget-link-text"
                          >
                            Collections
                          </a>
                          <a
                            href="https://zinzira.webflow.io/collections/summer-collection-for-women"
                            className="footer-widget-link-text"
                          >
                            Collections Details
                          </a>
                        </div>
                      </div>
                      <div className="footer-widget">
                        <div className="footer-widget-title-wrap">
                          <h3 className="footer-widget-title">UTILITIES</h3>
                        </div>
                        <div className="footer-widget-link-text-wrap">
                          <a
                            href="/template-info/style-guide"
                            className="footer-widget-link-text"
                          >
                            Style Guide
                          </a>
                          <a
                            href="/template-info/changelog"
                            className="footer-widget-link-text"
                          >
                            Changelog
                          </a>
                          <a
                            href="/template-info/licenses"
                            className="footer-widget-link-text"
                          >
                            Licensing
                          </a>
                          <a
                            href="/privacy-policy"
                            className="footer-widget-link-text"
                          >
                            Privacy Policy
                          </a>
                          <a href="/log-in" className="footer-widget-link-text">
                            Sing In
                          </a>
                          <a href="/sign-up" className="footer-widget-link-text">
                            Sing Up
                          </a>
                          <a
                            href="/terms-conditions"
                            className="footer-widget-link-text"
                          >
                            Terms &amp;Conditions
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="footer-right">
                      <div className="footer-subscription-wrap">
                        <div className="footer-subscription-title-wrap">
                          <h2 className="footer-subscription-title">
                            10% OFF YOUR FIRST PURCHASE
                          </h2>
                        </div>
                        <div className="footer-subscription-text-wrap">
                          <p className="footer-subscription-text">
                            Special offers for subscribers. Don &#x27;t miss out
                            on future offers, new arrivals, &amp;expert fashion
                            tips.
                          </p>
                        </div>
                        <div className="footer-subscription-from-block w-form">
                          <form
                            id="email-form"
                            name="email-form"
                            data-name="Email Form"
                            method="get"
                            className="footer-subscription-from"
                            data-wf-page-id="673455c93dd434a47f2d81a0"
                            data-wf-element-id="9a2e9e4d-bfec-afe7-f76c-a551ae432853"
                          >
                            <div className="footer-subscription-input-wrap">
                              <input
                                className="footer-subscription-input w-input"
                                maxlength="256"
                                name="Email-3"
                                data-name="Email 3"
                                placeholder="Email address"
                                type="email"
                                id="Email-3"
                                required
                              />
                            </div>
                            <div className="footer-subscription-submit">
                              <input
                                type="submit"
                                data-wait=""
                                className="submit-button w-button"
                                value=""
                              />
                            </div>
                          </form>
                          <div className="w-form-done">
                            <div>
                              Thank you! Your submission has been received!
                            </div>
                          </div>
                          <div className="w-form-fail">
                            <div>
                              Oops! Something went wrong while submitting the
                              form.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="footer-social-icon-wrap">
                        <a
                          aria-label="social"
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="footer-social-link w-inline-block"
                        >
                          <div className="footer-social-icon w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_603_6602)">
                                <path
                                  d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                                  fill="currentColor"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_603_6602">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </a>
                        <a
                          aria-label="social"
                          href="https://x.com/?lang=en"
                          target="_blank"
                          className="footer-social-link w-inline-block"
                        >
                          <div className="footer-social-icon w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.9455 23L10.396 15.0901L3.44886 23H0.509766L9.09209 13.2311L0.509766 1H8.05571L13.286 8.45502L19.8393 1H22.7784L14.5943 10.3165L23.4914 23H15.9455ZM19.2185 20.77H17.2398L4.71811 3.23H6.6971L11.7121 10.2532L12.5793 11.4719L19.2185 20.77Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <a
                          aria-label="social"
                          href="https://www.instagram.com/"
                          target="_blank"
                          className="footer-social-link w-inline-block"
                        >
                          <div className="footer-social-icon w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_603_6604)">
                                <path
                                  d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M19.8469 5.59238C19.8469 6.38926 19.2 7.03145 18.4078 7.03145C17.6109 7.03145 16.9688 6.38457 16.9688 5.59238C16.9688 4.79551 17.6156 4.15332 18.4078 4.15332C19.2 4.15332 19.8469 4.8002 19.8469 5.59238Z"
                                  fill="currentColor"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_603_6604">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </a>
                        <a
                          aria-label="social"
                          href="https://www.youtube.com/"
                          target="_blank"
                          className="footer-social-link w-inline-block"
                        >
                          <div className="footer-social-icon w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M23.7609 7.1998C23.7609 7.1998 23.5266 5.54512 22.8047 4.81855C21.8906 3.8623 20.8688 3.85762 20.4 3.80137C17.0438 3.55762 12.0047 3.55762 12.0047 3.55762H11.9953C11.9953 3.55762 6.95625 3.55762 3.6 3.80137C3.13125 3.85762 2.10938 3.8623 1.19531 4.81855C0.473438 5.54512 0.24375 7.1998 0.24375 7.1998C0.24375 7.1998 0 9.14512 0 11.0857V12.9045C0 14.8451 0.239062 16.7904 0.239062 16.7904C0.239062 16.7904 0.473437 18.4451 1.19062 19.1717C2.10469 20.1279 3.30469 20.0951 3.83906 20.1982C5.76094 20.3811 12 20.4373 12 20.4373C12 20.4373 17.0438 20.4279 20.4 20.1889C20.8688 20.1326 21.8906 20.1279 22.8047 19.1717C23.5266 18.4451 23.7609 16.7904 23.7609 16.7904C23.7609 16.7904 24 14.8498 24 12.9045V11.0857C24 9.14512 23.7609 7.1998 23.7609 7.1998ZM9.52031 15.1123V8.36699L16.0031 11.7514L9.52031 15.1123Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <a
                          aria-label="social"
                          href="https://www.tiktok.com/"
                          target="_blank"
                          className="footer-social-link w-inline-block"
                        >
                          <div className="footer-social-icon w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.0725 0H13.0278V16.3478C13.0278 18.2957 11.4722 19.8957 9.53626 19.8957C7.60034 19.8957 6.04469 18.2957 6.04469 16.3478C6.04469 14.4348 7.56577 12.8695 9.43257 12.8V8.69567C5.31872 8.7652 2 12.1391 2 16.3478C2 20.5913 5.38786 24 9.57085 24C13.7538 24 17.1416 20.5565 17.1416 16.3478V7.9652C18.6627 9.07827 20.5295 9.73913 22.5 9.77393V5.66957C19.4579 5.56522 17.0725 3.06087 17.0725 0Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <a
                          aria-label="social"
                          href="https://bd.linkedin.com/"
                          target="_blank"
                          className="footer-social-link w-inline-block"
                        >
                          <div className="footer-social-icon w-embed">
                            <svg
                              width=" 100%"
                              height=" 100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_603_6607)">
                                <path
                                  d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                                  fill="currentColor"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_603_6607">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="footer-bottom">
                    <div className="footer-copyright-wrap">
                      <p className="footer-copyright">
                        © 2024 Zinzira. All rights reserved.
                      </p>
                    </div>
                    <div className="footer-bottom-right">
                      <p className="paragraph">
                        Designed by
                        <a
                          href="https://webflow.com/templates/designers/maven-flow"
                          target="_blank"
                          className="mavenflow-link"
                        >
                          Mavenflow
                        </a>
                      </p>
                      <p className="paragraph">
                        Powered by
                        <a
                          href="https://webflow.com/"
                          target="_blank"
                          className="webflow-link"
                        >
                          Webflow
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}