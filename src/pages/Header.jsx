import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <input type="checkbox" className="peer/draft hidden" id="menu-!!" />
      <label
        className="md:grid grid-cols-2 hidden peer-checked/draft:gap-2 peer-checked/draft:w-[62px] gap-1 justify-end w-[56px] cursor-pointer border-2 border-white fixed z-[99909] top-[20px] right-[20px] rounded-[4px] p-2 duration-300 scale-[0.6]"
        htmlFor="menu-!!"
      >
        <span className="w-4 h-4 bg-[#354033] rounded-[4px] inline-block border-[1px] border-white"></span>
        <span className="w-4 h-4 bg-[#354033] rounded-[4px] inline-block border-[1px] border-white"></span>
        <span className="w-4 h-4 bg-[#354033] rounded-[4px] inline-block border-[1px] border-white"></span>
        <span className="w-4 h-4 bg-[#354033] rounded-[4px] inline-block border-[1px] border-white"></span>
      </label>
      <ul className="md:right-[-60%] md:peer-checked/draft:right-0 max-md:hidden max-md:peer-checked/draft:block p-10 w-[400px] bg-[#788876] md:fixed z-[9999] top-0 h-full max-h-screen overflow-y-auto duration-300">
        <li>
          <Link
            className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white"
            to="/AboutUs"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white"
            to="/Campus"
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white"
            to="/Connectivity"
          >
            Connectivity
          </Link>
        </li>
        <li>
          <Link
            className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white"
            to="/InspirationalSpaces"
          >
            Inspirational Spaces
          </Link>
        </li>
        <li>
          <Link
            className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white"
            to="/TechForward"
          >
            TechForward
          </Link>
        </li>
        {/* <li>
        <Link className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white" to="/SliderComponent">SliderComponent</Link>
      </li> */}
        <li>
          <Link
            className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white"
            to="/SustainabilityWellness"
          >
            Sustainability Wellness
          </Link>
        </li>
        <li>
          <Link
            className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white"
            to="/Terms&Condition"
          >
            Terms & Condition
          </Link>
        </li>
        <li>
          <Link
            className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white"
            to="/PrivacyPolicy"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white"
            to="/GetInTouch"
          >
            Get In Touch
          </Link>
        </li>
        <li>
          <Link
            className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white"
            to="/MediaCentre"
          >
            Media Centre
          </Link>
        </li>
        <li>
          <Link
            className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white"
            to="/FirstEvents"
          >
            First Events
          </Link>
        </li>
        <li>
          <Link
            className="font-SangBleuKingdomTrial text-[12pt] md:text-[16pt] font-medium text-white placeholder:text-[#bcbfbe] leading-normal capitalize inline-block my-4 relative before:content-['*'] before:text-red-600 before:left-0 before:top-0 before:absolute px-5 after:duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white"
            to="/SecondEvents"
          >
            Second Events
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
