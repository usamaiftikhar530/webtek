import React, { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

function Homeold() {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper("#blogSlider1", {
      loop: true,
      spaceBetween: 20,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
    });

    return () => {
      // swiperInstance.destroy();
      swiperRef.current.destroy();
    };
  }, []);

  const handlePrevButtonClick = () => {
    swiperRef.current.slidePrev();
  };

  const handleNextButtonClick = () => {
    swiperRef.current.slideNext();
  };

  return (
    <>
      <body class="gray-body">
        <div class="cursor"></div>
        <div class="cursor2"></div>

        {/* <!--[if lte IE 9]> */}
        <p class="browserupgrade">
          You are using an <strong>outdated</strong> browser. Please{" "}
          <a href="https://browsehappy.com/">upgrade your browser</a> to improve
          your experience and security.
        </p>
        {/* <![endif]--> */}

        {/* <!--********************************
   Code Start From Here 
******************************** --> */}

        {/* <!--==============================
 Preloader
==============================--> */}
        <div id="preloader" class="preloader ">
          <button class="th-btn th-radius preloaderCls">
            Cancel Preloader{" "}
          </button>
          <div id="loader" class="th-preloader">
            <div class="animation-preloader">
              <div class="txt-loading">
                <span preloader-text="W" class="characters">
                  W
                </span>

                <span preloader-text="E" class="characters">
                  E
                </span>

                <span preloader-text="B" class="characters">
                  B
                </span>

                <span preloader-text="T" class="characters">
                  T
                </span>

                <span preloader-text="E" class="characters">
                  E
                </span>

                <span preloader-text="C" class="characters">
                  C
                </span>

                <span preloader-text="K" class="characters">
                  K
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!--==============================
Mobile Menu
============================== --> */}
        <div class="th-menu-wrapper">
          <div class="th-menu-area text-center">
            <button class="th-menu-toggle">
              <i class="fal fa-times"></i>
            </button>
            <div class="mobile-logo">
              <a href="index.html">
                <img src="assets/img/logo.svg" alt="Webteck" />
              </a>
            </div>
            <div class="th-mobile-menu">
              <ul>
                <li class="menu-item-has-children mega-menu-wrap">
                  <a href="#">Home</a>
                  <ul class="mega-menu">
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
                          <a href="home-it-agency-op.html">IT Agency Onepage</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">Services</a>
                  <ul class="sub-menu">
                    <li>
                      <a href="service.html">Services</a>
                    </li>
                    <li>
                      <a href="service-details.html">Services Details</a>
                    </li>
                  </ul>
                </li>
                <li class="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul class="sub-menu">
                    <li class="menu-item-has-children">
                      <a href="#">Shop</a>
                      <ul class="sub-menu">
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
                <li class="menu-item-has-children">
                  <a href="#">Blog</a>
                  <ul class="sub-menu">
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
        {/* <!--==============================
Header Area
==============================--> */}
        <header class="th-header header-layout5">
          <div class="sticky-wrapper">
            {/* <!-- Main Menu Area --> */}
            <div class="menu-area">
              <div class="container th-container4">
                <div class="row align-items-center justify-content-between">
                  <div class="col-auto">
                    <div class="header-logo">
                      <a class="icon-masking" href="index.html">
                        <span
                          data-mask-src="assets/img/logo.svg"
                          class="mask-icon"
                        ></span>
                        <img src="assets/img/logo.svg" alt="Webteck" />
                      </a>
                    </div>
                  </div>
                  <div class="col-auto ms-xl-auto">
                    <nav class="main-menu style2 d-none d-lg-inline-block">
                      <ul>
                        <li class="menu-item-has-children mega-menu-wrap">
                          <a href="#">Home</a>
                          <ul class="mega-menu">
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
                                  <a href="home-it-solution.html">
                                    IT Solution
                                  </a>
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
                                  <a href="home-app-landing.html">
                                    App Landing
                                  </a>
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
                          <a href="about.html">About Us</a>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">Services</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="service.html">Services</a>
                            </li>
                            <li>
                              <a href="service-details.html">
                                Services Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul class="sub-menu">
                            <li class="menu-item-has-children">
                              <a href="#">Shop</a>
                              <ul class="sub-menu">
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
                        <li class="menu-item-has-children">
                          <a href="#">Blog</a>
                          <ul class="sub-menu">
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
                    </nav>
                    <button
                      type="button"
                      class="th-menu-toggle d-block d-lg-none"
                    >
                      <i class="far fa-bars"></i>
                    </button>
                  </div>
                  <div class="col-auto d-xxl-block d-none">
                    <div class="header-button">
                      <a href="tel:+2586232325" class="th-btn style-radius">
                        Call us: +258 6232 3258
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!--==============================
Hero Area
==============================--> */}
        <div class="th-hero-wrapper hero-6" id="hero">
          <div
            class="swiper th-slider"
            id="heroSlide3"
            data-slider-options='{"effect":"fade"}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="hero-inner">
                  <div
                    class="th-hero-bg"
                    // data-bg-src="assets/img/hero/hero_img_11_1.jpg"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/hero/hero_img_11_1.jpg)`,
                    }}
                  >
                    <img src="assets/img/hero/hero_bg_1.png" alt="Hero Image" />
                  </div>
                  <div class="container">
                    <div class="hero-style6">
                      <span
                        class="sub-title"
                        data-ani="slideinup"
                        data-ani-delay="0.5s"
                      >
                        We Are Building Better Networks
                      </span>
                      <h1
                        class="hero-title"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        {" "}
                        Superior Data Management Available for All{" "}
                      </h1>
                      <div class="hero-big">
                        <h1
                          class="hero-big_text"
                          data-ani="slideinup"
                          data-ani-delay="0.7s"
                        >
                          WEBTECK
                        </h1>
                      </div>
                      <div class="btn-group justify-content-center">
                        <div
                          class=""
                          data-ani="slideinleft"
                          data-ani-delay="0.8s"
                        >
                          <a
                            href="contact.html"
                            class="th-btn style3 style-radius"
                          >
                            Get Started Now
                          </a>
                        </div>
                        <div
                          class="call-btn"
                          data-ani="slideinright"
                          data-ani-delay="0.9s"
                        >
                          <a
                            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                            class="play-btn popup-video"
                          >
                            <i class="fas fa-play"></i>
                          </a>
                          <div class="media-body">
                            <a
                              href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                              class="btn-title popup-video"
                            >
                              Watch Video
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="hero-inner">
                  <div
                    class="th-hero-bg"
                    data-bg-src="assets/img/hero/hero_img_6_2.png"
                  >
                    <img
                      src="assets/img/hero/hero_overlay_6.png"
                      alt="Hero Image"
                    />
                  </div>
                  <div class="container">
                    <div class="hero-style6">
                      <span
                        class="sub-title"
                        data-ani="slideinup"
                        data-ani-delay="0.5s"
                      >
                        SECURE & IT SERVICES
                      </span>
                      <h1
                        class="hero-title"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        {" "}
                        Make The Easiest Solution For You{" "}
                      </h1>
                      <div class="hero-big">
                        <h1
                          class="hero-big_text"
                          data-ani="slideinup"
                          data-ani-delay="0.7s"
                        >
                          WEBTECK
                        </h1>
                      </div>
                      <div class="btn-group justify-content-center">
                        <div
                          class=""
                          data-ani="slideinleft"
                          data-ani-delay="0.8s"
                        >
                          <a
                            href="contact.html"
                            class="th-btn style3 style-radius"
                          >
                            Get Started Now
                          </a>
                        </div>
                        <div
                          class="call-btn"
                          data-ani="slideinright"
                          data-ani-delay="0.9s"
                        >
                          <a
                            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                            class="play-btn popup-video"
                          >
                            <i class="fas fa-play"></i>
                          </a>
                          <div class="media-body">
                            <a
                              href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                              class="btn-title popup-video"
                            >
                              Watch Video
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="hero-inner">
                  <div
                    class="th-hero-bg"
                    data-bg-src="assets/img/hero/hero_img_6_1.png"
                  >
                    <img
                      src="assets/img/hero/hero_overlay_6.png"
                      alt="Hero Image"
                    />
                  </div>
                  <div class="container">
                    <div class="hero-style6">
                      <span
                        class="sub-title"
                        data-ani="slideinup"
                        data-ani-delay="0.5s"
                      >
                        Best Marketing Service
                      </span>
                      <h1
                        class="hero-title"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        {" "}
                        Perfect IT Solution For Your Business{" "}
                      </h1>
                      <div class="hero-big">
                        <h1
                          class="hero-big_text"
                          data-ani="slideinup"
                          data-ani-delay="0.7s"
                        >
                          WEBTECK
                        </h1>
                      </div>
                      <div class="btn-group justify-content-center">
                        <div
                          class=""
                          data-ani="slideinleft"
                          data-ani-delay="0.8s"
                        >
                          <a
                            href="contact.html"
                            class="th-btn style3 style-radius"
                          >
                            Get Started Now
                          </a>
                        </div>
                        <div
                          class="call-btn"
                          data-ani="slideinright"
                          data-ani-delay="0.9s"
                        >
                          <a
                            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                            class="play-btn popup-video"
                          >
                            <i class="fas fa-play"></i>
                          </a>
                          <div class="media-body">
                            <a
                              href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                              class="btn-title popup-video"
                            >
                              Watch Video
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="hero-inner">
                  <div
                    class="th-hero-bg"
                    data-bg-src="assets/img/hero/hero_img_6_2.png"
                  >
                    <img
                      src="assets/img/hero/hero_overlay_6.png"
                      alt="Hero Image"
                    />
                  </div>
                  <div class="container">
                    <div class="hero-style6">
                      <span
                        class="sub-title"
                        data-ani="slideinup"
                        data-ani-delay="0.5s"
                      >
                        SECURE & IT SERVICES
                      </span>
                      <h1
                        class="hero-title"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        {" "}
                        Make The Easiest Solution For You{" "}
                      </h1>
                      <div class="hero-big">
                        <h1
                          class="hero-big_text"
                          data-ani="slideinup"
                          data-ani-delay="0.7s"
                        >
                          WEBTECK
                        </h1>
                      </div>
                      <div class="btn-group justify-content-center">
                        <div
                          class=""
                          data-ani="slideinleft"
                          data-ani-delay="0.8s"
                        >
                          <a
                            href="contact.html"
                            class="th-btn style3 style-radius"
                          >
                            Get Started Now
                          </a>
                        </div>
                        <div
                          class="call-btn"
                          data-ani="slideinright"
                          data-ani-delay="0.9s"
                        >
                          <a
                            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                            class="play-btn popup-video"
                          >
                            <i class="fas fa-play"></i>
                          </a>
                          <div class="media-body">
                            <a
                              href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                              class="btn-title popup-video"
                            >
                              Watch Video
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            data-slider-prev="#heroSlide3"
            class="slider-arrow slider-prev"
          >
            <i class="far fa-arrow-left"></i>
          </button>
          <button
            data-slider-next="#heroSlide3"
            class="slider-arrow slider-next"
          >
            <i class="far fa-arrow-right"></i>
          </button>
        </div>
        {/* <!--======== / Hero Section ========--><!--==============================
About Area  
==============================--> */}
        <div class=" overflow-hidden space">
          <div class="container th-container4">
            <div class="title-area text-center">
              <span class="sub-title">Our Core Features</span>
              <h2 class="sec-title">
                A new way to approach customer-driven data
              </h2>
            </div>
            <div class="row gy-4 justify-content-center justify-content-lg-between">
              <div class="col-lg-4 col-md-6">
                <div class="choose-feature">
                  <div class="box-icon">
                    <img src="assets/img/icon/feature_box_1.svg" alt="Icon" />
                  </div>
                  <div class="choose-feature_content">
                    <h3 class="box-title">Realtime Conversation</h3>
                    <p class="choose-feature_text">
                      Pharetra nulla quisque iaculis suspense inceptos. Facilisi
                      nisl.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="choose-feature">
                  <div class="box-icon">
                    <img src="assets/img/icon/feature_box_2.svg" alt="Icon" />
                  </div>
                  <div class="choose-feature_content">
                    <h3 class="box-title">Personalized Chat Visual</h3>
                    <p class="choose-feature_text">
                      Creating a personalized chat visual requires more
                      specific.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="choose-feature">
                  <div class="box-icon">
                    <img src="assets/img/icon/feature_box_3.svg" alt="Icon" />
                  </div>
                  <div class="choose-feature_content">
                    <h3 class="box-title">Higher Response Rate</h3>
                    <p class="choose-feature_text">
                      To achieve a higher response rate or any other context you
                      can consider
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="overflow-hidden">
          <div class="container th-container4">
            <div
              class="cta-sec6 background-image bg-theme"
              data-bg-src="assets/img/bg/cta_bg_6.jpg"
            >
              <div class="cta-content">
                <div class="cta-wrapper">
                  <div class="cta-icon">
                    <a href="tel:+1235859459">
                      <img src="assets/img/icon/call.svg" alt="" />
                    </a>
                  </div>
                  <div class="media-body">
                    <span class="header-info_label text-white">
                      Call For More Info
                    </span>
                    <p class="header-info_link">
                      <a href="tel:+1235859459">(+123) 5859 459</a>
                    </p>
                  </div>
                </div>
                <div class="title-area mb-0">
                  <h4 class="sec-title text-white">
                    Let’s Request a Schedule For Free Consultation
                  </h4>
                </div>
                <div class="cta-group">
                  <a href="contact.html" class="th-btn th-border style-radius">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--==============================
