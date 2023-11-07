import React from "react";

const InspirationalSpaces = () => {
  return (
    <>
      {/* AIRE Cube */}
      <section className="py-10 md:py-28 bg-darkGreen">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <h2 className="text-center font-SangBleuKingdomTrial max-[300px]:text-[16pt] text-sm md:text-xl font-medium text-white leading-normal capitalize">
            AIRE Cube
          </h2>
          <p className="font-AvenirLight font-light text-xs md:text-sm leading-normal text-white text-center xl:mt-5 xl:w-3/4 mx-auto">
            The iconic green cube seamlessly integrates 25,200 plants
            personifying sustainability in its design and material selection.
            The exterior features green planter cells while the inside is
            carefully curated with plant species to optimize air purification.
            This Net zero structure features rain sensors and solar panels,
            while doubling up as a versatile event space.
          </p>

          <div className="relative overflow-hidden mt-10">
            <img
              src="/images/Aire---Ecoworld.jpg"
              alt="Aire---Ecoworld"
              className="w-full max-md:h-[300px] max-h-[780px] object-bottom object-cover"
            />

            <div className="fdd"></div>
          </div>
        </div>
      </section>

      {/* Inspire Creativity */}
      <section className="md:pb-20 relative">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <div className="border border-black p-2 md:p-4 xl:p-6 md:flex items-center justify-between bg-white">
            <div className="md:w-3/5">
              <img
                src="/images/Inspire-creativity-1.jpg"
                alt="Command-Centre"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="md:w-[37%] larger:pr-20 mt-4">
              <h4 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize">
                Inspire Creativity
              </h4>
              <p className="font-AvenirLight font-light text-xs xl:text-[16pt] larger:text-sm leading-normal text-fadeGreen md:mt-4">
                Find your nook amidst the sprawling green open spaces and native
                landscapes.
              </p>
            </div>
          </div>
        </div>

        <div className="before:absolute before:top-0 before:left-0 before:right-0 before:h-[50%] before:bg-fadeGreen before:z-[-1]"></div>
      </section>

      {/* Water Bodies */}
      <section className="pt-10 pb-0 md:py-20">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <div className="border border-black p-2 md:p-4 xl:p-6 flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-[37%] larger:pr-20 mt-4">
              <h4 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize">
                Water Bodies
              </h4>
              <p className="font-AvenirLight font-light text-xs xl:text-[16pt] larger:text-sm leading-normal text-fadeGreen md:mt-4">
                Make conversations. Discuss ideas with colleagues, All while
                strolling along the expansive water bodies dotted all along the
                campus.
              </p>
            </div>

            <div className="md:w-3/5">
              <img
                src="/images/Inspire-creativity-2.jpg"
                alt="Command-Centre"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The more you find */}
      <section className="py-10 md:py-20 xl:pb-40 xxl:pb-64">
        <div className="container xxl:max-larger:max-w-[1220px]">
          <div className="border border-black p-2 md:p-4 xl:p-6 md:flex items-center justify-between">
            <div className="md:w-3/5">
              <img
                src="/images/Inspire-creativity-3.jpg"
                alt="Command-Centre"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="md:w-[37%] larger:pr-20 mt-4">
              <h4 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize xl:w-2/3 larger:w-1/2">
                The more you seek The more you find
              </h4>
              <p className="font-AvenirLight font-light text-xs xl:text-[16pt] larger:text-sm leading-normal text-fadeGreen md:mt-4">
                Embrace tranquility, find inspiration and immerse yourself in a
                landscape that sets you imagination free.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InspirationalSpaces;
