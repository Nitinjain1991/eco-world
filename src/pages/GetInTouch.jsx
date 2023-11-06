import React from "react";

const GetInTouch = () => {
  return (
    <>
      {/* get all your queries answered. */}
      <section className="py-8 md:py-10 xl:py-28 relative">
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

          <p className="font-SangBleuKingdomTrial font-normal text-xs md:text-sm leading-normal text-white text-center mt-5 md:mt-20 xl:mt-28 xl:w-3/4 mx-auto">
            Connect with us today and get all your queries answered.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-24">
            <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
              <div className="relative">
                <img
                  src="/images/get-in-touch-office-1.png"
                  alt="light-logo"
                  className="w-full max-h-[600px] object-cover object-top"
                />

                <div className="px-4 py-4 md:py-8 lg:py-12">
                  <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                    Office Leasing
                  </h2>
                  <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen">
                    Gaurav Bhatia
                  </p>
                  <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen">
                    +91 973 176 6588
                  </p>
                  <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen">
                    gaurav.bhatia@brookfieldproperties.com
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
              <div className="relative">
                <img
                  src="/images/get-in-touch-office-2.png"
                  alt="light-logo"
                  className="w-full max-h-[600px] object-cover object-top"
                />

                <div className="px-4 py-4 md:py-8 lg:py-12">
                  <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                    Retail Leasing
                  </h2>
                  <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen">
                    Lijin Varghese
                  </p>
                  <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen">
                    +91 984 035 1137
                  </p>
                  <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen">
                    lijin.varghese@brookfieldproperties.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="before:absolute before:top-0 before:left-0 before:right-0 before:h-[58%] before:bg-fadeGreen before:z-[-1]"></div>
      </section>
    </>
  );
};

export default GetInTouch;
