import React from "react";
// Initialization for ES Users

const GetInTouch = () => {
  return (
    <>
      {/* get all your queries answered. */}
      <section className="py-8 md:py-14 xl:py-28 relative">
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

          <p className="font-SangBleuKingdomTrial font-normal text-xs md:text-sm leading-normal text-white text-center mt-10 md:mt-20 xl:mt-28 xl:w-3/4 mx-auto">
            Connect with us today and get all your queries answered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-14 xl:mt-24">
            <div className="border border-black px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
              <div className="relative">
                <img
                  src="/images/leasing-place-1.jpg"
                  alt="light-logo"
                  className="w-full max-h-[600px] object-cover object-top"
                />

                <div className="px-2 md:px-4 py-4 md:py-8 lg:py-12">
                  <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                    Office Leasing
                  </h2>
                  <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen">
                    Gaurav Bhatia
                  </p>
                  <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen">
                    +91 973 176 6588
                  </p>
                  <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen text-ellipsis overflow-hidden">
                    gaurav.bhatia@brookfieldproperties.com
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-black px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
              <div className="relative">
                <img
                  src="/images/leasing-place-2.jpg"
                  alt="light-logo"
                  className="w-full max-h-[600px] object-cover object-top"
                />

                <div className="px-2 md:px-4 py-4 md:py-8 lg:py-12">
                  <h2 className="font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-[20pt] larger:text-lg font-medium text-fadeGreen leading-normal capitalize">
                    Retail Leasing
                  </h2>
                  <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen">
                    Lijin Varghese
                  </p>
                  <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen">
                    +91 984 035 1137
                  </p>
                  <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen text-ellipsis overflow-hidden">
                    lijin.varghese@brookfieldproperties.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="before:absolute before:top-0 before:left-0 before:right-0 before:h-[75%] md:before:h-[58%] before:bg-fadeGreen before:z-[-1]"></div>
      </section>

      {/* contact us */}
      <section className="py-8 md:py-14 xl:pb-20">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <h2 class="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-fadeGreen leading-normal capitalize">
            Get In Touch With Us
          </h2>

          {/* input fields */}
          <div className="border border-black p-2 md:p-4 xl:p-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center bg-white mt-4 lg:mt-14 xl:mt-20">
            <div>
              <img
                src="/images/contact-us.jpg"
                alt="Command-Centre"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="xl:pr-20">
              <form action="">
                <input
                  required
                  type="text"
                  placeholder="Name*"
                  className="border-b-2 border-black focus-visible:outline-0 w-full font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-fadeGreen placeholder:text-[#bcbfbe] leading-normal capitalize"
                />
                <input
                  required
                  type="email"
                  placeholder="Email*"
                  className="border-b-2 border-black focus-visible:outline-0 w-full font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-fadeGreen placeholder:text-[#bcbfbe] leading-normal mt-10 xl:mt-20"
                />
                <input
                  required
                  type="number"
                  placeholder="Mobile*"
                  className="border-b-2 border-black focus-visible:outline-0 w-full font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-fadeGreen placeholder:text-[#bcbfbe] leading-normal mt-10 xl:mt-20"
                />
                <textarea
                  required
                  placeholder="Message*"
                  rows="1"
                  className="border-b-2 border-black focus-visible:outline-0 w-full font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-fadeGreen placeholder:text-[#bcbfbe] leading-normal mt-10 xl:mt-20"
                ></textarea>

                <div className="max-md:text-center mt-10 xl:mt-20">
                  <button
                    type="submit"
                    className="font-SangBleuKingdomTrial text-[12pt] lg:text-sm font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize bg-fadeGreen px-24 rounded-full py-3"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Download Brochure */}
      <section className="py-8 md:py-14 xl:py-44 bg-[#e6e7e8]">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <h2 class="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-fadeGreen leading-normal capitalize">
            To know more about Ecoworld
          </h2>

          {/* input fields */}
          <form action="">
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-center items-center mt-10 xl:mt-20">
              <div className="text-end max-md:w-full">
                <input
                  required
                  type="email"
                  placeholder="Email*"
                  className="border-b-2 border-black focus-visible:outline-0 w-full md:w-[400px] bg-transparent font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-fadeGreen placeholder:text-[#bcbfbe] leading-normal capitalize"
                />
              </div>

              <div className="max-md:mt-4">
                <button
                  type="submit"
                  className="font-SangBleuKingdomTrial text-[12pt] lg:text-sm font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize bg-fadeGreen 
                  px-14 rounded-full py-3 whitespace-nowrap"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
