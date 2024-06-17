import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState({}); // Manage submenus visibility

  const opt = {
    menuToggleBtn: ".th-menu-toggle",
    bodyToggleClass: "th-body-visible",
    subMenuClass: "th-submenu",
    subMenuParent: "th-item-has-children",
    subMenuParentToggle: "th-active",
    meanExpandClass: "th-mean-expand",
    appendElement: '<span class="th-mean-expand"></span>',
    subMenuToggleClass: "th-open",
    toggleSpeed: 400,
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".th-menu-wrapper")) {
        setMenuVisible(false);
        setSubMenuVisible({});
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenuVisible(!menuVisible);
  };

  const handleSubMenuToggle = (e, index) => {
    e.stopPropagation();
    setSubMenuVisible({
      ...subMenuVisible,
      [index]: !subMenuVisible[index],
    });
  };

  return (
    <>
      <div
        className={`th-menu-wrapper ${menuVisible ? opt.bodyToggleClass : ""}`}
        onClick={handleMenuToggle}
      >
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle" onClick={handleMenuToggle}>
            <i className="fal fa-times" />
          </button>
          <div className="mobile-logo">
            <a href="index.html">
              <img src="assets/img/logo.svg" alt="Webteck" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children mega-menu-wrap">
                <a href="#">Home</a>
                <span
                  className="th-mean-expand"
                  onClick={(e) => handleSubMenuToggle(e, 0)}
                ></span>
                <ul
                  className={`mega-menu ${
                    subMenuVisible[0] ? opt.subMenuToggleClass : ""
                  }`}
                  style={{ display: subMenuVisible[0] ? "block" : "none" }}

                  // className={`mega-menu th-open`}
                  // style={{ display: "block" }}
                >
                  <li>
                    <a href="#">Multipage</a>
                    <ul>
                      <li>
                        <a href="index.html">Digital Agency</a>
                      </li>
                      <li>
                        <a href="home-web-development.html">Web Development</a>
                      </li>
                      <li>
                        <a href="home-software-company.html">
                          Software Company
                        </a>
                      </li>
                      <li>
                        <a href="home-software-company-2.html">
                          Software Company Style 2
                        </a>
                      </li>
                      <li>
                        <a href="home-startup-company.html">Startup Company</a>
                      </li>
                      <li>
                        <a href="home-it-solution.html">IT Solution</a>
                      </li>
                      <li>
                        <a href="home-web-agency.html">Web Agency</a>
                      </li>
                      <li>
                        <a href="home-sass-marketing.html">Sass Marketing</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Multipage</a>
                    <ul>
                      <li>
                        <a href="home-sass-landing.html">Sass Landing</a>
                      </li>
                      <li>
                        <a href="home-sass-landing-2.html">
                          Sass Landing Style 2
                        </a>
                      </li>
                      <li>
                        <a href="home-app-landing.html">App Landing</a>
                      </li>
                      <li>
                        <a href="home-ai-technology.html">AI Technology</a>
                      </li>
                      <li>
                        <a href="home-cyber-security.html">Cyber Security</a>
                      </li>
                      <li>
                        <a href="home-it-company.html">IT Company</a>
                      </li>
                      <li>
                        <a href="home-it-agency.html">IT Agency</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Onepage</a>
                    <ul>
                      <li>
                        <a href="home-digital-agency-op.html">
                          Digital Agency Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-web-development-op.html">
                          Web Development Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-software-company-op.html">
                          Software Company Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-software-company-2-op.html">
                          Software Company Style 2 Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-startup-company-op.html">
                          Startup Company Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-it-solution-op.html">
                          IT Solution Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-web-agency-op.html">Web Agency Onepage</a>
                      </li>
                      <li>
                        <a href="home-sass-marketing-op.html">
                          Sass Marketing Onepage
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Onepage</a>
                    <ul>
                      <li>
                        <a href="home-sass-landing-op.html">
                          Sass Landing Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-sass-landing-2-op.html">
                          Sass Landing Style 2 Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-app-landing-op.html">
                          App Landing Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-ai-technology-op.html">
                          AI Technology Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-cyber-security-op.html">
                          Cyber Security Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-it-company-op.html">IT Company Onepage</a>
                      </li>
                      <li>
                        <a href="home-it-agency-op.html">IT Agency Onepage</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Services</a>
                <span
                  className="th-mean-expand"
                  onClick={(e) => handleSubMenuToggle(e, 1)}
                ></span>
                <ul
                  className={`sub-menu ${
                    subMenuVisible[1] ? opt.subMenuToggleClass : ""
                  }`}
                  style={{ display: subMenuVisible[1] ? "block" : "none" }}
                >
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="service-details.html">Services Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <span
                  className="th-mean-expand"
                  onClick={(e) => handleSubMenuToggle(e, 2)}
                ></span>
                <ul
                  className={`sub-menu ${
                    subMenuVisible[2] ? opt.subMenuToggleClass : ""
                  }`}
                  style={{ display: subMenuVisible[2] ? "block" : "none" }}
                >
                  <li className="menu-item-has-children">
                    <a href="#">Shop</a>
                    <span
                      className="th-mean-expand"
                      onClick={(e) => handleSubMenuToggle(e, 3)}
                    ></span>
                    <ul
                      className={`sub-menu ${
                        subMenuVisible[3] ? opt.subMenuToggleClass : ""
                      }`}
                      style={{ display: subMenuVisible[3] ? "block" : "none" }}
                    >
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="shop-details.html">Shop Details</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart Page</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="team-details.html">Team Details</a>
                  </li>
                  <li>
                    <a href="project.html">Project</a>
                  </li>
                  <li>
                    <a href="project-details.html">Project Details</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq Page</a>
                  </li>
                  <li>
                    <a href="error.html">Error Page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <span
                  className="th-mean-expand"
                  onClick={(e) => handleSubMenuToggle(e, 4)}
                ></span>
                <ul
                  className={`sub-menu ${
                    subMenuVisible[4] ? opt.subMenuToggleClass : ""
                  }`}
                  style={{ display: subMenuVisible[4] ? "block" : "none" }}
                >
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="th-menu-wrapper">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle">
            <i className="fal fa-times" />
          </button>
          <div className="mobile-logo">
            <a href="index.html">
              <img src="assets/img/logo.svg" alt="Webteck" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children mega-menu-wrap">
                <a href="#">Home</a>
                <ul className="mega-menu">
                  <li>
                    <a href="#">Multipage</a>
                    <ul>
                      <li>
                        <a href="index.html">Digital Agency</a>
                      </li>
                      <li>
                        <a href="home-web-development.html">Web Development</a>
                      </li>
                      <li>
                        <a href="home-software-company.html">
                          Software Company
                        </a>
                      </li>
                      <li>
                        <a href="home-software-company-2.html">
                          Software Company Style 2
                        </a>
                      </li>
                      <li>
                        <a href="home-startup-company.html">Startup Company</a>
                      </li>
                      <li>
                        <a href="home-it-solution.html">IT Solution</a>
                      </li>
                      <li>
                        <a href="home-web-agency.html">Web Agency</a>
                      </li>
                      <li>
                        <a href="home-sass-marketing.html">Sass Marketing</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Multipage</a>
                    <ul>
                      <li>
                        <a href="home-sass-landing.html">Sass Landing</a>
                      </li>
                      <li>
                        <a href="home-sass-landing-2.html">
                          Sass Landing Style 2
                        </a>
                      </li>
                      <li>
                        <a href="home-app-landing.html">App Landing</a>
                      </li>
                      <li>
                        <a href="home-ai-technology.html">AI Technology</a>
                      </li>
                      <li>
                        <a href="home-cyber-security.html">Cyber Security</a>
                      </li>
                      <li>
                        <a href="home-it-company.html">IT Company</a>
                      </li>
                      <li>
                        <a href="home-it-agency.html">IT Agency</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Onepage</a>
                    <ul>
                      <li>
                        <a href="home-digital-agency-op.html">
                          Digital Agency Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-web-development-op.html">
                          Web Development Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-software-company-op.html">
                          Software Company Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-software-company-2-op.html">
                          Software Company Style 2 Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-startup-company-op.html">
                          Startup Company Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-it-solution-op.html">
                          IT Solution Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-web-agency-op.html">Web Agency Onepage</a>
                      </li>
                      <li>
                        <a href="home-sass-marketing-op.html">
                          Sass Marketing Onepage
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Onepage</a>
                    <ul>
                      <li>
                        <a href="home-sass-landing-op.html">
                          Sass Landing Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-sass-landing-2-op.html">
                          Sass Landing Style 2 Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-app-landing-op.html">
                          App Landing Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-ai-technology-op.html">
                          AI Technology Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-cyber-security-op.html">
                          Cyber Security Onepage
                        </a>
                      </li>
                      <li>
                        <a href="home-it-company-op.html">IT Company Onepage</a>
                      </li>
                      <li>
                        <a href="home-it-agency-op.html">IT Agency Onepage</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Services</a>
                <ul className="sub-menu">
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="service-details.html">Services Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a href="#">Shop</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="shop-details.html">Shop Details</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart Page</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="team.html">Team</a>
                  </li>
                  <li>
                    <a href="team-details.html">Team Details</a>
                  </li>
                  <li>
                    <a href="project.html">Project</a>
                  </li>
                  <li>
                    <a href="project-details.html">Project Details</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq Page</a>
                  </li>
                  <li>
                    <a href="error.html">Error Page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      {/*==============================
Header Area
==============================*/}
      <header className="th-header header-layout5">
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container th-container4">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to={"/"}>
                      <a className="icon-masking" href="index.html">
                        <span
                          data-mask-src="assets/img/logo.svg"
                          className="mask-icon"
                        />
                        <img src="assets/img/logo.svg" alt="Webteck" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-auto ms-xl-auto">
                  <nav className="main-menu style2 d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children mega-menu-wrap">
                        <a href="/">Home</a>
                        <ul className="mega-menu">
                          <li>
                            <a href="#">Multipage</a>
                            <ul>
                              <li>
                                <a href="index.html">Digital Agency</a>
                              </li>
                              <li>
                                <a href="home-web-development.html">
                                  Web Development
                                </a>
                              </li>
                              <li>
                                <a href="home-software-company.html">
                                  Software Company
                                </a>
                              </li>
                              <li>
                                <a href="home-software-company-2.html">
                                  Software Company Style 2
                                </a>
                              </li>
                              <li>
                                <a href="home-startup-company.html">
                                  Startup Company
                                </a>
                              </li>
                              <li>
                                <a href="home-it-solution.html">IT Solution</a>
                              </li>
                              <li>
                                <a href="home-web-agency.html">Web Agency</a>
                              </li>
                              <li>
                                <a href="home-sass-marketing.html">
                                  Sass Marketing
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Multipage</a>
                            <ul>
                              <li>
                                <a href="home-sass-landing.html">
                                  Sass Landing
                                </a>
                              </li>
                              <li>
                                <a href="home-sass-landing-2.html">
                                  Sass Landing Style 2
                                </a>
                              </li>
                              <li>
                                <a href="home-app-landing.html">App Landing</a>
                              </li>
                              <li>
                                <a href="home-ai-technology.html">
                                  AI Technology
                                </a>
                              </li>
                              <li>
                                <a href="home-cyber-security.html">
                                  Cyber Security
                                </a>
                              </li>
                              <li>
                                <a href="home-it-company.html">IT Company</a>
                              </li>
                              <li>
                                <a href="home-it-agency.html">IT Agency</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Onepage</a>
                            <ul>
                              <li>
                                <a href="home-digital-agency-op.html">
                                  Digital Agency Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-web-development-op.html">
                                  Web Development Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-software-company-op.html">
                                  Software Company Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-software-company-2-op.html">
                                  Software Company Style 2 Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-startup-company-op.html">
                                  Startup Company Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-it-solution-op.html">
                                  IT Solution Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-web-agency-op.html">
                                  Web Agency Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-sass-marketing-op.html">
                                  Sass Marketing Onepage
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Onepage</a>
                            <ul>
                              <li>
                                <a href="home-sass-landing-op.html">
                                  Sass Landing Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-sass-landing-2-op.html">
                                  Sass Landing Style 2 Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-app-landing-op.html">
                                  App Landing Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-ai-technology-op.html">
                                  AI Technology Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-cyber-security-op.html">
                                  Cyber Security Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-it-company-op.html">
                                  IT Company Onepage
                                </a>
                              </li>
                              <li>
                                <a href="home-it-agency-op.html">
                                  IT Agency Onepage
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to={"/about"}>
                          <a>About Us</a>
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="service.html">Services</a>
                          </li>
                          <li>
                            <a href="service-details.html">Services Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">Shop</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart Page</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="project.html">Project</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq Page</a>
                          </li>
                          <li>
                            <a href="error.html">Error Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to={"/contact"}>
                          <a>Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-lg-none"
                    onClick={handleMenuToggle}
                  >
                    <i className="far fa-bars" />
                  </button>
                </div>
                <div className="col-auto d-xxl-block d-none">
                  <div className="header-button">
                    <a href="tel:+2586232325" className="th-btn style-radius">
                      Call us: +258 6232 3258
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