About Area  
==============================--> */}
        <div class="overflow-hidden space" id="about-sec">
          <div class="container th-container4">
            <div class="about-area5">
              <div class="row">
                <div class="col-xl-6">
                  <div class="pe-xl-5 me-xl-4">
                    <div class="title-area mb-30">
                      <span class="sub-title">About Us</span>
                      <h2 class="sec-title">
                        Innovate business solution for startup comapnies
                      </h2>
                    </div>
                    <p class="mt-n2 mb-25">
                      Lorem ipsum dolor amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Libero volutpat sed cras ornare.
                    </p>
                    <div class="checklist">
                      <ul>
                        <li>
                          <i class="far fa-check-circle"></i> Identify growth
                          opportunities and expand market presence{" "}
                        </li>
                        <li>
                          <i class="far fa-check-circle"></i> Enhance
                          operational efficiency and reduce waste
                        </li>
                        <li>
                          <i class="far fa-check-circle"></i> Make informed
                          decisions based on data-driven insights
                        </li>
                      </ul>
                    </div>
                    <div class="about-btn mt-50">
                      <a
                        href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                        class="th-btn popup-video style-radius"
                      >
                        <i class="fa-solid fa-circle-play me-2"></i>View Client
                        Stories
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="img-box9">
                    <div class="img1">
                      <img src="assets/img/normal/about_11_1.jpg" alt="About" />
                    </div>
                    <div class="img2">
                      <img src="assets/img/normal/about_11_2.jpg" alt="About" />
                    </div>
                    <div class="img3">
                      <img src="assets/img/normal/about_11_3.jpg" alt="About" />
                    </div>

                    <div class="th-experience dance">
                      <div class="th-experience_content">
                        <h2 class="experience-year">
                          <span class="counter-number">25</span>
                        </h2>
                        <p class="experience-text">
                          Years of experience in startup building
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="down-option-area">
              <div class="down-option-area_wrapper">
                <div class="about-client-box mb-sm-0 mb-3">
                  <div class="client-thumb-group">
                    <div class="thumb">
                      <img
                        src="assets/img/testimonial/client-img-1-1.png"
                        alt="avater"
                      />
                    </div>
                    <div class="thumb">
                      <img
                        src="assets/img/testimonial/client-img-1-2.png"
                        alt="avater"
                      />
                    </div>
                    <div class="thumb">
                      <img
                        src="assets/img/testimonial/client-img-1-3.png"
                        alt="avater"
                      />
                    </div>
                  </div>
                  <span class="cilent-box_title">Make An Appointment</span>
                </div>
                <div class="about-counter">
                  <h2 class="mb-0">
                    <span class="counter-number">258362548</span>
                  </h2>
                  <span class="cilent-box_title">
                    Happily{" "}
                    <span class="cilent-box_title">active client’s</span>
                  </span>
                </div>
                <div class="cilent-box">
                  <div class="about_review">
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                  </div>
                  <h4 class="cilent-box_counter">
                    <span class="counter-number">2960</span>+ Client Reviews
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--==============================
Service Area  
==============================--> */}
        <section class="service-area7 m-4 mt-0 space" id="service-sec">
          <div class="container th-container4">
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <div class="title-area text-center">
                  <span class="sub-title">WHAT WE DO</span>
                  <h2 class="sec-title">How To Grow Your Business</h2>
                </div>
              </div>
            </div>
            <div class="slider-area">
              <div
                class="swiper th-slider has-shadow"
                id="serviceSlider7"
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="service-grid7 th-ani">
                      <div class="service-grid7_icon">
                        <img
                          src="assets/img/icon/service_grid_1.svg"
                          alt="Icon"
                        />
                      </div>
                      <div class="service-grid7_content">
                        <h3 class="box-title">
                          <a href="service-details.html">Web Marketing</a>
                        </h3>
                        <p class="service-grid7_text">
                          Web marketing, also known as online marketing or
                          digital marketing encompasses{" "}
                        </p>
                        <a href="service-details.html" class="line-btn">
                          Learn More<i class="fa-regular fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="service-grid7 th-ani">
                      <div class="service-grid7_icon">
                        <img
                          src="assets/img/icon/service_grid_2.svg"
                          alt="Icon"
                        />
                      </div>
                      <div class="service-grid7_content">
                        <h3 class="box-title">
                          <a href="service-details.html">Web Development</a>
                        </h3>
                        <p class="service-grid7_text">
                          Web development involves creating and maintaining
                          websites or web applications
                        </p>
                        <a href="service-details.html" class="line-btn">
                          Learn More<i class="fa-regular fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="service-grid7 th-ani">
                      <div class="service-grid7_icon">
                        <img
                          src="assets/img/icon/service_grid_3.svg"
                          alt="Icon"
                        />
                      </div>
                      <div class="service-grid7_content">
                        <h3 class="box-title">
                          <a href="service-details.html">Creative Layout</a>
                        </h3>
                        <p class="service-grid7_text">
                          Creative layout design involves skillfully arranging
                          visual elements, colors
                        </p>
                        <a href="service-details.html" class="line-btn">
                          Learn More<i class="fa-regular fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="service-grid7 th-ani">
                      <div class="service-grid7_icon">
                        <img
                          src="assets/img/icon/service_grid_4.svg"
                          alt="Icon"
                        />
                      </div>
                      <div class="service-grid7_content">
                        <h3 class="box-title">
                          <a href="service-details.html">Product Design</a>
                        </h3>
                        <p class="service-grid7_text">
                          Product design is the process of creating and refining
                          a tangible or digital product
                        </p>
                        <a href="service-details.html" class="line-btn">
                          Learn More<i class="fa-regular fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="service-grid7 th-ani">
                      <div class="service-grid7_icon">
                        <img
                          src="assets/img/icon/service_grid_1.svg"
                          alt="Icon"
                        />
                      </div>
                      <div class="service-grid7_content">
                        <h3 class="box-title">
                          <a href="service-details.html">Web Marketing</a>
                        </h3>
                        <p class="service-grid7_text">
                          Web marketing, also known as online marketing or
                          digital marketing encompasses{" "}
                        </p>
                        <a href="service-details.html" class="line-btn">
                          Learn More<i class="fa-regular fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="service-grid7 th-ani">
                      <div class="service-grid7_icon">
                        <img
                          src="assets/img/icon/service_grid_2.svg"
                          alt="Icon"
                        />
                      </div>
                      <div class="service-grid7_content">
                        <h3 class="box-title">
                          <a href="service-details.html">Web Development</a>
                        </h3>
                        <p class="service-grid7_text">
                          Web development involves creating and maintaining
                          websites or web applications
                        </p>
                        <a href="service-details.html" class="line-btn">
                          Learn More<i class="fa-regular fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="service-grid7 th-ani">
                      <div class="service-grid7_icon">
                        <img
                          src="assets/img/icon/service_grid_3.svg"
                          alt="Icon"
                        />
                      </div>
                      <div class="service-grid7_content">
                        <h3 class="box-title">
                          <a href="service-details.html">Creative Layout</a>
                        </h3>
                        <p class="service-grid7_text">
                          Creative layout design involves skillfully arranging
                          visual elements, colors
                        </p>
                        <a href="service-details.html" class="line-btn">
                          Learn More<i class="fa-regular fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-slider-prev="#serviceSlider7"
                class="slider-arrow slider-prev"
              >
                <i class="far fa-arrow-left"></i>
              </button>
              <button
                data-slider-next="#serviceSlider7"
                class="slider-arrow slider-next"
              >
                <i class="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </section>
        {/* <!--==============================
Team Area  
==============================--> */}
        <section
          class="team-area2 th-radius3 m-4 mt-0 mb-0 bg-theme space"
          data-bg-src="assets/img/bg/team_bg_1.jpg"
        >
          <div class="container th-container4">
            <div class="title-area">
              <span class="sub-title style1 text-white">
                Dedicated Team Members
              </span>
              <h2 class="sec-title text-white">
                We’ve professional dedicated team members
              </h2>
            </div>
            <div class="slider-area">
              <div
                class="swiper th-slider has-shadow"
                id="teamSlider4"
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
              >
                <div class="swiper-wrapper">
                  {/* <!-- Single Item --> */}
                  <div class="swiper-slide">
                    <div class="th-team team-card2">
                      <div class="team-img">
                        <img src="assets/img/team/team_4_1.jpg" alt="Team" />
                        <div class="social-links">
                          <a target="_blank" href="https://facebook.com/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                      <div class="box-content">
                        <div class="media-body">
                          <h3 class="box-title">
                            <a href="team-details.html">Honey Deep</a>
                          </h3>
                          <span class="team-desig">Chief Officer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Item --> */}
                  <div class="swiper-slide">
                    <div class="th-team team-card2">
                      <div class="team-img">
                        <img src="assets/img/team/team_4_2.jpg" alt="Team" />
                        <div class="social-links">
                          <a target="_blank" href="https://facebook.com/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                      <div class="box-content">
                        <div class="media-body">
                          <h3 class="box-title">
                            <a href="team-details.html">Mac Alexixe</a>
                          </h3>
                          <span class="team-desig">CEO, of Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Item --> */}
                  <div class="swiper-slide">
                    <div class="th-team team-card2">
                      <div class="team-img">
                        <img src="assets/img/team/team_4_3.jpg" alt="Team" />
                        <div class="social-links">
                          <a target="_blank" href="https://facebook.com/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                      <div class="box-content">
                        <div class="media-body">
                          <h3 class="box-title">
                            <a href="team-details.html">Alex Julian</a>
                          </h3>
                          <span class="team-desig">Instructor</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Item --> */}
                  <div class="swiper-slide">
                    <div class="th-team team-card2">
                      <div class="team-img">
                        <img src="assets/img/team/team_4_4.jpg" alt="Team" />
                        <div class="social-links">
                          <a target="_blank" href="https://facebook.com/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                      <div class="box-content">
                        <div class="media-body">
                          <h3 class="box-title">
                            <a href="team-details.html">Jenifer Lopez</a>
                          </h3>
                          <span class="team-desig">Instructor</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Item --> */}
                  <div class="swiper-slide">
                    <div class="th-team team-card2">
                      <div class="team-img">
                        <img src="assets/img/team/team_4_1.jpg" alt="Team" />
                        <div class="social-links">
                          <a target="_blank" href="https://facebook.com/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                      <div class="box-content">
                        <div class="media-body">
                          <h3 class="box-title">
                            <a href="team-details.html">Henry Joseph</a>
                          </h3>
                          <span class="team-desig">Senior Instructor</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Item --> */}
                  <div class="swiper-slide">
                    <div class="th-team team-card2">
                      <div class="team-img">
                        <img src="assets/img/team/team_4_2.jpg" alt="Team" />
                        <div class="social-links">
                          <a target="_blank" href="https://facebook.com/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                      <div class="box-content">
                        <div class="media-body">
                          <h3 class="box-title">
                            <a href="team-details.html">Honey Deep</a>
                          </h3>
                          <span class="team-desig">Chief Officer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Item --> */}
                  <div class="swiper-slide">
                    <div class="th-team team-card2">
                      <div class="team-img">
                        <img src="assets/img/team/team_4_3.jpg" alt="Team" />
                        <div class="social-links">
                          <a target="_blank" href="https://facebook.com/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                      <div class="box-content">
                        <div class="media-body">
                          <h3 class="box-title">
                            <a href="team-details.html">Mac Alexixe</a>
                          </h3>
                          <span class="team-desig">CEO, of Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Item --> */}
                  <div class="swiper-slide">
                    <div class="th-team team-card2">
                      <div class="team-img">
                        <img src="assets/img/team/team_4_4.jpg" alt="Team" />
                        <div class="social-links">
                          <a target="_blank" href="https://facebook.com/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                      <div class="box-content">
                        <div class="media-body">
                          <h3 class="box-title">
                            <a href="team-details.html">Alex Julian</a>
                          </h3>
                          <span class="team-desig">Instructor</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Item --> */}
                  <div class="swiper-slide">
                    <div class="th-team team-card2">
                      <div class="team-img">
                        <img src="assets/img/team/team_4_1.jpg" alt="Team" />
                        <div class="social-links">
                          <a target="_blank" href="https://facebook.com/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                      <div class="box-content">
                        <div class="media-body">
                          <h3 class="box-title">
                            <a href="team-details.html">Jenifer Lopez</a>
                          </h3>
                          <span class="team-desig">Instructor</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Single Item --> */}
                  <div class="swiper-slide">
                    <div class="th-team team-card2">
                      <div class="team-img">
                        <img src="assets/img/team/team_4_2.jpg" alt="Team" />
                        <div class="social-links">
                          <a target="_blank" href="https://facebook.com/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" href="https://twitter.com/">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" href="https://instagram.com/">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" href="https://linkedin.com/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                      <div class="box-content">
                        <div class="media-body">
                          <h3 class="box-title">
                            <a href="team-details.html">Henry Joseph</a>
                          </h3>
                          <span class="team-desig">Senior Instructor</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-slider-prev="#teamSlider4"
                class="slider-arrow style2 slider-prev"
              >
                <i class="far fa-arrow-left"></i>
              </button>
              <button
                data-slider-next="#teamSlider4"
                class="slider-arrow style2 slider-next"
              >
                <i class="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </section>
        {/* <!--==============================
Faq Area
==============================--> */}
        <div
          class="faq-area position-relative space overflow-hidden"
          id="faq-sec"
        >
          <div class="container th-container4">
            <div class="row align-items-center">
              <div class="col-xl-6">
                <div class="faq-img4">
                  <div class="img1 th-anim">
                    <img src="assets/img/normal/faq_4_1.png" alt="faq" />
                  </div>
                  <div class="img2 dance2 th-anim">
                    <img src="assets/img/normal/faq_4_2.png" alt="faq" />
                  </div>
                  <div class="faq-client-box jump">
                    <div class="client-thumb-group">
                      <img
                        src="assets/img/testimonial/client-img-1.png"
                        alt="avater"
                      />
                    </div>
                    <span class="cilent-box_title">Customer Feedbacks</span>
                  </div>
                  <div class="faq-shape"></div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="ps-xl-5 ms-xl-3">
                  <div class="title-area pe-xl-5 me-xl-4 text-center text-xl-start">
                    <span class="sub-title style1">
                      Talk To About Any Question?
                    </span>
                    <h2 class="sec-title">
                      Share the joy of achieving glorious moments & climbed up
                      the top
                    </h2>
                  </div>
                  <div class="accordion" id="faqAccordion">
                    <div class="accordion-card">
                      <div class="accordion-header" id="collapse-item-1">
                        <button
                          class="accordion-button "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-1"
                          aria-expanded="true"
                          aria-controls="collapse-1"
                        >
                          How can we help your business?
                        </button>
                      </div>
                      <div
                        id="collapse-1"
                        class="accordion-collapse collapse show"
                        aria-labelledby="collapse-item-1"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
                          <p class="faq-text">
                            I appreciate your willingness to help, but it's
                            important to clarify that I am a virtual assistant
                            created by OpenAI, and I don't have a business or
                            personal needs. My purpose is to assist and provide
                            information to the best of my ability
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-card">
                      <div class="accordion-header" id="collapse-item-2">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-2"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          What are the advantages of Digix?
                        </button>
                      </div>
                      <div
                        id="collapse-2"
                        class="accordion-collapse collapse "
                        aria-labelledby="collapse-item-2"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
                          <p class="faq-text">
                            As of my last knowledge update in January 2022,
                            Digix refers to DigixGlobal, a company that
                            tokenizes physical assets, primarily gold, on the
                            Ethereum blockchain.{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-card">
                      <div class="accordion-header" id="collapse-item-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse-3"
                          aria-expanded="false"
                          aria-controls="collapse-3"
                        >
                          How working process is simplified?
                        </button>
                      </div>
                      <div
                        id="collapse-3"
                        class="accordion-collapse collapse "
                        aria-labelledby="collapse-item-3"
                        data-bs-parent="#faqAccordion"
                      >
                        <div class="accordion-body">
                          <p class="faq-text">
                            Implementing automation for routine and repetitive
                            tasks can significantly reduce manual effort and the
                            risk of errors. This can be achieved through the use
                            of software tools, scripts, or robotic process
                            automation (RPA) systems.
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
        {/* <!--==============================
Project Area  
==============================--> */}
        <section
          class="project-area-5 th-radius3 m-4 mt-0 mb-0 overflow-hidden space"
          id="project-sec"
        >
          <div class="container th-container4">
            <div class="row justify-content-lg-between justify-content-center align-items-center">
              <div class="col-lg-6 mb-n2 mb-lg-0">
                <div class="title-area text-center text-lg-start">
                  <span class="sub-title style1 text-white">
                    LATEST PROJECT
                  </span>
                  <h2 class="sec-title text-white">Project Success Stories</h2>
                </div>
              </div>
              <div class="col-auto">
                <div class="sec-btn">
                  <a href="project.html" class="th-btn style3 style-radius">
                    View All Project
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- / Title row --> */}

            <div class="slider-area">
              <div
                class="swiper th-slider has-shadow"
                id="projectSlider5"
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="project-card5">
                      <div class="project-img">
                        <img
                          src="assets/img/project/project_5_1.jpg"
                          alt="project image"
                        />
                      </div>
                      <div class="project-content">
                        <h3 class="box-title">
                          <a href="project-details.html">
                            Major Insurance Provider Saves $750k per Month With
                            Big Data Migration Month
                          </a>
                        </h3>
                        <p class="project-card5_desc">
                          The company needed to complete a complex migration on
                          a tight deadline to avoid millions of dollars in
                          post-contract fees and fines.
                        </p>
                        <a href="project-details.html" class="line-btn">
                          Learn More<i class="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="project-card5">
                      <div class="project-img">
                        <img
                          src="assets/img/project/project_5_2.jpg"
                          alt="project image"
                        />
                      </div>
                      <div class="project-content">
                        <h3 class="box-title">
                          <a href="project-details.html">
                            Major insurance provider to a big data cost savings
                            of $750,000 is a significant
                          </a>
                        </h3>
                        <p class="project-card5_desc">
                          Project Success is a broad term that can be
                          interpreted in various ways depending on the context
                          and the goals of a specific project.
                        </p>
                        <a href="project-details.html" class="line-btn">
                          Learn More<i class="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="project-card5">
                      <div class="project-img">
                        <img
                          src="assets/img/project/project_5_3.jpg"
                          alt="project image"
                        />
                      </div>
                      <div class="project-content">
                        <h3 class="box-title">
                          <a href="project-details.html">
                            That's a significant achievement! Saving $750,000
                            per month through a big data migration
                          </a>
                        </h3>
                        <p class="project-card5_desc">
                          Project Success is a term that generally refers to the
                          achievement of the goals and objectives set for a
                          specific project.
                        </p>
                        <a href="project-details.html" class="line-btn">
                          Learn More<i class="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="project-card5">
                      <div class="project-img">
                        <img
                          src="assets/img/project/project_5_4.jpg"
                          alt="project image"
                        />
                      </div>
                      <div class="project-content">
                        <h3 class="box-title">
                          <a href="project-details.html">
                            The headline Major Insurance Provider Saves $750k
                            per Month With Big Data Migration
                          </a>
                        </h3>
                        <p class="project-card5_desc">
                          Project Success" is a broad term that can be
                          interpreted in various ways depending on the context
                          and the goals of a particular project
                        </p>
                        <a href="project-details.html" class="line-btn">
                          Learn More<i class="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="project-card5">
                      <div class="project-img">
                        <img
                          src="assets/img/project/project_5_5.jpg"
                          alt="project image"
                        />
                      </div>
                      <div class="project-content">
                        <h3 class="box-title">
                          <a href="project-details.html">
                            Major Insurance Provider Saves $750k per Month With
                            Big Data Migration Month
                          </a>
                        </h3>
                        <p class="project-card5_desc">
                          The company needed to complete a complex migration on
                          a tight deadline to avoid millions of dollars in
                          post-contract fees and fines.
                        </p>
                        <a href="project-details.html" class="line-btn">
                          Learn More<i class="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="project-card5">
                      <div class="project-img">
                        <img
                          src="assets/img/project/project_5_3.jpg"
                          alt="project image"
                        />
                      </div>
                      <div class="project-content">
                        <h3 class="box-title">
                          <a href="project-details.html">
                            That's a significant achievement! Saving $750,000
                            per month through a big data migration
                          </a>
                        </h3>
                        <p class="project-card5_desc">
                          Project Success is a term that generally refers to the
                          achievement of the goals and objectives set for a
                          specific project.
                        </p>
                        <a href="project-details.html" class="line-btn">
                          Learn More<i class="far fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                data-slider-prev="#projectSlider5"
                class="slider-arrow slider-prev"
              >
                <i class="far fa-arrow-left"></i>
              </button>
              <button
                data-slider-next="#projectSlider5"
                class="slider-arrow slider-next"
              >
                <i class="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </section>
        {/* <!--==============================
Process Area  
==============================--> */}
        <section class="space" id="process-sec">
          <div class="container">
            <div class="title-area text-center">
              <span class="sub-title">WORK PROCESS</span>
              <h2 class="sec-title">
                How to work <span class="text-theme">it!</span>
              </h2>
            </div>
            <div class="process-card-area">
              <div class="process-line position-top">
                <img src="assets/img/bg/process_line_2.svg" alt="line" />
              </div>
              <div class="row gy-40 justify-content-between">
                <div class="col-sm-6 col-xl-auto process-card-wrap">
                  <div class="process-card">
                    <div class="pulse"></div>
                    <div class="process-card_icon">
                      <img src="assets/img/icon/process_box_1.png" alt="icon" />
                    </div>
                    <h2 class="box-title">Select a project</h2>
                    <p class="process-card_text">
                      Continua scale empowered metrics with cost effective
                      innovation.
                    </p>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-auto process-card-wrap">
                  <div class="process-card">
                    <div class="pulse"></div>
                    <div class="process-card_icon">
                      <img src="assets/img/icon/process_box_2.png" alt="icon" />
                    </div>
                    <h2 class="box-title">Project analysis</h2>
                    <p class="process-card_text">
                      Continua scale empowered metrics with cost effective
                      innovation.
                    </p>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-auto process-card-wrap">
                  <div class="process-card">
                    <div class="pulse"></div>
                    <div class="process-card_icon">
                      <img src="assets/img/icon/process_box_3.png" alt="icon" />
                    </div>
                    <h2 class="box-title">Plan Execute</h2>
                    <p class="process-card_text">
                      Continua scale empowered metrics with cost effective
                      innovation.
                    </p>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-auto process-card-wrap">
                  <div class="process-card">
                    <div class="pulse"></div>
                    <div class="process-card_icon">
                      <img src="assets/img/icon/process_box_4.png" alt="icon" />
                    </div>
                    <h2 class="box-title">Deliver result</h2>
                    <p class="process-card_text">
                      Continua scale empowered metrics with cost effective
                      innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--==============================
