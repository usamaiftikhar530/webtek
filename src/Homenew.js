import React, { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

import Nav from "./Nav";
import Footer from "./Footer";

function Homenew() {
  const swiperHeroRef = useRef(null);
  const swiperServicesRef = useRef(null);
  const swiperTeamRef = useRef(null);
  const swiperProjectRef = useRef(null);
  const swiperTestiRef = useRef(null);
  const swiperBlogRef = useRef(null);
  const swiperBrandRef = useRef(null);

  

  // ------------------------------------------------------

  // Swiper UseEffect
  useEffect(() => {
    // Hero
    swiperHeroRef.current = new Swiper("#heroSlide3", {
      loop: true,
      effect: "fade",
      // spaceBetween: 20,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 1 },
        1200: { slidesPerView: 1 },
      },
    });

    // Services
    swiperServicesRef.current = new Swiper("#serviceSlider7", {
      // loop: true,
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
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    });

    // Team
    swiperTeamRef.current = new Swiper("#teamSlider4", {
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
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    });

    // Project
    swiperProjectRef.current = new Swiper("#projectSlider5", {
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

    // Testimonial
    swiperTestiRef.current = new Swiper("#testiSlider5", {
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

    // Blog
    swiperBlogRef.current = new Swiper("#blogSlider1", {
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

    // Brand
    swiperBrandRef.current = new Swiper("#swiperbrand", {
      loop: true,
      spaceBetween: 20,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: { slidesPerView: 2 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
        1400: { slidesPerView: 5 },
      },
    });

    return () => {
      swiperHeroRef.current.destroy();
      swiperServicesRef.current.destroy();
      swiperTeamRef.current.destroy();
      swiperProjectRef.current.destroy();
      swiperTestiRef.current.destroy();
      swiperBlogRef.current.destroy();
      swiperBrandRef.current.destroy();
    };
  }, []);

  const handleHeroPrev = () => {
    swiperHeroRef.current.slidePrev();
  };

  const handleHeroNext = () => {
    swiperHeroRef.current.slideNext();
  };

  const handleServicesPrev = () => {
    swiperServicesRef.current.slidePrev();
  };
  const handleServicesNext = () => {
    swiperServicesRef.current.slideNext();
  };

  const handleTeamPrev = () => {
    swiperTeamRef.current.slidePrev();
  };
  const handleTeamNext = () => {
    swiperTeamRef.current.slideNext();
  };

  const handleProjectPrev = () => {
    swiperProjectRef.current.slidePrev();
  };
  const handleProjectNext = () => {
    swiperProjectRef.current.slideNext();
  };

  const handleTestiPrev = () => {
    swiperTestiRef.current.slidePrev();
  };
  const handleTestiNext = () => {
    swiperTestiRef.current.slideNext();
  };

  const handleBlogPrev = () => {
    swiperBlogRef.current.slidePrev();
  };
  const handleBlogNext = () => {
    swiperBlogRef.current.slideNext();
  };

  return (
    <body className="gray-body">
      <div className="cursor" />
      <div className="cursor2" />
      {/*[if lte IE 9]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
<![endif]*/}
      {/*********************************
 Code Start From Here 
******************************** */}
      {/*==============================
Preloader
==============================*/}
      {/* <div id="preloader" className="preloader ">
        <button className="th-btn th-radius preloaderCls">
          Cancel Preloader{" "}
        </button>
        <div id="loader" className="th-preloader">
          <div className="animation-preloader">
            <div className="txt-loading">
              <span preloader-text="W" className="characters">
                W
              </span>
              <span preloader-text="E" className="characters">
                E
              </span>
              <span preloader-text="B" className="characters">
                B
              </span>
              <span preloader-text="T" className="characters">
                T
              </span>
              <span preloader-text="E" className="characters">
                E
              </span>
              <span preloader-text="C" className="characters">
                C
              </span>
              <span preloader-text="K" className="characters">
                K
              </span>
            </div>
          </div>
        </div>
      </div>{" "} */}

      {/*==============================
Mobile Menu
============================== */}

<Nav />
     
      {/*==============================
Hero Area
==============================*/}
      <div className="th-hero-wrapper hero-6" id="hero">
        <div
          className="swiper th-slider"
          id="heroSlide3"
          data-slider-options='{"effect":"fade"}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="hero-inner">
                <div
                  className="th-hero-bg"
                  // data-bg-src="assets/img/hero/hero_img_6_1.png"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/hero/hero_img_6_1.png)`,
                  }}
                >
                  <img
                    src="assets/img/hero/hero_overlay_6.png"
                    alt="Hero Image"
                  />
                </div>
                <div className="container">
                  <div className="hero-style6">
                    <span
                      className="sub-title"
                      data-ani="slideinup"
                      data-ani-delay="0.5s"
                    >
                      We Are Building Better Networks
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      {" "}
                      Superior Data Management Available for All{" "}
                    </h1>
                    <div className="hero-big">
                      <h1
                        className="hero-big_text"
                        data-ani="slideinup"
                        data-ani-delay="0.7s"
                      >
                        WEBTECK
                      </h1>
                    </div>
                    <div className="btn-group justify-content-center">
                      <div
                        className
                        data-ani="slideinleft"
                        data-ani-delay="0.8s"
                      >
                        <a
                          href="contact.html"
                          className="th-btn style3 style-radius"
                        >
                          Get Started Now
                        </a>
                      </div>
                      <div
                        className="call-btn"
                        data-ani="slideinright"
                        data-ani-delay="0.9s"
                      >
                        <a
                          href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                          className="play-btn popup-video"
                        >
                          <i className="fas fa-play" />
                        </a>
                        <div className="media-body">
                          <a
                            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                            className="btn-title popup-video"
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
            <div className="swiper-slide">
              <div className="hero-inner">
                <div
                  className="th-hero-bg"
                  // data-bg-src="assets/img/hero/hero_img_6_2.png"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/hero/hero_img_6_2.png)`,
                  }}
                >
                  <img
                    src="assets/img/hero/hero_overlay_6.png"
                    alt="Hero Image"
                  />
                </div>
                <div className="container">
                  <div className="hero-style6">
                    <span
                      className="sub-title"
                      data-ani="slideinup"
                      data-ani-delay="0.5s"
                    >
                      SECURE &amp; IT SERVICES
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      {" "}
                      Make The Easiest Solution For You{" "}
                    </h1>
                    <div className="hero-big">
                      <h1
                        className="hero-big_text"
                        data-ani="slideinup"
                        data-ani-delay="0.7s"
                      >
                        WEBTECK
                      </h1>
                    </div>
                    <div className="btn-group justify-content-center">
                      <div
                        className
                        data-ani="slideinleft"
                        data-ani-delay="0.8s"
                      >
                        <a
                          href="contact.html"
                          className="th-btn style3 style-radius"
                        >
                          Get Started Now
                        </a>
                      </div>
                      <div
                        className="call-btn"
                        data-ani="slideinright"
                        data-ani-delay="0.9s"
                      >
                        <a
                          href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                          className="play-btn popup-video"
                        >
                          <i className="fas fa-play" />
                        </a>
                        <div className="media-body">
                          <a
                            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                            className="btn-title popup-video"
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
            <div className="swiper-slide">
              <div className="hero-inner">
                <div
                  className="th-hero-bg"
                  // data-bg-src="assets/img/hero/hero_img_6_1.png"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/hero/hero_img_6_1.png)`,
                  }}
                >
                  <img
                    src="assets/img/hero/hero_overlay_6.png"
                    alt="Hero Image"
                  />
                </div>
                <div className="container">
                  <div className="hero-style6">
                    <span
                      className="sub-title"
                      data-ani="slideinup"
                      data-ani-delay="0.5s"
                    >
                      Best Marketing Service
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      {" "}
                      Perfect IT Solution For Your Business{" "}
                    </h1>
                    <div className="hero-big">
                      <h1
                        className="hero-big_text"
                        data-ani="slideinup"
                        data-ani-delay="0.7s"
                      >
                        WEBTECK
                      </h1>
                    </div>
                    <div className="btn-group justify-content-center">
                      <div
                        className
                        data-ani="slideinleft"
                        data-ani-delay="0.8s"
                      >
                        <a
                          href="contact.html"
                          className="th-btn style3 style-radius"
                        >
                          Get Started Now
                        </a>
                      </div>
                      <div
                        className="call-btn"
                        data-ani="slideinright"
                        data-ani-delay="0.9s"
                      >
                        <a
                          href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                          className="play-btn popup-video"
                        >
                          <i className="fas fa-play" />
                        </a>
                        <div className="media-body">
                          <a
                            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                            className="btn-title popup-video"
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
            <div className="swiper-slide">
              <div className="hero-inner">
                <div
                  className="th-hero-bg"
                  // data-bg-src="assets/img/hero/hero_img_6_2.png"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/hero/hero_img_6_2.png)`,
                  }}
                >
                  <img
                    src="assets/img/hero/hero_overlay_6.png"
                    alt="Hero Image"
                  />
                </div>
                <div className="container">
                  <div className="hero-style6">
                    <span
                      className="sub-title"
                      data-ani="slideinup"
                      data-ani-delay="0.5s"
                    >
                      SECURE &amp; IT SERVICES
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      {" "}
                      Make The Easiest Solution For You{" "}
                    </h1>
                    <div className="hero-big">
                      <h1
                        className="hero-big_text"
                        data-ani="slideinup"
                        data-ani-delay="0.7s"
                      >
                        WEBTECK
                      </h1>
                    </div>
                    <div className="btn-group justify-content-center">
                      <div
                        className
                        data-ani="slideinleft"
                        data-ani-delay="0.8s"
                      >
                        <a
                          href="contact.html"
                          className="th-btn style3 style-radius"
                        >
                          Get Started Now
                        </a>
                      </div>
                      <div
                        className="call-btn"
                        data-ani="slideinright"
                        data-ani-delay="0.9s"
                      >
                        <a
                          href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                          className="play-btn popup-video"
                        >
                          <i className="fas fa-play" />
                        </a>
                        <div className="media-body">
                          <a
                            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                            className="btn-title popup-video"
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
          // data-slider-prev="#heroSlide3"
          onClick={handleHeroPrev}
          className="slider-arrow slider-prev"
        >
          <i className="far fa-arrow-left" />
        </button>
        <button
          // data-slider-next="#heroSlide3"
          onClick={handleHeroNext}
          className="slider-arrow slider-next"
        >
          <i className="far fa-arrow-right" />
        </button>
      </div>
      {/*======== / Hero Section ========*/}
      {/*==============================
About Area  
==============================*/}
      <div className=" overflow-hidden space">
        <div className="container th-container4">
          <div className="title-area text-center">
            <span className="sub-title">Our Core Features</span>
            <h2 className="sec-title">
              A new way to approach customer-driven data
            </h2>
          </div>
          <div className="row gy-4 justify-content-center justify-content-lg-between">
            <div className="col-lg-4 col-md-6">
              <div className="choose-feature">
                <div className="box-icon">
                  <img src="assets/img/icon/feature_box_1.svg" alt="Icon" />
                </div>
                <div className="choose-feature_content">
                  <h3 className="box-title">Realtime Conversation</h3>
                  <p className="choose-feature_text">
                    Pharetra nulla quisque iaculis suspense inceptos. Facilisi
                    nisl.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="choose-feature">
                <div className="box-icon">
                  <img src="assets/img/icon/feature_box_2.svg" alt="Icon" />
                </div>
                <div className="choose-feature_content">
                  <h3 className="box-title">Personalized Chat Visual</h3>
                  <p className="choose-feature_text">
                    Creating a personalized chat visual requires more specific.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="choose-feature">
                <div className="box-icon">
                  <img src="assets/img/icon/feature_box_3.svg" alt="Icon" />
                </div>
                <div className="choose-feature_content">
                  <h3 className="box-title">Higher Response Rate</h3>
                  <p className="choose-feature_text">
                    To achieve a higher response rate or any other context you
                    can consider
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="overflow-hidden">
        <div className="container th-container4">
          <div
            className="cta-sec6 background-image bg-theme"
            data-bg-src="assets/img/bg/cta_bg_6.jpg"
          >
            <div className="cta-content">
              <div className="cta-wrapper">
                <div className="cta-icon">
                  <a href="tel:+1235859459">
                    <img src="assets/img/icon/call.svg" alt="" />
                  </a>
                </div>
                <div className="media-body">
                  <span className="header-info_label text-white">
                    Call For More Info
                  </span>
                  <p className="header-info_link">
                    <a href="tel:+1235859459">(+123) 5859 459</a>
                  </p>
                </div>
              </div>
              <div className="title-area mb-0">
                <h4 className="sec-title text-white">
                  Let’s Request a Schedule For Free Consultation
                </h4>
              </div>
              <div className="cta-group">
                <a
                  href="contact.html"
                  className="th-btn th-border style-radius"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==============================
