import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FirstEvents = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  // sliderHeaderHere
  const sliderHeaderHere = {
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
  // sliderHeaderHere
  const sliderHeaderHereSecond = {
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
  return (
    <>
      {/* get all your queries answered. */}
      <Tabs
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
      >
        <section className="pt-8 md:pt-14 xl:pt-28 bg-fadeGreen">
          <div className="container xxl:max-larger:max-w-[1220px]">
            <a
              href="#ff"
              className="font-AvenirLight leading-normal text-white inline-flex items-center "
            >
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
              </svg>
              <span className="ml-4">Explore Other topics</span>
            </a>

            <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-white leading-normal capitalize mt-10 md:mt-20 xl:mt-28">
              Events
            </h2>

            <TabList className="flex justify-center mt-4 md:mt-10 xl:mt-20">
              <Tab className="font-SangBleuKingdomTrial text-[14pt sm] md:text-sm font-medium text-gray-400 leading-normal capitalize cursor-pointer px-4 md:px-10 xl:px-20 py-2 md:py-4 xl:py-6 outline-none focus-visible:border border rounded-none">
                Past
              </Tab>
              <Tab className="font-SangBleuKingdomTrial text-[14pt sm] md:text-sm font-medium text-gray-400 leading-normal capitalize cursor-pointer px-4 md:px-10 xl:px-20 py-2 md:py-4 xl:py-6 outline-none focus-visible:border border rounded-none">
                Upcoming
              </Tab>
            </TabList>
          </div>
        </section>

        <section className="py-4 md:py-14 xl:pt-28 xl:pb-44">
          <div className="container xxl:max-larger:max-w-[1220px]">
            <TabPanel>
              <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-fadeGreen leading-normal capitalize mt-4 mb-20">
                Section header here
              </h2>
              <div className="Accessibility-slider mx-[-12px] pb-24">
                <Slider {...sliderHeaderHereSecond}>
                  <div className="px-3 h-full">
                    <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                      <div className="relative">
                        <img
                          src="/images/accessibility-slide-1.png"
                          alt="light-logo"
                          className="w-full object-contain"
                        />

                        <div className="px-4 py-4 md:py-8 lg:py-12">
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="text-center mt-4 lg:mt-10">
                <a
                  href="#viewLll"
                  className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen inline-block group"
                >
                  View all
                  <span className="ml-4 group-hover: animate-wiggle inline-block">
                    <img
                      src="/images/darkest-right-arrow.png"
                      alt="darkest-right-arrow"
                      className="w-full max-w-[14px] md:max-w-[20px] object-contain"
                    />
                  </span>
                </a>
              </div>

              <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-fadeGreen leading-normal capitalize mt-28 mb-20">
                Section header here
              </h2>
              <div className="Accessibility-slider mx-[-12px] pb-24">
                <Slider {...sliderHeaderHereSecond}>
                  <div className="px-3 h-full">
                    <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                      <div className="relative">
                        <img
                          src="/images/accessibility-slide-1.png"
                          alt="light-logo"
                          className="w-full object-contain"
                        />

                        <div className="px-4 py-4 md:py-8 lg:py-12">
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="text-center mt-4 lg:mt-10">
                <a
                  href="#viewLll"
                  className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen inline-block group"
                >
                  View all
                  <span className="ml-4 group-hover: animate-wiggle inline-block">
                    <img
                      src="/images/darkest-right-arrow.png"
                      alt="darkest-right-arrow"
                      className="w-full max-w-[14px] md:max-w-[20px] object-contain"
                    />
                  </span>
                </a>
              </div>
            </TabPanel>

            <TabPanel>
              <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-fadeGreen leading-normal capitalize mt-4 mb-20">
                Section header here
              </h2>
              <div className="Accessibility-slider mx-[-12px] pb-24">
                <Slider {...sliderHeaderHereSecond}>
                  <div className="px-3 h-full">
                    <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                      <div className="relative">
                        <img
                          src="/images/accessibility-slide-1.png"
                          alt="light-logo"
                          className="w-full object-contain"
                        />

                        <div className="px-4 py-4 md:py-8 lg:py-12">
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="text-center mt-4 lg:mt-10">
                <a
                  href="#viewLll"
                  className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen inline-block group"
                >
                  View all
                  <span className="ml-4 group-hover: animate-wiggle inline-block">
                    <img
                      src="/images/darkest-right-arrow.png"
                      alt="darkest-right-arrow"
                      className="w-full max-w-[14px] md:max-w-[20px] object-contain"
                    />
                  </span>
                </a>
              </div>

              <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-fadeGreen leading-normal capitalize mt-28 mb-20">
                Section header here
              </h2>
              <div className="Accessibility-slider mx-[-12px] pb-24">
                <Slider {...sliderHeaderHereSecond}>
                  <div className="px-3 h-full">
                    <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                      <div className="relative">
                        <img
                          src="/images/accessibility-slide-1.png"
                          alt="light-logo"
                          className="w-full object-contain"
                        />

                        <div className="px-4 py-4 md:py-8 lg:py-12">
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
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
                          <h2 className="font-SangBleuKingdomTrial text-xs xl:text-[15pt] larger:text-sm font-medium text-fadeGreen leading-normal capitalize">
                            Lorem ipsum dolor sit ame, consectetur adipiscing
                            elit
                          </h2>
                          <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700 xl:mt-2">
                            Aug 20, 2023
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="text-center mt-4 lg:mt-10">
                <a
                  href="#viewLll"
                  className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen inline-block group"
                >
                  View all
                  <span className="ml-4 group-hover: animate-wiggle inline-block">
                    <img
                      src="/images/darkest-right-arrow.png"
                      alt="darkest-right-arrow"
                      className="w-full max-w-[14px] md:max-w-[20px] object-contain"
                    />
                  </span>
                </a>
              </div>
            </TabPanel>
          </div>
        </section>
      </Tabs>
    </>
  );
};

export default FirstEvents;