Testimonial Area  
==============================--> */}
        <section
          class="overflow-hidden bg-top-center th-radius3 m-4 mt-0 mb-0 space"
          id="testi-sec"
          data-bg-src="assets/img/bg/testimonial_bg_5.jpg"
        >
          <div class="container th-container4">
            <div class="row justify-content-lg-between justify-content-center align-items-end">
              <div class="col-xxl-4 col-xl-6">
                <div class="title-area text-center text-lg-start">
                  <span class="sub-title style1 text-white">
                    Customer Feedbacks
                  </span>
                  <h2 class="sec-title text-white">
                    See what our clients have to say
                  </h2>
                </div>
              </div>
              <div class="col-lg-auto d-none d-xl-block">
                <div class="sec-btn">
                  <div class="icon-box">
                    <button
                      data-slider-prev="#testiSlider5"
                      class="slider-arrow style2 default"
                    >
                      <i class="far fa-arrow-left"></i>
                    </button>
                    <button
                      data-slider-next="#testiSlider5"
                      class="slider-arrow style2 default"
                    >
                      <i class="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-area">
              <div
                class="swiper th-slider has-shadow"
                id="testiSlider5"
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="testi-box5 th-ani">
                      <div class="testi-box5_image">
                        <img
                          src="assets/img/testimonial/testi_img_1.png"
                          alt="image"
                        />
                      </div>
                      <p class="testi-box5_text">
                        “Lectus volpat faucibus placerat eget nulla sodales
                        aliquam molestie ante, himenaeos fames reinvent
                        prospective suscipit arcu cras cenas penatibus vivamus,
                        aenean primis enim”
                      </p>
                      <div class="testi-box5_wrapper">
                        <div class="testi-box5_profile">
                          <div class="testi-box5_author">
                            <img
                              src="assets/img/testimonial/testi_2_1.png"
                              alt="Avater"
                            />
                          </div>
                          <div class="testi-box5_info">
                            <h3 class="box-title">Andrew D. Smith</h3>
                            <span class="testi-box5_desig">Manager</span>
                          </div>
                        </div>
                        <div class="testi-quote">
                          <img src="assets/img/icon/quote.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="testi-box5 th-ani">
                      <div class="testi-box5_image">
                        <img
                          src="assets/img/testimonial/testi_img_1.png"
                          alt="image"
                        />
                      </div>
                      <p class="testi-box5_text">
                        “Objectively visualize error-free technology for B2B
                        alignment. Monotonectally harness reinvent prospective
                        an expanded array of models via effective collaboration
                        in the success.”
                      </p>
                      <div class="testi-box5_wrapper">
                        <div class="testi-box5_profile">
                          <div class="testi-box5_author">
                            <img
                              src="assets/img/testimonial/testi_2_2.png"
                              alt="Avater"
                            />
                          </div>
                          <div class="testi-box5_info">
                            <h3 class="box-title">Brooklyn Simmons</h3>
                            <span class="testi-box5_desig">
                              CTO of Portfolio
                            </span>
                          </div>
                        </div>
                        <div class="testi-quote">
                          <img src="assets/img/icon/quote.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="testi-box5 th-ani">
                      <div class="testi-box5_image">
                        <img
                          src="assets/img/testimonial/testi_img_1.png"
                          alt="image"
                        />
                      </div>
                      <p class="testi-box5_text">
                        “Completely drive innovative value reinvent prospective
                        whereas out-of-the-box paradigms. Interactively pursue
                        stand-alone markets after global say that they
                        results..”
                      </p>
                      <div class="testi-box5_wrapper">
                        <div class="testi-box5_profile">
                          <div class="testi-box5_author">
                            <img
                              src="assets/img/testimonial/testi_2_3.png"
                              alt="Avater"
                            />
                          </div>
                          <div class="testi-box5_info">
                            <h3 class="box-title">Savannah Nguyen</h3>
                            <span class="testi-box5_desig">CEO at Rimasu</span>
                          </div>
                        </div>
                        <div class="testi-quote">
                          <img src="assets/img/icon/quote.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="testi-box5 th-ani">
                      <div class="testi-box5_image">
                        <img
                          src="assets/img/testimonial/testi_img_1.png"
                          alt="image"
                        />
                      </div>
                      <p class="testi-box5_text">
                        “The best service reinvent prospective metrics before
                        granular schema. Professionally metrics before expedite
                        client-centric or analyzing before expedite methods ”
                      </p>
                      <div class="testi-box5_wrapper">
                        <div class="testi-box5_profile">
                          <div class="testi-box5_author">
                            <img
                              src="assets/img/testimonial/testi_2_4.png"
                              alt="Avater"
                            />
                          </div>
                          <div class="testi-box5_info">
                            <h3 class="box-title">Cameron Williamson</h3>
                            <span class="testi-box5_desig">Founder CEO</span>
                          </div>
                        </div>
                        <div class="testi-quote">
                          <img src="assets/img/icon/quote.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="testi-box5 th-ani">
                      <div class="testi-box5_image">
                        <img
                          src="assets/img/testimonial/testi_img_1.png"
                          alt="image"
                        />
                      </div>
                      <p class="testi-box5_text">
                        “I've had the pleasure of working with Webteck for the
                        past year, and I can confidently say that they have been
                        instrumental say that they in the success.”
                      </p>
                      <div class="testi-box5_wrapper">
                        <div class="testi-box5_profile">
                          <div class="testi-box5_author">
                            <img
                              src="assets/img/testimonial/testi_2_2.png"
                              alt="Avater"
                            />
                          </div>
                          <div class="testi-box5_info">
                            <h3 class="box-title">Brooklyn Simmons</h3>
                            <span class="testi-box5_desig">
                              Project Manager
                            </span>
                          </div>
                        </div>
                        <div class="testi-quote">
                          <img src="assets/img/icon/quote.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="testi-box5 th-ani">
                      <div class="testi-box5_image">
                        <img
                          src="assets/img/testimonial/testi_img_1.png"
                          alt="image"
                        />
                      </div>
                      <p class="testi-box5_text">
                        “Phosfluorescently reinvent prospective metrics before
                        granular schema. Professionally metrics before expedite
                        client-centric before expedite methods .”
                      </p>
                      <div class="testi-box5_wrapper">
                        <div class="testi-box5_profile">
                          <div class="testi-box5_author">
                            <img
                              src="assets/img/testimonial/testi_2_3.png"
                              alt="Avater"
                            />
                          </div>
                          <div class="testi-box5_info">
                            <h3 class="box-title">Savannah Nguyen</h3>
                            <span class="testi-box5_desig">Head Manager</span>
                          </div>
                        </div>
                        <div class="testi-quote">
                          <img src="assets/img/icon/quote.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="testi-box5 th-ani">
                      <div class="testi-box5_image">
                        <img
                          src="assets/img/testimonial/testi_img_1.png"
                          alt="image"
                        />
                      </div>
                      <p class="testi-box5_text">
                        “If you have specific questions about gathering or
                        analyzing customer feedback, or if you're looking for
                        general information or analyzing feel free reinvent
                        prospective to ask.”
                      </p>
                      <div class="testi-box5_wrapper">
                        <div class="testi-box5_profile">
                          <div class="testi-box5_author">
                            <img
                              src="assets/img/testimonial/testi_2_1.png"
                              alt="Avater"
                            />
                          </div>
                          <div class="testi-box5_info">
                            <h3 class="box-title">Cameron Williamson</h3>
                            <span class="testi-box5_desig">UI/UX Designer</span>
                          </div>
                        </div>
                        <div class="testi-quote">
                          <img src="assets/img/icon/quote.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--==============================
