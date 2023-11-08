import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MediaCentre = () => {
  const [selectedTab, setSelectedTab] = useState(0);
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
              Media Centre
            </h2>

            <TabList className="flex justify-center mt-4 md:mt-10 xl:mt-20">
              <Tab className="font-SangBleuKingdomTrial text-[14pt sm] md:text-sm font-medium text-gray-400 leading-normal capitalize cursor-pointer px-4 md:px-10 xl:px-20 py-2 md:py-4 xl:py-6 outline-none focus-visible:border border rounded-none">
                Blogs
              </Tab>
              <Tab className="font-SangBleuKingdomTrial text-[14pt sm] md:text-sm font-medium text-gray-400 leading-normal capitalize cursor-pointer px-4 md:px-10 xl:px-20 py-2 md:py-4 xl:py-6 outline-none focus-visible:border border rounded-none">
                Press
              </Tab>
              <Tab className="font-SangBleuKingdomTrial text-[14pt sm] md:text-sm font-medium text-gray-400 leading-normal capitalize cursor-pointer px-4 md:px-10 xl:px-20 py-2 md:py-4 xl:py-6 outline-none focus-visible:border border rounded-none">
                Images
              </Tab>
              <Tab className="font-SangBleuKingdomTrial text-[14pt sm] md:text-sm font-medium text-gray-400 leading-normal capitalize cursor-pointer px-4 md:px-10 xl:px-20 py-2 md:py-4 xl:py-6 outline-none focus-visible:border border rounded-none">
                Videos
              </Tab>
            </TabList>
          </div>
        </section>

        <section className="py-4 md:py-14 xl:py-24">
          <div className="container xxl:max-larger:max-w-[1220px]">
            <TabPanel>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-6 md:gap-y-12">
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-1.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Blogs
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-2.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Blogs
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-3.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Blogs
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-1.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Blogs
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-2.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Blogs
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-3.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Blogs
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-1.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Blogs
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-2.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Blogs
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-3.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Blogs
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-6 md:gap-y-12">
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-1.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Press
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-2.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Press
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-3.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Press
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-1.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Press
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-2.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Press
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-3.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Press
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-1.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Press
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-2.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Press
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-3.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Press
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-6 md:gap-y-12">
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-1.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Images
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-2.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Images
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-3.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Images
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-1.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Images
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-2.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Images
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-3.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Images
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-1.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Images
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-2.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Images
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-3.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Images
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-6 md:gap-y-12">
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-1.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Videos
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-2.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Videos
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-3.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Videos
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-1.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Videos
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-2.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Videos
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-3.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Videos
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-1.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Videos
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-2.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Videos
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full">
                  <div className="border-2 border-lightGray px-2 md:px-4 xl:px-6 pt-2 md:pt-4 xl:pt-6 bg-white">
                    <div className="relative">
                      <img
                        src="/images/media-center-items-3.jpg"
                        alt="media-center-items"
                        className="w-full object-contain"
                      />

                      <div className="px-4 py-4 md:py-8 lg:py-12">
                        <p className="font-AvenirLight font-light text-xs leading-normal text-gray-700">
                          Videos
                        </p>
                        <h2 className="font-SangBleuKingdomTrial text-xs xl:text-sm font-medium text-fadeGreen leading-normal capitalize mt-2">
                          Lorem ipsum dolor sit ame, consectetur
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </section>
      </Tabs>
    </>
  );
};

export default MediaCentre;