About Area  
==============================*/}
      <div className="overflow-hidden space" id="about-sec">
        <div className="container th-container4">
          <div className="about-area5">
            <div className="row">
              <div className="col-xl-6">
                <div className="pe-xl-5 me-xl-4">
                  <div className="title-area mb-30">
                    <span className="sub-title">About Us</span>
                    <h2 className="sec-title">
                      Innovate business solution for startup comapnies
                    </h2>
                  </div>
                  <p className="mt-n2 mb-25">
                    Lorem ipsum dolor amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Libero volutpat sed cras ornare.
                  </p>
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="far fa-check-circle" /> Identify growth
                        opportunities and expand market presence{" "}
                      </li>
                      <li>
                        <i className="far fa-check-circle" /> Enhance
                        operational efficiency and reduce waste
                      </li>
                      <li>
                        <i className="far fa-check-circle" /> Make informed
                        decisions based on data-driven insights
                      </li>
                    </ul>
                  </div>
                  <div className="about-btn mt-50">
                    <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="th-btn popup-video style-radius"
                    >
                      <i className="fa-solid fa-circle-play me-2" />
                      View Client Stories
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="img-box6">
                  <div className="img1">
                    <img src="assets/img/normal/about_5_1.jpg" alt="About" />
                  </div>
                  <div className="th-experience dance">
                    <div className="th-experience_content">
                      <h2 className="experience-year">
                        <span className="counter-number">25</span>
                      </h2>
                      <p className="experience-text">
                        Years of experience in startup building
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="down-option-area">
            <div className="down-option-area_wrapper">
              <div className="about-client-box mb-sm-0 mb-3">
                <div className="client-thumb-group">
                  <div className="thumb">
                    <img
                      src="assets/img/testimonial/client-img-1-1.png"
                      alt="avater"
                    />
                  </div>
                  <div className="thumb">
                    <img
                      src="assets/img/testimonial/client-img-1-2.png"
                      alt="avater"
                    />
                  </div>
                  <div className="thumb">
                    <img
                      src="assets/img/testimonial/client-img-1-3.png"
                      alt="avater"
                    />
                  </div>
                </div>
                <span className="cilent-box_title">Make An Appointment</span>
              </div>
              <div className="about-counter">
                <h2 className="mb-0">
                  <span className="counter-number">258362548</span>
                </h2>
                <span className="cilent-box_title">
                  Happily{" "}
                  <span className="cilent-box_title">active client’s</span>
                </span>
              </div>
              <div className="cilent-box">
                <div className="about_review">
                  <i className="fa-sharp fa-solid fa-star" />
                  <i className="fa-sharp fa-solid fa-star" />
                  <i className="fa-sharp fa-solid fa-star" />
                  <i className="fa-sharp fa-solid fa-star" />
                  <i className="fa-sharp fa-solid fa-star" />
                </div>
                <h4 className="cilent-box_counter">
                  <span className="counter-number">2960</span>+ Client Reviews
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==============================
Service Area  
==============================*/}
      <section className="service-area7 m-4 mt-0 space" id="service-sec">
        <div className="container th-container4">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="title-area text-center">
                <span className="sub-title">WHAT WE DO</span>
                <h2 className="sec-title">How To Grow Your Business</h2>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="serviceSlider7"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="service-grid7 th-ani">
                    <div className="service-grid7_icon">
                      <img
                        src="assets/img/icon/service_grid_1.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="service-grid7_content">
                      <h3 className="box-title">
                        <a href="service-details.html">Web Marketing</a>
                      </h3>
                      <p className="service-grid7_text">
                        Web marketing, also known as online marketing or digital
                        marketing encompasses{" "}
                      </p>
                      <a href="service-details.html" className="line-btn">
                        Learn More
                        <i className="fa-regular fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-grid7 th-ani">
                    <div className="service-grid7_icon">
                      <img
                        src="assets/img/icon/service_grid_2.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="service-grid7_content">
                      <h3 className="box-title">
                        <a href="service-details.html">Web Development</a>
                      </h3>
                      <p className="service-grid7_text">
                        Web development involves creating and maintaining
                        websites or web applications
                      </p>
                      <a href="service-details.html" className="line-btn">
                        Learn More
                        <i className="fa-regular fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-grid7 th-ani">
                    <div className="service-grid7_icon">
                      <img
                        src="assets/img/icon/service_grid_3.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="service-grid7_content">
                      <h3 className="box-title">
                        <a href="service-details.html">Creative Layout</a>
                      </h3>
                      <p className="service-grid7_text">
                        Creative layout design involves skillfully arranging
                        visual elements, colors
                      </p>
                      <a href="service-details.html" className="line-btn">
                        Learn More
                        <i className="fa-regular fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-grid7 th-ani">
                    <div className="service-grid7_icon">
                      <img
                        src="assets/img/icon/service_grid_4.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="service-grid7_content">
                      <h3 className="box-title">
                        <a href="service-details.html">Product Design</a>
                      </h3>
                      <p className="service-grid7_text">
                        Product design is the process of creating and refining a
                        tangible or digital product
                      </p>
                      <a href="service-details.html" className="line-btn">
                        Learn More
                        <i className="fa-regular fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-grid7 th-ani">
                    <div className="service-grid7_icon">
                      <img
                        src="assets/img/icon/service_grid_1.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="service-grid7_content">
                      <h3 className="box-title">
                        <a href="service-details.html">Web Marketing</a>
                      </h3>
                      <p className="service-grid7_text">
                        Web marketing, also known as online marketing or digital
                        marketing encompasses{" "}
                      </p>
                      <a href="service-details.html" className="line-btn">
                        Learn More
                        <i className="fa-regular fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-grid7 th-ani">
                    <div className="service-grid7_icon">
                      <img
                        src="assets/img/icon/service_grid_2.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="service-grid7_content">
                      <h3 className="box-title">
                        <a href="service-details.html">Web Development</a>
                      </h3>
                      <p className="service-grid7_text">
                        Web development involves creating and maintaining
                        websites or web applications
                      </p>
                      <a href="service-details.html" className="line-btn">
                        Learn More
                        <i className="fa-regular fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-grid7 th-ani">
                    <div className="service-grid7_icon">
                      <img
                        src="assets/img/icon/service_grid_3.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="service-grid7_content">
                      <h3 className="box-title">
                        <a href="service-details.html">Creative Layout</a>
                      </h3>
                      <p className="service-grid7_text">
                        Creative layout design involves skillfully arranging
                        visual elements, colors
                      </p>
                      <a href="service-details.html" className="line-btn">
                        Learn More
                        <i className="fa-regular fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              // data-slider-prev="#serviceSlider7"
              onClick={handleServicesPrev}
              className="slider-arrow slider-prev"
            >
              <i className="far fa-arrow-left" />
            </button>
            <button
              // data-slider-next="#serviceSlider7"

              onClick={handleServicesNext}
              className="slider-arrow slider-next"
            >
              <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>{" "}
      {/*==============================
Team Area  
==============================*/}
      <section
        className="team-area2 th-radius3 m-4 mt-0 mb-0 bg-theme space"
        data-bg-src="assets/img/bg/team_bg_1.jpg"
      >
        <div className="container th-container4">
          <div className="title-area">
            <span className="sub-title style1 text-white">
              Dedicated Team Members
            </span>
            <h2 className="sec-title text-white">
              We’ve professional dedicated team members
            </h2>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="teamSlider4"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
            >
              <div className="swiper-wrapper">
                {/* Single Item */}
                <div className="swiper-slide">
                  <div className="th-team team-card2">
                    <div className="team-img">
                      <img src="assets/img/team/team_4_1.jpg" alt="Team" />
                      <div className="social-links">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-details.html">Honey Deep</a>
                        </h3>
                        <span className="team-desig">Chief Officer</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="swiper-slide">
                  <div className="th-team team-card2">
                    <div className="team-img">
                      <img src="assets/img/team/team_4_2.jpg" alt="Team" />
                      <div className="social-links">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-details.html">Mac Alexixe</a>
                        </h3>
                        <span className="team-desig">CEO, of Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="swiper-slide">
                  <div className="th-team team-card2">
                    <div className="team-img">
                      <img src="assets/img/team/team_4_3.jpg" alt="Team" />
                      <div className="social-links">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-details.html">Alex Julian</a>
                        </h3>
                        <span className="team-desig">Instructor</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="swiper-slide">
                  <div className="th-team team-card2">
                    <div className="team-img">
                      <img src="assets/img/team/team_4_4.jpg" alt="Team" />
                      <div className="social-links">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-details.html">Jenifer Lopez</a>
                        </h3>
                        <span className="team-desig">Instructor</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="swiper-slide">
                  <div className="th-team team-card2">
                    <div className="team-img">
                      <img src="assets/img/team/team_4_1.jpg" alt="Team" />
                      <div className="social-links">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-details.html">Henry Joseph</a>
                        </h3>
                        <span className="team-desig">Senior Instructor</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="swiper-slide">
                  <div className="th-team team-card2">
                    <div className="team-img">
                      <img src="assets/img/team/team_4_2.jpg" alt="Team" />
                      <div className="social-links">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-details.html">Honey Deep</a>
                        </h3>
                        <span className="team-desig">Chief Officer</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="swiper-slide">
                  <div className="th-team team-card2">
                    <div className="team-img">
                      <img src="assets/img/team/team_4_3.jpg" alt="Team" />
                      <div className="social-links">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-details.html">Mac Alexixe</a>
                        </h3>
                        <span className="team-desig">CEO, of Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="swiper-slide">
                  <div className="th-team team-card2">
                    <div className="team-img">
                      <img src="assets/img/team/team_4_4.jpg" alt="Team" />
                      <div className="social-links">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-details.html">Alex Julian</a>
                        </h3>
                        <span className="team-desig">Instructor</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="swiper-slide">
                  <div className="th-team team-card2">
                    <div className="team-img">
                      <img src="assets/img/team/team_4_1.jpg" alt="Team" />
                      <div className="social-links">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-details.html">Jenifer Lopez</a>
                        </h3>
                        <span className="team-desig">Instructor</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Item */}
                <div className="swiper-slide">
                  <div className="th-team team-card2">
                    <div className="team-img">
                      <img src="assets/img/team/team_4_2.jpg" alt="Team" />
                      <div className="social-links">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://linkedin.com/">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="media-body">
                        <h3 className="box-title">
                          <a href="team-details.html">Henry Joseph</a>
                        </h3>
                        <span className="team-desig">Senior Instructor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              // data-slider-prev="#teamSlider4"
              onClick={handleTeamPrev}
              className="slider-arrow style2 slider-prev"
            >
              <i className="far fa-arrow-left" />
            </button>
            <button
              // data-slider-next="#teamSlider4"
              onClick={handleTeamNext}
              className="slider-arrow style2 slider-next"
            >
              <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>
      {/*==============================
Faq Area
==============================*/}
      <div
        className="faq-area position-relative space overflow-hidden"
        id="faq-sec"
      >
        <div className="container th-container4">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="faq-img4">
                <div className="img1 th-anim">
                  <img src="assets/img/normal/faq_4_1.png" alt="faq" />
                </div>
                <div className="img2 dance2 th-anim">
                  <img src="assets/img/normal/faq_4_2.png" alt="faq" />
                </div>
                <div className="faq-client-box jump">
                  <div className="client-thumb-group">
                    <img
                      src="assets/img/testimonial/client-img-1.png"
                      alt="avater"
                    />
                  </div>
                  <span className="cilent-box_title">Customer Feedbacks</span>
                </div>
                <div className="faq-shape" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xl-5 ms-xl-3">
                <div className="title-area pe-xl-5 me-xl-4 text-center text-xl-start">
                  <span className="sub-title style1">
                    Talk To About Any Question?
                  </span>
                  <h2 className="sec-title">
                    Share the joy of achieving glorious moments &amp; climbed up
                    the top
                  </h2>
                </div>
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-1">
                      <button
                        className="accordion-button "
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
                      className="accordion-collapse collapse show"
                      aria-labelledby="collapse-item-1"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          I appreciate your willingness to help, but it's
                          important to clarify that I am a virtual assistant
                          created by OpenAI, and I don't have a business or
                          personal needs. My purpose is to assist and provide
                          information to the best of my ability
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-2">
                      <button
                        className="accordion-button collapsed"
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
                      className="accordion-collapse collapse "
                      aria-labelledby="collapse-item-2"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
                          As of my last knowledge update in January 2022, Digix
                          refers to DigixGlobal, a company that tokenizes
                          physical assets, primarily gold, on the Ethereum
                          blockchain.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-card">
                    <div className="accordion-header" id="collapse-item-3">
                      <button
                        className="accordion-button collapsed"
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
                      className="accordion-collapse collapse "
                      aria-labelledby="collapse-item-3"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">
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
      {/*==============================
Project Area  
==============================*/}
      <section
        className="project-area-5 th-radius3 m-4 mt-0 mb-0 overflow-hidden space"
        id="project-sec"
      >
        <div className="container th-container4">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 mb-n2 mb-lg-0">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title style1 text-white">
                  LATEST PROJECT
                </span>
                <h2 className="sec-title text-white">
                  Project Success Stories
                </h2>
              </div>
            </div>
            <div className="col-auto">
              <div className="sec-btn">
                <a href="project.html" className="th-btn style3 style-radius">
                  View All Project
                </a>
              </div>
            </div>
          </div>{" "}
          {/* / Title row */}
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="projectSlider5"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="project-card5">
                    <div className="project-img">
                      <img
                        src="assets/img/project/project_5_1.jpg"
                        alt="project image"
                      />
                    </div>
                    <div className="project-content">
                      <h3 className="box-title">
                        <a href="project-details.html">
                          Major Insurance Provider Saves $750k per Month With
                          Big Data Migration Month
                        </a>
                      </h3>
                      <p className="project-card5_desc">
                        The company needed to complete a complex migration on a
                        tight deadline to avoid millions of dollars in
                        post-contract fees and fines.
                      </p>
                      <a href="project-details.html" className="line-btn">
                        Learn More
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="project-card5">
                    <div className="project-img">
                      <img
                        src="assets/img/project/project_5_2.jpg"
                        alt="project image"
                      />
                    </div>
                    <div className="project-content">
                      <h3 className="box-title">
                        <a href="project-details.html">
                          Major insurance provider to a big data cost savings of
                          $750,000 is a significant
                        </a>
                      </h3>
                      <p className="project-card5_desc">
                        Project Success is a broad term that can be interpreted
                        in various ways depending on the context and the goals
                        of a specific project.
                      </p>
                      <a href="project-details.html" className="line-btn">
                        Learn More
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="project-card5">
                    <div className="project-img">
                      <img
                        src="assets/img/project/project_5_3.jpg"
                        alt="project image"
                      />
                    </div>
                    <div className="project-content">
                      <h3 className="box-title">
                        <a href="project-details.html">
                          That's a significant achievement! Saving $750,000 per
                          month through a big data migration
                        </a>
                      </h3>
                      <p className="project-card5_desc">
                        Project Success is a term that generally refers to the
                        achievement of the goals and objectives set for a
                        specific project.
                      </p>
                      <a href="project-details.html" className="line-btn">
                        Learn More
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="project-card5">
                    <div className="project-img">
                      <img
                        src="assets/img/project/project_5_4.jpg"
                        alt="project image"
                      />
                    </div>
                    <div className="project-content">
                      <h3 className="box-title">
                        <a href="project-details.html">
                          The headline Major Insurance Provider Saves $750k per
                          Month With Big Data Migration
                        </a>
                      </h3>
                      <p className="project-card5_desc">
                        Project Success" is a broad term that can be interpreted
                        in various ways depending on the context and the goals
                        of a particular project
                      </p>
                      <a href="project-details.html" className="line-btn">
                        Learn More
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="project-card5">
                    <div className="project-img">
                      <img
                        src="assets/img/project/project_5_5.jpg"
                        alt="project image"
                      />
                    </div>
                    <div className="project-content">
                      <h3 className="box-title">
                        <a href="project-details.html">
                          Major Insurance Provider Saves $750k per Month With
                          Big Data Migration Month
                        </a>
                      </h3>
                      <p className="project-card5_desc">
                        The company needed to complete a complex migration on a
                        tight deadline to avoid millions of dollars in
                        post-contract fees and fines.
                      </p>
                      <a href="project-details.html" className="line-btn">
                        Learn More
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="project-card5">
                    <div className="project-img">
                      <img
                        src="assets/img/project/project_5_3.jpg"
                        alt="project image"
                      />
                    </div>
                    <div className="project-content">
                      <h3 className="box-title">
                        <a href="project-details.html">
                          That's a significant achievement! Saving $750,000 per
                          month through a big data migration
                        </a>
                      </h3>
                      <p className="project-card5_desc">
                        Project Success is a term that generally refers to the
                        achievement of the goals and objectives set for a
                        specific project.
                      </p>
                      <a href="project-details.html" className="line-btn">
                        Learn More
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              // data-slider-prev="#projectSlider5"
              onClick={handleProjectPrev}
              className="slider-arrow slider-prev"
            >
              <i className="far fa-arrow-left" />
            </button>
            <button
              // data-slider-next="#projectSlider5"
              onClick={handleProjectNext}
              className="slider-arrow slider-next"
            >
              <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>{" "}
      {/*==============================
Process Area  
==============================*/}
      <section className="space" id="process-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">WORK PROCESS</span>
            <h2 className="sec-title">
              How to work <span className="text-theme">it!</span>
            </h2>
          </div>
          <div className="process-card-area">
            <div className="process-line position-top">
              <img src="assets/img/bg/process_line_2.svg" alt="line" />
            </div>
            <div className="row gy-40 justify-content-between">
              <div className="col-sm-6 col-xl-auto process-card-wrap">
                <div className="process-card">
                  <div className="pulse" />
                  <div className="process-card_icon">
                    <img src="assets/img/icon/process_box_1.png" alt="icon" />
                  </div>
                  <h2 className="box-title">Select a project</h2>
                  <p className="process-card_text">
                    Continua scale empowered metrics with cost effective
                    innovation.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-auto process-card-wrap">
                <div className="process-card">
                  <div className="pulse" />
                  <div className="process-card_icon">
                    <img src="assets/img/icon/process_box_2.png" alt="icon" />
                  </div>
                  <h2 className="box-title">Project analysis</h2>
                  <p className="process-card_text">
                    Continua scale empowered metrics with cost effective
                    innovation.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-auto process-card-wrap">
                <div className="process-card">
                  <div className="pulse" />
                  <div className="process-card_icon">
                    <img src="assets/img/icon/process_box_3.png" alt="icon" />
                  </div>
                  <h2 className="box-title">Plan Execute</h2>
                  <p className="process-card_text">
                    Continua scale empowered metrics with cost effective
                    innovation.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-auto process-card-wrap">
                <div className="process-card">
                  <div className="pulse" />
                  <div className="process-card_icon">
                    <img src="assets/img/icon/process_box_4.png" alt="icon" />
                  </div>
                  <h2 className="box-title">Deliver result</h2>
                  <p className="process-card_text">
                    Continua scale empowered metrics with cost effective
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==============================
Testimonial Area  
==============================*/}
      <section
        className="overflow-hidden bg-top-center th-radius3 m-4 mt-0 space"
        id="testi-sec"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg/testimonial_bg_5.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          // height: "200px",
        }}
      >
        <div className="container th-container4">
          <div className="row justify-content-lg-between justify-content-center align-items-end">
            <div className="col-xxl-4 col-xl-6">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title style1 text-white">
                  Customer Feedbacks
                </span>
                <h2 className="sec-title text-white">
                  See what our clients have to say
                </h2>
              </div>
            </div>
            <div className="col-lg-auto d-none d-xl-block">
              <div className="sec-btn">
                <div className="icon-box">
                  <button
                    // data-slider-prev="#testiSlider5"
                    onClick={handleTestiPrev}
                    className="slider-arrow style2 default"
                  >
                    <i className="far fa-arrow-left" />
                  </button>
                  <button
                    // data-slider-next="#testiSlider5"
                    onClick={handleTestiNext}
                    className="slider-arrow style2 default"
                  >
                    <i className="far fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="testiSlider5"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-box5 th-ani">
                    <div className="testi-box5_image">
                      <img
                        src="assets/img/testimonial/testi_img_1.png"
                        alt="image"
                      />
                    </div>
                    <p className="testi-box5_text">
                      “Lectus volpat faucibus placerat eget nulla sodales
                      aliquam molestie ante, himenaeos fames reinvent
                      prospective suscipit arcu cras cenas penatibus vivamus,
                      aenean primis enim”
                    </p>
                    <div className="testi-box5_wrapper">
                      <div className="testi-box5_profile">
                        <div className="testi-box5_author">
                          <img
                            src="assets/img/testimonial/testi_2_1.png"
                            alt="Avater"
                          />
                        </div>
                        <div className="testi-box5_info">
                          <h3 className="box-title">Andrew D. Smith</h3>
                          <span className="testi-box5_desig">Manager</span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box5 th-ani">
                    <div className="testi-box5_image">
                      <img
                        src="assets/img/testimonial/testi_img_1.png"
                        alt="image"
                      />
                    </div>
                    <p className="testi-box5_text">
                      “Objectively visualize error-free technology for B2B
                      alignment. Monotonectally harness reinvent prospective an
                      expanded array of models via effective collaboration in
                      the success.”
                    </p>
                    <div className="testi-box5_wrapper">
                      <div className="testi-box5_profile">
                        <div className="testi-box5_author">
                          <img
                            src="assets/img/testimonial/testi_2_2.png"
                            alt="Avater"
                          />
                        </div>
                        <div className="testi-box5_info">
                          <h3 className="box-title">Brooklyn Simmons</h3>
                          <span className="testi-box5_desig">
                            CTO of Portfolio
                          </span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box5 th-ani">
                    <div className="testi-box5_image">
                      <img
                        src="assets/img/testimonial/testi_img_1.png"
                        alt="image"
                      />
                    </div>
                    <p className="testi-box5_text">
                      “Completely drive innovative value reinvent prospective
                      whereas out-of-the-box paradigms. Interactively pursue
                      stand-alone markets after global say that they results..”
                    </p>
                    <div className="testi-box5_wrapper">
                      <div className="testi-box5_profile">
                        <div className="testi-box5_author">
                          <img
                            src="assets/img/testimonial/testi_2_3.png"
                            alt="Avater"
                          />
                        </div>
                        <div className="testi-box5_info">
                          <h3 className="box-title">Savannah Nguyen</h3>
                          <span className="testi-box5_desig">
                            CEO at Rimasu
                          </span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box5 th-ani">
                    <div className="testi-box5_image">
                      <img
                        src="assets/img/testimonial/testi_img_1.png"
                        alt="image"
                      />
                    </div>
                    <p className="testi-box5_text">
                      “The best service reinvent prospective metrics before
                      granular schema. Professionally metrics before expedite
                      client-centric or analyzing before expedite methods ”
                    </p>
                    <div className="testi-box5_wrapper">
                      <div className="testi-box5_profile">
                        <div className="testi-box5_author">
                          <img
                            src="assets/img/testimonial/testi_2_4.png"
                            alt="Avater"
                          />
                        </div>
                        <div className="testi-box5_info">
                          <h3 className="box-title">Cameron Williamson</h3>
                          <span className="testi-box5_desig">Founder CEO</span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box5 th-ani">
                    <div className="testi-box5_image">
                      <img
                        src="assets/img/testimonial/testi_img_1.png"
                        alt="image"
                      />
                    </div>
                    <p className="testi-box5_text">
                      “I've had the pleasure of working with Webteck for the
                      past year, and I can confidently say that they have been
                      instrumental say that they in the success.”
                    </p>
                    <div className="testi-box5_wrapper">
                      <div className="testi-box5_profile">
                        <div className="testi-box5_author">
                          <img
                            src="assets/img/testimonial/testi_2_2.png"
                            alt="Avater"
                          />
                        </div>
                        <div className="testi-box5_info">
                          <h3 className="box-title">Brooklyn Simmons</h3>
                          <span className="testi-box5_desig">
                            Project Manager
                          </span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box5 th-ani">
                    <div className="testi-box5_image">
                      <img
                        src="assets/img/testimonial/testi_img_1.png"
                        alt="image"
                      />
                    </div>
                    <p className="testi-box5_text">
                      “Phosfluorescently reinvent prospective metrics before
                      granular schema. Professionally metrics before expedite
                      client-centric before expedite methods .”
                    </p>
                    <div className="testi-box5_wrapper">
                      <div className="testi-box5_profile">
                        <div className="testi-box5_author">
                          <img
                            src="assets/img/testimonial/testi_2_3.png"
                            alt="Avater"
                          />
                        </div>
                        <div className="testi-box5_info">
                          <h3 className="box-title">Savannah Nguyen</h3>
                          <span className="testi-box5_desig">Head Manager</span>
                        </div>
                      </div>
                      <div className="testi-quote">
                        <img src="assets/img/icon/quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-box5 th-ani">
                    <div className="testi-box5_image">
                      <img
                        src="assets/img/testimonial/testi_img_1.png"
                        alt="image"
                      />
                    </div>
                    <p className="testi-box5_text">
                      “If you have specific questions about gathering or
                      analyzing customer feedback, or if you're looking for
                      general information or analyzing feel free reinvent
                      prospective to ask.”
                    </p>
                    <div className="testi-box5_wrapper">
                      <div className="testi-box5_profile">
                        <div className="testi-box5_author">
                          <img
                            src="assets/img/testimonial/testi_2_1.png"
                            alt="Avater"
                          />
                        </div>
                        <div className="testi-box5_info">
                          <h3 className="box-title">Cameron Williamson</h3>
                          <span className="testi-box5_desig">
                            UI/UX Designer
                          </span>
                        </div>
                      </div>
                      <div className="testi-quote">
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
      {/*==============================
Blog Area  
==============================*/}
      <section
        className="bg-top-right overflow-hidden space-bottom"
        id="blog-sec"
        data-bg-src="assets/img/bg/blog_bg_1.png"
      >
        <div className="container space-bottom">
          <div className="title-area text-center">
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span
                  className="mask-icon"
                  data-mask-src="assets/img/theme-img/title_shape_1.svg"
                />
                <img src="assets/img/theme-img/title_shape_1.svg" alt="shape" />
              </div>
              NEWS &amp; ARTICLES
            </span>
            <h2 className="sec-title">
              Get Every Single Update <span className="text-theme">Blog</span>
            </h2>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="blogSlider1"
              data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_1.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          15 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Unsatiable entreaties may collecting Power.
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />{" "}
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_2.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          16 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />3 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Regional Manager &amp; limited time management.
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />{" "}
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_3.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          17 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          What’s the Holding Back the It Solution Industry?
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />{" "}
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_4.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          19 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />4 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Latin derived from Cicero's 1st-century BC
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />{" "}
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_1.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          15 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Unsatiable entreaties may collecting Power.
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />{" "}
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_2.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          16 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />3 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Regional Manager &amp; limited time management.
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />{" "}
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_3.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          17 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />2 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          What’s the Holding Back the It Solution Industry?
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />{" "}
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_4.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          19 Jan, 2024
                        </a>
                        <a href="blog.html">
                          <i className="fal fa-comments" />4 Comments
                        </a>
                      </div>
                      <h3 className="box-title">
                        <a href="blog-details.html">
                          Latin derived from Cicero's 1st-century BC
                        </a>
                      </h3>
                      <div className="blog-bottom">
                        <a href="blog.html" className="author">
                          <img
                            src="assets/img/blog/author-1-1.png"
                            alt="avater"
                          />{" "}
                          By Themeholy
                        </a>
                        <a href="blog-details.html" className="line-btn">
                          Read More
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              // data-slider-prev="#blogSlider1"
              onClick={handleBlogPrev}
              className="slider-arrow style3 slider-prev"
            >
              <i className="far fa-arrow-left" />
            </button>
            <button
              // data-slider-next="#blogSlider1"
              onClick={handleBlogNext}
              className="slider-arrow style3 slider-next"
            >
              <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
        <div className="container">
          <div className="slider-area text-center">
            <div
              className="swiper th-slider"
              id="swiperbrand"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"5"}}}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_1.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_2.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_3.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_4.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_5.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_6.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_1.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_2.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_3.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_4.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
                    <img
                      src="assets/img/brand/brand_1_5.png"
                      alt="Brand Logo"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-box">
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
        {/* <div className="shape-mockup" data-bottom={0} data-left={0}>
          <div className="particle-2 small" id="particle-4" />
        </div> */}
      </section>
      {/*==============================
Footer Area
==============================*/}
      <Footer />
      {/*********************************
Code End  Here 
******************************** */}
      {/* Scroll To Top */}
      {/* <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          />
        </svg>
      </div> */}
    </body>
  );
}

export default Homenew;