Blog Area  
==============================--> */}
        <section
          class="bg-top-right overflow-hidden space-bottom"
          id="blog-sec"
          data-bg-src="assets/img/bg/blog_bg_1.png"
        >
          <div class="container space-bottom">
            <div class="title-area text-center">
              <span class="sub-title">
                <div class="icon-masking me-2">
                  <span
                    class="mask-icon"
                    data-mask-src="assets/img/theme-img/title_shape_1.svg"
                  ></span>
                  <img
                    src="assets/img/theme-img/title_shape_1.svg"
                    alt="shape"
                  />
                </div>
                NEWS & ARTICLES
              </span>
              <h2 class="sec-title">
                Get Every Single Update <span class="text-theme">Blog</span>
              </h2>
            </div>

            <div class="slider-area">
              <div
                class="swiper th-slider has-shadow"
                id="blogSlider1"
                data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="blog-card">
                      <div class="blog-img">
                        <img
                          src="assets/img/blog/blog_3_1.jpg"
                          alt="blog image"
                        />
                      </div>
                      <div class="blog-content">
                        <div class="blog-meta">
                          <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>15 Jan, 2024
                          </a>
                          <a href="blog.html">
                            <i class="fal fa-comments"></i>2 Comments
                          </a>
                        </div>
                        <h3 class="box-title">
                          <a href="blog-details.html">
                            Unsatiable entreaties may collecting Power.
                          </a>
                        </h3>
                        <div class="blog-bottom">
                          <a href="blog.html" class="author">
                            <img
                              src="assets/img/blog/author-1-1.png"
                              alt="avater"
                            />{" "}
                            By Themeholy
                          </a>
                          <a href="blog-details.html" class="line-btn">
                            Read More<i class="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="blog-card">
                      <div class="blog-img">
                        <img
                          src="assets/img/blog/blog_3_2.jpg"
                          alt="blog image"
                        />
                      </div>
                      <div class="blog-content">
                        <div class="blog-meta">
                          <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>16 Jan, 2024
                          </a>
                          <a href="blog.html">
                            <i class="fal fa-comments"></i>3 Comments
                          </a>
                        </div>
                        <h3 class="box-title">
                          <a href="blog-details.html">
                            Regional Manager & limited time management.
                          </a>
                        </h3>
                        <div class="blog-bottom">
                          <a href="blog.html" class="author">
                            <img
                              src="assets/img/blog/author-1-1.png"
                              alt="avater"
                            />{" "}
                            By Themeholy
                          </a>
                          <a href="blog-details.html" class="line-btn">
                            Read More<i class="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="blog-card">
                      <div class="blog-img">
                        <img
                          src="assets/img/blog/blog_3_3.jpg"
                          alt="blog image"
                        />
                      </div>
                      <div class="blog-content">
                        <div class="blog-meta">
                          <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>17 Jan, 2024
                          </a>
                          <a href="blog.html">
                            <i class="fal fa-comments"></i>2 Comments
                          </a>
                        </div>
                        <h3 class="box-title">
                          <a href="blog-details.html">
                            What’s the Holding Back the It Solution Industry?
                          </a>
                        </h3>
                        <div class="blog-bottom">
                          <a href="blog.html" class="author">
                            <img
                              src="assets/img/blog/author-1-1.png"
                              alt="avater"
                            />{" "}
                            By Themeholy
                          </a>
                          <a href="blog-details.html" class="line-btn">
                            Read More<i class="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="blog-card">
                      <div class="blog-img">
                        <img
                          src="assets/img/blog/blog_3_1.jpg"
                          alt="blog image"
                        />
                      </div>
                      <div class="blog-content">
                        <div class="blog-meta">
                          <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>19 Jan, 2024
                          </a>
                          <a href="blog.html">
                            <i class="fal fa-comments"></i>4 Comments
                          </a>
                        </div>
                        <h3 class="box-title">
                          <a href="blog-details.html">
                            Latin derived from Cicero's 1st-century BC
                          </a>
                        </h3>
                        <div class="blog-bottom">
                          <a href="blog.html" class="author">
                            <img
                              src="assets/img/blog/author-1-1.png"
                              alt="avater"
                            />{" "}
                            By Themeholy
                          </a>
                          <a href="blog-details.html" class="line-btn">
                            Read More<i class="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="blog-card">
                      <div class="blog-img">
                        <img
                          src="assets/img/blog/blog_3_2.jpg"
                          alt="blog image"
                        />
                      </div>
                      <div class="blog-content">
                        <div class="blog-meta">
                          <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>15 Jan, 2024
                          </a>
                          <a href="blog.html">
                            <i class="fal fa-comments"></i>2 Comments
                          </a>
                        </div>
                        <h3 class="box-title">
                          <a href="blog-details.html">
                            Unsatiable entreaties may collecting Power.
                          </a>
                        </h3>
                        <div class="blog-bottom">
                          <a href="blog.html" class="author">
                            <img
                              src="assets/img/blog/author-1-1.png"
                              alt="avater"
                            />{" "}
                            By Themeholy
                          </a>
                          <a href="blog-details.html" class="line-btn">
                            Read More<i class="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="blog-card">
                      <div class="blog-img">
                        <img
                          src="assets/img/blog/blog_3_3.jpg"
                          alt="blog image"
                        />
                      </div>
                      <div class="blog-content">
                        <div class="blog-meta">
                          <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>16 Jan, 2024
                          </a>
                          <a href="blog.html">
                            <i class="fal fa-comments"></i>3 Comments
                          </a>
                        </div>
                        <h3 class="box-title">
                          <a href="blog-details.html">
                            Regional Manager & limited time management.
                          </a>
                        </h3>
                        <div class="blog-bottom">
                          <a href="blog.html" class="author">
                            <img
                              src="assets/img/blog/author-1-1.png"
                              alt="avater"
                            />{" "}
                            By Themeholy
                          </a>
                          <a href="blog-details.html" class="line-btn">
                            Read More<i class="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="blog-card">
                      <div class="blog-img">
                        <img
                          src="assets/img/blog/blog_3_1.jpg"
                          alt="blog image"
                        />
                      </div>
                      <div class="blog-content">
                        <div class="blog-meta">
                          <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>17 Jan, 2024
                          </a>
                          <a href="blog.html">
                            <i class="fal fa-comments"></i>2 Comments
                          </a>
                        </div>
                        <h3 class="box-title">
                          <a href="blog-details.html">
                            What’s the Holding Back the It Solution Industry?
                          </a>
                        </h3>
                        <div class="blog-bottom">
                          <a href="blog.html" class="author">
                            <img
                              src="assets/img/blog/author-1-1.png"
                              alt="avater"
                            />{" "}
                            By Themeholy
                          </a>
                          <a href="blog-details.html" class="line-btn">
                            Read More<i class="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="blog-card">
                      <div class="blog-img">
                        <img
                          src="assets/img/blog/blog_3_2
                          .jpg"
                          alt="blog image"
                        />
                      </div>
                      <div class="blog-content">
                        <div class="blog-meta">
                          <a href="blog.html">
                            <i class="fal fa-calendar-days"></i>19 Jan, 2024
                          </a>
                          <a href="blog.html">
                            <i class="fal fa-comments"></i>4 Comments
                          </a>
                        </div>
                        <h3 class="box-title">
                          <a href="blog-details.html">
                            Latin derived from Cicero's 1st-century BC
                          </a>
                        </h3>
                        <div class="blog-bottom">
                          <a href="blog.html" class="author">
                            <img
                              src="assets/img/blog/author-1-1.png"
                              alt="avater"
                            />{" "}
                            By Themeholy
                          </a>
                          <a href="blog-details.html" class="line-btn">
                            Read More<i class="fas fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                // data-slider-prev="#blogSlider1"
                class="slider-arrow style3 slider-prev"
                onClick={handlePrevButtonClick}
              >
                <i class="far fa-arrow-left"></i>
              </button>
              <button
                // data-slider-next="#blogSlider1"
                class="slider-arrow style3 slider-next"
                onClick={handleNextButtonClick}
              >
                <i class="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div class="container">
            <div class="slider-area text-center">
              <div
                class="swiper th-slider"
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"5"}}}'
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="brand-box">
                      <img
                        src="assets/img/brand/brand_1_1.png"
                        alt="Brand Logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="brand-box">
                      <img
                        src="assets/img/brand/brand_1_2.png"
                        alt="Brand Logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="brand-box">
                      <img
                        src="assets/img/brand/brand_1_3.png"
                        alt="Brand Logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="brand-box">
                      <img
                        src="assets/img/brand/brand_1_4.png"
                        alt="Brand Logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="brand-box">
                      <img
                        src="assets/img/brand/brand_1_5.png"
                        alt="Brand Logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="brand-box">
                      <img
                        src="assets/img/brand/brand_1_6.png"
                        alt="Brand Logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="brand-box">
                      <img
                        src="assets/img/brand/brand_1_1.png"
                        alt="Brand Logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="brand-box">
                      <img
                        src="assets/img/brand/brand_1_2.png"
                        alt="Brand Logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="brand-box">
                      <img
                        src="assets/img/brand/brand_1_3.png"
                        alt="Brand Logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="brand-box">
                      <img
                        src="assets/img/brand/brand_1_4.png"
                        alt="Brand Logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="brand-box">
                      <img
                        src="assets/img/brand/brand_1_5.png"
                        alt="Brand Logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="brand-box">
                      <img
                        src="assets/img/brand/brand_1_6.png"
                        alt="Brand Logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shape-mockup" data-bottom="0" data-left="0">
            <div class="particle-2 small" id="particle-4"></div>
          </div>
        </section>
        {/* <!--==============================
Footer Area
==============================--> */}
        <footer
          class="footer-wrapper footer-layout2"
          data-bg-src="assets/img/bg/footer_bg_1.jpg"
        >
          <div class="widget-area">
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-md-6 col-xxl-3 col-xl-4">
                  <div class="widget footer-widget">
                    <div class="th-widget-about">
                      <div class="about-logo">
                        <a href="index.html">
                          <img src="assets/img/logo-small.svg" alt="Webteck" />
                        </a>
                      </div>
                      <p class="about-text">
                        Professionally redefine transparent ROI through low-risk
                        high-yield imperatives. Progressively create empowered.
                        cost effective users via team driven.
                      </p>
                      <div class="th-social">
                        <a href="https://www.facebook.com/">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.whatsapp.com/">
                          <i class="fab fa-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-auto">
                  <div class="widget widget_nav_menu footer-widget">
                    <h3 class="widget_title">Quick Links</h3>
                    <div class="menu-all-pages-container">
                      <ul class="menu">
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="team.html">Meet Our Team</a>
                        </li>
                        <li>
                          <a href="project.html">Our Projects</a>
                        </li>
                        <li>
                          <a href="faq.html">Help & FAQs</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-auto">
                  <div class="widget footer-widget">
                    <h3 class="widget_title">Contact Us</h3>
                    <div class="th-widget-contact">
                      <div class="contact-feature">
                        <div class="icon-btn">
                          <i class="fa-solid fa-phone"></i>
                        </div>
                        <div class="media-body">
                          <p class="contact-feature_label">Phone Number</p>
                          <a
                            href="tel:+19088000393"
                            class="contact-feature_link"
                          >
                            +190-8800-0393
                          </a>
                        </div>
                      </div>
                      <div class="contact-feature">
                        <div class="icon-btn">
                          <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="media-body">
                          <p class="contact-feature_label">Email address</p>
                          <a
                            href="mailto:info@webteck.com"
                            class="contact-feature_link"
                          >
                            info@webteck.com
                          </a>
                        </div>
                      </div>
                      <div class="contact-feature">
                        <div class="icon-btn">
                          <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div class="media-body">
                          <p class="contact-feature_label">office location</p>
                          <a
                            href="https://www.google.com/maps"
                            class="contact-feature_link"
                          >
                            54 Flemington, USA
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-3">
                  <div class="widget footer-widget">
                    <h3 class="widget_title">Get in touch!</h3>
                    <div class="newsletter-widget">
                      <p class="footer-text">
                        Subsrcibe to our upcoming latest article and news
                        resources. Sign up today for hints. tips and the latest
                        product news.
                      </p>
                      <form action="#" class="newsletter-form">
                        <div class="form-group">
                          <input
                            class="form-control"
                            type="email"
                            placeholder="Enter email address"
                            required=""
                          />
                        </div>
                        <button type="submit" class="icon-btn">
                          <i class="fa-solid fa-paper-plane"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-wrap bg-theme">
            <div class="container">
              <div class="row justify-content-between align-items-center">
                <div class="col-lg-6">
                  <p class="copyright-text">
                    Copyright <i class="fal fa-copyright"></i> 2024{" "}
                    <a href="https://themeforest.net/user/themeholy">
                      Themeholy
                    </a>
                    . All Rights Reserved.
                  </p>
                </div>
                <div class="col-lg-6 text-end d-none d-lg-block">
                  <div class="footer-links">
                    <ul>
                      <li>
                        <a href="about.html">Terms & Condition</a>
                      </li>
                      <li>
                        <a href="about.html">Careers</a>
                      </li>
                      <li>
                        <a href="about.html">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* <!--********************************
  Code End  Here 
******************************** --> */}

        {/* <!-- Scroll To Top --> */}
        {/* <div class="scroll-top">
          <svg
            class="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style="transition: stroke-dashoffset 10ms linear 0s; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 307.919;"
            ></path>
          </svg>
        </div> */}
      </body>
    </>
  );
}

export default Homeold;
