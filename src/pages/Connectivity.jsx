import React from "react";
import Footer from "./Footer";
// imorting images

const Connectivity = () => {
  return (
    <>
      <section className="py-8 md:py-14 xl:pt-28 xl:pb-32">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-fadeGreen leading-normal capitalize">
            Seamless connectivity
          </h2>
          <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-black text-center xl:mt-5">
            A strategic location where everything is within your reach
          </p>

          {/* bottom map and scroller places */}
          <div className="mt-4 md:mt-10 lg:mt-16 larger:mt-28 lg:flex items-center justify-between">
            <div className="lg:w-7/12">
              <div className="border-2 border-lightGray p-2 md:p-4 larger:p-12">
                <div className="relative">
                  <img
                    src="/images/available-property.png"
                    alt="light-logo"
                    className="w-full object-contain"
                  />

                  <div className="absolute bottom-[0px] md:bottom-[20px] larger:bottom-[32px] left-[0px] right-[0px] w-full px-2">
                    <p className="font-Avenir font-normal text-[10pt] sm:text-xs md:text-sm text-white leading-normal md:leading-8 capitalize text-center">
                      Location : Outer ring road, Bengaluru- 560103, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-4/12 max-h-[500px] md:max-h-[570px] larger:max-h-[650px] overflow-y-scroll scroller-places max-lg:mt-10 md:pr-4">
              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    BIAL
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    08.00km
                  </h5>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    KR PURAM
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    17.02 km
                  </h5>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    Biappanahalli Metro Station
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    13.04 km
                  </h5>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    Indiranagar
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    13.02 km
                  </h5>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    Sakra Hospital
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    01.60 km
                  </h5>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    New Horizon College
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    03.20 km
                  </h5>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    Marathahalli
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    04.70 km
                  </h5>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    Leela Palace Hotel
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    12.60 km
                  </h5>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    Adarsh Pal Retreat
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    01.80km
                  </h5>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    Ecospace (Proposed Metro Station)
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    02.60km
                  </h5>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    PVR
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    03.90km
                  </h5>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    Koramangala
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    10.40km
                  </h5>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4 larger:gap-6 hover:bg-gray-100/50 duration-200 p-2 cursor-pointer">
                <div className="border border-black p-[2px] md:p-1 rounded-full mt-1 lg:mt-2">
                  <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                </div>

                <div>
                  <h4 className="font-Avenir font-extrabold text-[12pt] sm:text-xs md:text-sm text-lightGray">
                    HSR Layout
                  </h4>
                  <h5 className="font-AvenirLight text-[12pt] sm:text-xs md:text-sm text-lightGray mt-1 md:mt-2 larger:mt-5">
                    07.40km
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      <Footer />
    </>
  );
};

export default Connectivity;
