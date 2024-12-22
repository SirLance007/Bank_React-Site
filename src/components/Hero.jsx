import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <div className={`md : flex-row sm:flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-col sm:flex-row ">
          <div className="flex flex-col w-full mb-[6.2rem]">
            <div className="flex items-center mb-2">
              <div className="flex flex-row py-[6px] items-center pr-4 pl-2 bg-discount-gradient rounded-[10px]">
              <img src={discount} alt="Discount" className="mr-2" />
                <p className="text-white">
                  <span>20% Discount For </span>
                  <span>1 Month Account</span>
                </p>
              </div>
            </div>

            <h1 className="font-poppins text-[42px] sm:text-[42px] md:text-[72px] font-semibold text-white">
              The Next
            </h1>
            <h1 className="font-poppins text-[42px] sm:text-[42px] md:text-[72px] font-semibold text-gradient">
              Generation
            </h1>
            <h1 className="font-poppins text-[42px] sm:text-[42px] md:text-[72px] font-semibold text-white w-full">
              Payment Method.
            </h1>
            <p className="mt-5 text-white font-poppins font-normal text-[14px] sm:text-[17px] ">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
          <div className="relative w-[350px] h-[250px]  sm:w-[750px] sm:h-[571px]">
            {/* Gradient Background */}
            <div className="absolute inset-0 opacity-40 pink__gradient z-0"></div>

            {/* Robot Image */}
            <img
              className="absolute inset-0 z-10 w-[676px] h-auto m-auto"
              src={robot}
              alt="Robot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
