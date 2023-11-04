
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
 
  // slider Workspace
    const sliderWorkspace = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      adaptiveHeight:false,

      responsive: [
        // {
        //   breakpoint: 1200,
        //   settings: {
        //     centerMode: false,
        //     slidesToShow: 3,
        //   },
        // },

        {
          breakpoint: 992,
          settings: {
            centerMode: true,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 769,
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
      {/* Workspace Solutions */}
      <section className="py-8 md:py-10 xxl:pt-28 md:pb-28 larger:pb-32 md:max-xl:mt-10">
        <div className="container xxl:max-larger:max-w-[1220px] mx-auto">
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
              className="mt-10 lg:mt-20 larger:mt-28 pb-10 border-2 border-fadeGreen"
            >
              <div className="px-3 h-full">
                <div className="main-contianed bg-white">
                  <div className="relative">
                    <div className="px-4 py-4 slide-hide">
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
                    <div className="px-4 py-4 slide-hide">
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
                    <div className="px-4 py-4 slide-hide">
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
                    <div className="px-4 py-4 slide-hide">
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
                    <div className="px-4 py-4 slide-hide">
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
                    <div className="px-4 py-4 slide-hide">
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
    </>
  );
};

export default SliderComponent;
