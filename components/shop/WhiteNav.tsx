import Link from "next/link";


export default function WhiteNav() {
    return (
      <>
        <div className="nav-section">
          <div className="section-spacing">
            <div className="container">
              <div className="nav-layout">
                <div className="nav-left">
                  <Link
                    href="/"
                    aria-current="page"
                    className="logo-wrap w-inline-block"
                    style={{textDecoration: 'none'}}
                  >
                    {/* <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/66f12ee2729357c157164bde/66f1357348fc6f310b19c49f_logo.svg"
                      alt=""
                      className="logo"
                    /> */}
                    <p
                      className="logo"
                      style={{ color: "#000", textDecoration: "none !important" }}
                    >
                      Logo
                    </p>
                  </Link>
                </div>
                <div className="nav-middle">
                  <div className="nav-menu">
                    <Link href="/" aria-current="page" className="nav-link  ">
                      Home
                    </Link>
                    <Link href="/shop" className="nav-link ">
                      Shop
                    </Link>
                    <Link href="/category" className="nav-link ">
                      Category
                    </Link>
                    <Link href="/" className="nav-link ">
                      About
                    </Link>
                    {/* <a href="/client-reviews" className="nav-link ">
                      Reviews
                    </a>
                    <a href="/faq" className="nav-link ">
                      FAQ
                    </a>
                    <a href="/blog" className="nav-link ">
                      Journal
                    </a> */}
                  </div>
                </div>
                <div className="nav-right">
                  <div className="search-icon-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/673458f613d68f2b87654204_search-icon.svg"
                      alt="a magnifying glass icon on a white background"
                      className="search-icon"
                    />
                  </div>
                  <Link
                    href="/signup"
                    className="user-icon-wrap w-inline-block"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/673458f613d68f2b87654206_user-icon.svg"
                      alt="a black and white photo of a symbol"
                      className="user-icon"
                    />
                  </Link>
                  {/* <div
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
                        src="https://cdn.prod.website-files.com/673455c93dd434a47f2d819a/673458f613d68f2b87654207_cart-icon.svg"
                        alt="cart-icon"
                        className="cart-icon"
                      />
                      <div
                        data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                        className="w-commerce-commercecartopenlinkcount cart-quantity"
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
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g fillRule="nonzero" fill="#333333">
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
                                      />
                                    </div>
                                    <div className="c-cart-price-wrap mobile-only">
                                      <div
                                        data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D"
                                        className="c-cart-price"
                                      >
                                        $ 0.00 USD
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
                                        $ 0.00 USD
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
                                  className="c-cart-checkout-payment"
                                >
                                  <a
                                    role="button"
                                    aria-haspopup="dialog"
                                    aria-label="Apple Pay"
                                    data-node-type="commerce-cart-apple-pay-button"
                                    className="w-commerce-commercecartapplepaybutton c-cart-checkout-payment-apple"
                                  >
                                    <div></div>
                                  </a>
                                  <a
                                    role="button"
                                    aria-haspopup="dialog"
                                    data-node-type="commerce-cart-quick-checkout-button"
                                    className="w-commerce-commercecartquickcheckoutbutton c-cart-checkout-payment-apple"
                                  >
                                    <svg
                                      className="w-commerce-commercequickcheckoutgoogleicon"
                                      xmlns="http://www.w3.org/2000/svg"
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
                                      <g fill="none" fillRule="evenodd">
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
                                          ></mask>
                                          <path
                                            fill="#FBBC04"
                                            d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                            mask="url(#google-mark-b)"
                                          ></path>
                                        </g>
                                        <mask
                                          id="google-mark-d"
                                          fill="#fff"
                                        ></mask>
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
                                      <g fill="none" fillRule="evenodd">
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
                  </div> */}
                  <div className="menu-bar-wrap">
                    <div className="menu-bar bar-1 white"></div>
                    <div className="menu-bar bar-2 white"></div>
                    <div className="menu-bar bar-3 white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-wrapper">
          <div className="section-spacing">
            <div className="container">
              <form action="." className="search-wrap w-form">
                <input
                  className="search-input w-input"
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
      </>
    );
}