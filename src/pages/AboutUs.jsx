import React from "react";

const AboutUs = () => {
  return (
    <>
      {/* Brookfield Properties */}
      <section className="py-4 md:py-14 xxl:py-20 larger:py-24">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-fadeGreen leading-normal capitalize">
            Brookfield Properties
          </h2>
          <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-fadeGreen text-center xl:mt-5 larger:max-w-[75%] mx-auto">
            With more than 50 million sq ft of Grade-A office parks in major
            markets, Brookfield Properties are India's leading developer and
            manager of commercial space.
          </p>

          <div className="border-2 border-lightGray p-1 sm:p-2 md:p-4 xl:p-6 bg-white mt-4 md:mt-14 xxl:mt-20">
            <img
              src="/images/brookfield-properties-1.jpg"
              alt="brookfield-properties-1"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* location and counting of users */}
      <section className="max-md:pt-0 py-8">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 larger:gap-14 xl:px-14">
            <div className="lg:pr-8 larger:pr-14">
              <div className="grid grid-cols-2 md:max-lg:text-center md:grid-cols-3 justify-center gap-x-20 md:gap-y-14">
                <div>
                  <h4 className="font-Avenir font-normal text-[27pt] md:text-[50pt] larger:text-[55pt] leading-normal text-lightGray mt-4">
                    38+
                  </h4>

                  <p className="font-SangBleuKingdomTrial text-[10pt] lg:max-xl:text-[9pt] larger:text-xs font-medium text-fadeGreen leading-normal capitalize">
                    MSF OPERATIONAL
                  </p>
                </div>

                <div>
                  <h4 className="font-Avenir font-normal text-[27pt] md:text-[50pt] larger:text-[55pt] leading-normal text-lightGray mt-4">
                    $8B
                  </h4>

                  <p className="font-SangBleuKingdomTrial text-[10pt] lg:max-xl:text-[9pt] larger:text-xs font-medium text-fadeGreen leading-normal capitalize">
                    GROSS <br className="hidden xxl:block" /> ASSET VALUE
                  </p>
                </div>
                <div>
                  <h4 className="font-Avenir font-normal text-[27pt] md:text-[50pt] larger:text-[55pt] leading-normal text-lightGray mt-4">
                    12+
                  </h4>

                  <p className="font-SangBleuKingdomTrial text-[10pt] lg:max-xl:text-[9pt] larger:text-xs font-medium text-fadeGreen leading-normal capitalize">
                    MSF UNDER ONGOING DEVELOPMENT
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-lightGray p-2 md:p-8 lg:p-14 larger:p-20 h-full grid grid-cols-2 items-center justify-center">
              <div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 p-2 larger:p-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Bengaluru
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 p-2 larger:p-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Gurugram
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 p-2 larger:p-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Delhi
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 p-2 larger:p-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Pune
                  </h5>
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 p-2 larger:p-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Chennai
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 p-2 larger:p-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Noida
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 p-2 larger:p-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Mumbai
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 p-2 larger:p-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Hyderabad
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brookfield Asset Management */}
      <section className="py-4 md:py-14 xxl:py-32">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-lg lg:text-xl font-medium text-fadeGreen leading-normal capitalize">
            Brookfield Asset Management
          </h2>
          <p className="font-AvenirLight font-light text-xs md:text-[16pt] larger:text-sm leading-normal text-fadeGreen text-center xl:mt-5 larger:max-w-[82%] mx-auto">
            Brookfield Asset Management is a leading global alternative asset
            manager with over IJS$800 billion in real estate, private equity,
            infrastructure and credit. Leveraging a century-long investment
            history, we offer a wide range of products and services to investors
            worldwide with operational expertise, global reach and large-scale
            capital access.
          </p>

          <div className="border-2 border-lightGray p-1 md:p-4 xl:p-6 bg-white mt-4 md:mt-14 xxl:mt-20">
            <img
              src="/images/brookfield-properties-2.jpg"
              alt="brookfield-properties-1"
              className="w-full object-contain"
            />
          </div>

          {/* bottom counter or services */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-10 md:gap-10 mt-10 md:mt-14 xl:mt-24">
            <div>
              <p className="font-SangBleuKingdomTrial text-[10pt] larger:text-xs font-medium text-fadeGreen leading-normal capitalize">
                REAL ESTATE
              </p>
              <h4 className="font-Avenir font-normal text-[27pt] md:text-[45pt] larger:text-[55pt] leading-normal text-lightGray">
                $260 B
              </h4>

              <div className="mt-2 md:mt-10">
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Office
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Multifamily
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Retail
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Logistics
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Hospitality
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Alternative Real Estate
                  </h5>
                </div>
              </div>
            </div>

            <div>
              <p className="font-SangBleuKingdomTrial text-[10pt] larger:text-xs font-medium text-fadeGreen leading-normal capitalize">
                INFRASTRUCTURE
              </p>
              <h4 className="font-Avenir font-normal text-[27pt] md:text-[45pt] larger:text-[55pt] leading-normal text-lightGray">
                $137 B
              </h4>

              <div className="mt-2 md:mt-10">
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Utilities
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Transport
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Lorem Ipsum
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Data
                  </h5>
                </div>
              </div>
            </div>

            <div>
              <p className="font-SangBleuKingdomTrial text-[10pt] larger:text-xs font-medium text-fadeGreen leading-normal capitalize">
                RENEWABLE POVÆR
              </p>
              <h4 className="font-Avenir font-normal text-[27pt] md:text-[45pt] larger:text-[55pt] leading-normal text-lightGray">
                $68 B
              </h4>

              <div className="mt-2 md:mt-10">
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Hydroelectric
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Wind
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Solar
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Lorem Ipsum
                  </h5>
                </div>
              </div>
            </div>

            <div>
              <p className="font-SangBleuKingdomTrial text-[10pt] larger:text-xs font-medium text-fadeGreen leading-normal capitalize">
                PRIVATE EQUITY
              </p>
              <h4 className="font-Avenir font-normal text-[27pt] md:text-[45pt] larger:text-[55pt] leading-normal text-lightGray">
                $121 B
              </h4>

              <div className="mt-2 md:mt-10">
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Business Services
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Individual
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Residential
                  </h5>
                </div>
              </div>
            </div>

            <div>
              <p className="font-SangBleuKingdomTrial text-[10pt] larger:text-xs font-medium text-fadeGreen leading-normal capitalize">
                CREDIT
              </p>
              <h4 className="font-Avenir font-normal text-[27pt] md:text-[45pt] larger:text-[55pt] leading-normal text-lightGray">
                $163 B
              </h4>

              <div className="mt-2 md:mt-10">
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Performing Credit
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Opportunities Credit
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Private and Limited Equities
                  </h5>
                </div>
                <div className="flex items-baseline gap-2 sm:gap-4 duration-200 py-1 md:py-2 xl:py-4">
                  <div className="border border-black p-[2px] md:p-1 rounded-full">
                    <span className="bg-black w-2 md:w-3 h-2 md:h-3 block rounded-full"></span>
                  </div>

                  <h5 className="font-AvenirLight text-xs md:text-[16pt] text-lightGray leading-normal relative top-[-4px]">
                    Real Estate
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* ASSETS UNDER MANAGEMENT */}
          <div className="border-2 border-lightGray p-4 xl:p-20 bg-white mt-4 md:mt-14 xxl:mt-20">
            <div className="flex flex-col items-center">
              <h4 className="font-Avenir font-normal text-[27pt] md:text-[50pt] larger:text-[55pt] leading-normal text-lightGray">
                ~$800 B+
              </h4>

              <p className="font-SangBleuKingdomTrial text-[10pt] larger:text-xs font-medium text-fadeGreen leading-normal capitalize">
                ASSETS UNDER MANAGEMENT
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
