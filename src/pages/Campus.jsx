/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Campus = () => {
  // at the top video
  const [isPlaying, setIsPlaying] = useState(false);
  const handleVideoClick = (videoElement) => {
    const overlayOn = document.querySelector(".overlay-on");
    if (videoElement.paused || videoElement.ended) {
      videoElement.play();
      setIsPlaying(true);
      overlayOn.classList.remove("bg-[#000000b2]");
    } else {
      videoElement.pause();
      setIsPlaying(false);
      overlayOn.classList.add("bg-[#000000b2]");
    }
  };

  // at the bottom testimonials video
  const [feedPlaying, setfeedPlaying] = useState(false);
  const handleClickfeed = (videoElement) => {
    const overlayOn = document.querySelector(".overlay-on-feed");
    if (videoElement.paused || videoElement.ended) {
      videoElement.play();
      setfeedPlaying(true);
      overlayOn.classList.remove("bg-[#000000b2]");
    } else {
      videoElement.pause();
      setfeedPlaying(false);
      overlayOn.classList.add("bg-[#000000b2]");
    }
  };

  // slider A Look at Ecoworld
  const sliderlook = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     centerMode: false,
      //     slidesToShow: 3,
      //   },
      // },

      // {
      //   breakpoint: 1025,
      //   settings: {
      //     centerMode: false,
      //     slidesToShow: 2,
      //   },
      // },
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  // Accessibility slider
  const sliderAccessibility = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 1025,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  // slider Workspace
  const sliderWorkspace = {
    dots: false,
    arrows: true,
    centerPadding: "0px",
    infinite: true,
    centerMode: true,
    variableLength: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  // sliderFeed slider
  const sliderFeed = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderData = [
    {
      id: 1,
      videoSrc: "/videos/testimonials-item-1.mp4",
      paragraph:
        "Ecoworld is where the future is! And we can say this after having being here for the past 5 years.",
      creator: "Vishakha Nilakhe",
      postAt: "CEO, Kalyan Infra",
    },
    {
      id: 2,
      videoSrc: "/videos/testimonials-item-1.mp4",
      paragraph:
        "Ecoworld is where the future is! And we can say this after having being here for the past 5 years.",
      creator: "Vishakha Nilakhe",
      postAt: "CEO, Kalyan Infra",
    },
    {
      id: 3,
      videoSrc: "/videos/testimonials-item-1.mp4",
      paragraph:
        "Ecoworld is where the future is! And we can say this after having being here for the past 5 years.",
      creator: "Vishakha Nilakhe",
      postAt: "CEO, Kalyan Infra",
    },
    {
      id: 4,
      videoSrc: "/videos/testimonials-item-1.mp4",
      paragraph:
        "Ecoworld is where the future is! And we can say this after having being here for the past 5 years.",
      creator: "Vishakha Nilakhe",
      postAt: "CEO, Kalyan Infra",
    },
  ];

  return (
    <>
      {/* tour around the campus */}
      <section className="py-10 md:py-14 lg:py-24">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <div className="contained border-2 border-lightGray p-2 md:p-6 lg:p-10">
            <div className="relative">
              <video
                loop
                className="video-played w-full max-h-[600px] larger:max-h-[calc(100vh-276px)] object-cover border border-lightGray"
              >
                <source src="/videos/testimonials-item-1.mp4" />
              </video>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center overlay-on">
                <img
                  src={
                    isPlaying
                      ? "/images/light-pause-icon.webp"
                      : "/images/light-play-icon.webp"
                  }
                  alt="light-play-icon"
                  className="circle-play w-full max-w-[40px] md:max-w-[80px] cursor-pointer object-contain duration-300"
                  onClick={() =>
                    handleVideoClick(document.querySelector(".video-played"))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Look at Ecoworld */}
      <section className="py-8  md:py-20 xxl:pt-28 larger:pb-32 relative">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-white leading-normal capitalize">
            A Look at Ecoworld
          </h2>
          <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-white text-center xl:mt-5">
            Explore the campus throungh captivating photos that showcase
            everything that EcoWorld has to offer.
          </p>

          {/* look at ecoworld slider */}
          <div className="lookecoworld mx-[-12px]">
            <Slider
              {...sliderlook}
              className="mt-10 lg:mt-20 larger:mt-28 h-full"
            >
              <div className="px-3 h-full">
                <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                  <div className="relative">
                    <img
                      src="/images/look-ecoworld-item-1.png"
                      alt="light-logo"
                      className="w-full max-h-[600px] object-cover object-top"
                    />

                    <div className="px-4 py-4 md:py-8 lg:py-12">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Active Health Club
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A state of the art club perfect for your fitness needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                  <div className="relative">
                    <img
                      src="/images/look-ecoworld-item-2.png"
                      alt="light-logo"
                      className="w-full max-h-[600px] object-cover object-top"
                    />

                    <div className="px-4 py-4 md:py-8 lg:py-12">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Amphitheatre
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A 500 seater amphitheatre perfect for large events like
                        concerts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                  <div className="relative">
                    <img
                      src="/images/look-ecoworld-item-1.png"
                      alt="light-logo"
                      className="w-full max-h-[600px] object-cover object-top"
                    />

                    <div className="px-4 py-4 md:py-8 lg:py-12">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Active Health Club
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A state of the art club perfect for your fitness needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                  <div className="relative">
                    <img
                      src="/images/look-ecoworld-item-2.png"
                      alt="light-logo"
                      className="w-full max-h-[600px] object-cover object-top"
                    />

                    <div className="px-4 py-4 md:py-8 lg:py-12">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Amphitheatre
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A 500 seater amphitheatre perfect for large events like
                        concerts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="before:absolute before:top-0 before:left-0 before:right-0 before:h-[400px] md:before:h-[600px] before:bg-fadeGreen before:z-[-1]"></div>
      </section>

      {/* Workspace Solutions */}
      <section className="py-8 md:py-10 xxl:pt-28 md:pb-28 larger:pb-32 md:max-xl:mt-10 hidden">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-fadeGreen leading-normal capitalize">
            Workspace Solutions
          </h2>
          <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen text-center xl:mt-5">
            Embrace a new era of work with spaces designed just for you that
            promote innovation and teamwork.
          </p>

          <div className="Workspace-slider mx-[-12px]">
            <Slider
              {...sliderWorkspace}
              className="mt-10 lg:mt-20 larger:mt-28"
            >
              <div className="px-3 h-full">
                <div className="main-contianed bg-white">
                  <div className="relative">
                    <div className="px-4 py-4 md:py-8 lg:py-12 slide-hide">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Active Health Club
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A state of the art club perfect for your fitness needs.
                      </p>
                    </div>
                    <img
                      src="/images/accessibility-slide-1.png"
                      alt="light-logo"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="main-contianed bg-white">
                  <div className="relative">
                    <div className="px-4 py-4 md:py-8 lg:py-12 slide-hide">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Amphitheatre
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A 500 seater amphitheatre perfect for large events like
                        concerts.
                      </p>
                    </div>
                    <img
                      src="/images/accessibility-slide-2.png"
                      alt="light-logo"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="main-contianed bg-white">
                  <div className="relative">
                    <div className="px-4 py-4 md:py-8 lg:py-12 slide-hide">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Active Health Club
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A state of the art club perfect for your fitness needs.
                      </p>
                    </div>
                    <img
                      src="/images/accessibility-slide-1.png"
                      alt="light-logo"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="main-contianed bg-white">
                  <div className="relative">
                    <div className="px-4 py-4 md:py-8 lg:py-12 slide-hide">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Amphitheatre
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A 500 seater amphitheatre perfect for large events like
                        concerts.
                      </p>
                    </div>
                    <img
                      src="/images/accessibility-slide-2.png"
                      alt="light-logo"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="main-contianed bg-white">
                  <div className="relative">
                    <div className="px-4 py-4 md:py-8 lg:py-12 slide-hide">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Active Health Club
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A state of the art club perfect for your fitness needs.
                      </p>
                    </div>
                    <img
                      src="/images/accessibility-slide-1.png"
                      alt="light-logo"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="main-contianed bg-white">
                  <div className="relative">
                    <div className="px-4 py-4 md:py-8 lg:py-12 slide-hide">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Amphitheatre
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A 500 seater amphitheatre perfect for large events like
                        concerts.
                      </p>
                    </div>
                    <img
                      src="/images/accessibility-slide-2.png"
                      alt="light-logo"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="py-4 md:py-10 xxl:pt-28 md:pb-28 larger:pb-32 md:max-xl:mt-10">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-fadeGreen leading-normal capitalize">
            Accessibility
          </h2>
          <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen text-center xl:mt-5">
            Discover a welcoming work enviroment where accessibility to all is a
            priority. From sactile flooring, braillie letters to
            <br className="hidden larger:block" /> wheelchairs ramps, every
            space is designed for easy accessibility.
          </p>

          <div className="Accessibility-slider mx-[-12px]">
            <Slider
              {...sliderAccessibility}
              className="mt-4 lg:mt-20 larger:mt-28"
            >
              <div className="px-3 h-full">
                <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                  <div className="relative">
                    <img
                      src="/images/accessibility-slide-1.png"
                      alt="light-logo"
                      className="w-full object-contain"
                    />

                    <div className="px-4 py-4 md:py-8 lg:py-12">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Active Health Club
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A state of the art club perfect for your fitness needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                  <div className="relative">
                    <img
                      src="/images/accessibility-slide-2.png"
                      alt="light-logo"
                      className="w-full object-contain"
                    />

                    <div className="px-4 py-4 md:py-8 lg:py-12">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Amphitheatre
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A 500 seater amphitheatre perfect for large events like
                        concerts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                  <div className="relative">
                    <img
                      src="/images/accessibility-slide-3.png"
                      alt="light-logo"
                      className="w-full object-contain"
                    />

                    <div className="px-4 py-4 md:py-8 lg:py-12">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Active Health Club
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A state of the art club perfect for your fitness needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                  <div className="relative">
                    <img
                      src="/images/accessibility-slide-1.png"
                      alt="light-logo"
                      className="w-full object-contain"
                    />

                    <div className="px-4 py-4 md:py-8 lg:py-12">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Amphitheatre
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A 500 seater amphitheatre perfect for large events like
                        concerts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                  <div className="relative">
                    <img
                      src="/images/accessibility-slide-2.png"
                      alt="light-logo"
                      className="w-full object-contain"
                    />

                    <div className="px-4 py-4 md:py-8 lg:py-12">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Amphitheatre
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A 500 seater amphitheatre perfect for large events like
                        concerts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 h-full">
                <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                  <div className="relative">
                    <img
                      src="/images/accessibility-slide-3.png"
                      alt="light-logo"
                      className="w-full object-contain"
                    />

                    <div className="px-4 py-4 md:py-8 lg:py-12">
                      <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                        Active Health Club
                      </h2>
                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen xl:mt-2">
                        A state of the art club perfect for your fitness needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-4 md:py-14 xxl:py-20 larger:py-24">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-fadeGreen leading-normal capitalize">
            Sustainability
          </h2>
          <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen text-center xl:mt-5">
            Ecoworld has been recognised as Asia's First Net Zero Campus and has
            won several green awards for its{" "}
            <br className="hidden larger:block" />
            sustainable practices like 100% water recycling and rainwater
            harvesting.
          </p>

          <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 py-2 md:py-4 xl:py-6 bg-white mt-4 lg:mt-24">
            <img
              src="/images/Sustainability-item-1.png"
              alt="Sustainability-item-1"
              className="w-full object-contain"
            />
          </div>

          <div className="text-center mt-4 lg:mt-10">
            <a
              href="/knowmore"
              className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen inline-block"
            >
              Know More
            </a>
          </div>
        </div>
      </section>

      {/* Ratings & Certifications */}
      <section className="py-8 md:py-14 xxl:pt-6 xxl:pb-24 larger:pt-20 larger:pb-44">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-fadeGreen leading-normal capitalize">
            Ratings & Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 mt-4 md:mt-20 lg:mt-20 larger:mt-24">
            <div className="lg:pl-14 xl:pl-24">
              <div className="grid grid-cols-2 items-center gap-10">
                <img
                  src="/images/rating&certificate-items-1.png"
                  alt="light-logo"
                  className="w-full max-w-[240px] max-h-[90px] object-contain"
                />
                <img
                  src="/images/rating&certificate-items-2.png"
                  alt="light-logo"
                  className="w-full max-w-[120px] max-h-[90px] object-contain"
                />
              </div>

              <div className="grid grid-cols-3 items-center gap-10 md:gap-4 my-10">
                <img
                  src="/images/rating&certificate-items-3.png"
                  alt="light-logo"
                  className="w-full max-w-[120px] max-h-[120px] object-contain"
                />
                <img
                  src="/images/rating&certificate-items-4.png"
                  alt="light-logo"
                  className="w-full max-w-[120px] max-h-[120px] object-contain"
                />
                <img
                  src="/images/rating&certificate-items-5.png"
                  alt="light-logo"
                  className="w-full max-w-[120px] max-h-[120px] object-contain"
                />
              </div>

              <div className="grid grid-cols-3 items-center gap-10 md:gap-4">
                <img
                  src="/images/rating&certificate-items-6.png"
                  alt="light-logo"
                  className="w-full max-w-[120px] max-h-[100px] object-contain"
                />
                <img
                  src="/images/rating&certificate-items-7.png"
                  alt="light-logo"
                  className="w-full max-w-[200px] max-h-[100px] object-contain"
                />
                <img
                  src="/images/rating&certificate-items-8.png"
                  alt="light-logo"
                  className="w-full max-w-[120px] max-h-[100px] object-contain"
                />
              </div>
            </div>

            <div className="border-2 border-lightGray p-4 md:p-8 lg:p-14">
              <div className="flex items-baseline gap-2 sm:gap-4 duration-200 p-2 larger:p-4">
                <div className="border border-black p-[2px] md:p-1 rounded-full">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                  Largest business park to be certified under LEED ARC
                </h5>
              </div>
              <div className="flex items-baseline gap-2 sm:gap-4 duration-200 p-2 larger:p-4">
                <div className="border border-black p-[2px] md:p-1 rounded-full">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                  USGBC Gold Rated Grade A Commercial Campus Development
                </h5>
              </div>
              <div className="flex items-baseline gap-2 sm:gap-4 duration-200 p-2 larger:p-4">
                <div className="border border-black p-[2px] md:p-1 rounded-full">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                  One of the Largest 'Grade-A' Campuses in Asia
                </h5>
              </div>
              <div className="flex items-baseline gap-2 sm:gap-4 duration-200 p-2 larger:p-4">
                <div className="border border-black p-[2px] md:p-1 rounded-full">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                  Brookfield Properties is the Founding Member of CHBDN and
                  signed up for 'The Valuable 500'
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current tenants at Ecoworld */}
      <section className="py-8 md:py-20 xl:py-40 bg-[#595a5c]">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <h2 className="md:text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-white leading-normal capitalize">
            Tenants at Ecoworld
          </h2>
          <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-white md:text-center mt-8">
            Ecoworld has emerged as a preferred destination for leading
            organisations and is committed{" "}
            <br className="hidden larger:block" /> to becoming a home to India
            Inc. with its collaborative work cultures.
          </p>

          <div className="md:flex justify-center items-center gap-3 mt-10 max">
            <a
              href="#Shell"
              className="font-SangBleuKingdomTrial font-light text-xs md:text-sm leading-normal text-white mt-5 block max-md:border-l-[3px] max-md:pl-5"
            >
              Shell
            </a>
            <a
              href="#MorganStanley"
              className="font-SangBleuKingdomTrial font-light text-xs md:text-sm leading-normal text-white mt-5 block border-l-[3px] pl-5"
            >
              Morgan Stanley
            </a>
            <a
              href="#KPMG"
              className="font-SangBleuKingdomTrial font-light text-xs md:text-sm leading-normal text-white mt-5 block border-l-[3px] pl-5"
            >
              KPMG
            </a>
            <a
              href="#StateStreet"
              className="font-SangBleuKingdomTrial font-light text-xs md:text-sm leading-normal text-white mt-5 block border-l-[3px] pl-5"
            >
              State Street
            </a>
          </div>
        </div>
      </section>

      {/* feedbacks or testimonials */}
      <section className="pt-14 larger:py-44">
        <div className="container xl:px-24 pb-32">
          <div className="slider-feed mx-[-12px]">
            <Slider {...sliderFeed}>
              {sliderData.map((slide, id) => (
                <div className="px-3 h-full" key={id}>
                  <div className="grid lg:grid-cols-2 items-center gap-14">
                    <div className="border-2 border-lightGray p-2 md:p-4">
                      <div className="containedfeed relative">
                        <video
                          loop
                          className={`video-played-feed-${id} w-full max-h-[800px] object-cover border border-lightGray`}
                        >
                          <source src={slide.videoSrc} />
                        </video>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center overlay-on-feed">
                          <img
                            src={
                              feedPlaying
                                ? "/images/light-pause-icon.webp"
                                : "/images/light-play-icon.webp"
                            }
                            alt="light-play-icon"
                            className="circle-play w-full max-w-[40px] md:max-w-[80px] cursor-pointer object-contain duration-300"
                            onClick={() =>
                              handleClickfeed(
                                document.querySelector(
                                  `.video-played-feed-${id}`
                                )
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <img
                        src="/images/revert-inverted-comma.png"
                        alt="inverted commaa"
                        className="w-full max-w-[40px] md:max-w-[60px] object-contain"
                      />

                      <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen mt-10 lg:mt-4 xxl:mt-14">
                        "{slide.paragraph}"
                      </p>

                      <div className="flex items-start gap-3 mt-10 lg:mt-4 xxl:mt-14">
                        <div className="font-AvenirLight text-xs md:text-sm font-bold text-fadeGreen leading-2 capitalize">
                          _
                        </div>
                        <div>
                          <h2 className="font-AvenirLight text-xs md:text-sm font-bold text-fadeGreen leading-normal capitalize">
                            {slide.creator}
                          </h2>
                          <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen">
                            {slide.postAt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Campus;
