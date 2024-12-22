import React from "react";
import bill from "../assets/bill.png";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
const Billing = () => {
  return (
    <div className="mt-[150px] flex flex-col sm:flex-row px-10 sm:px-0">
      <div className="mb-[60px] sm:mb-0 mr-[50px] relative w-[350px] h-[250px]  sm:w-[650px] sm:h-[471px]">
        {/* Gradient Background */}
        <div className="absolute inset-0 opacity-40 pink__gradient z-0"></div>

        {/* Robot Image */}
        <img
          className="absolute inset-0  z-10 w-[676px] h-auto m-auto"
          src={bill}
          alt="Robot"
        />
      </div>
      <div className="text-white">
        <h1 className="font-semibold text-[35px] sm:text[45px]">Easily control your</h1>
        <h1 className="font-semibold text-[35px] sm:text[45px] mb-10">
          billing & invoicing.
        </h1>
        <p className="text-lg">
          Elit enim sed massa etiam. Mauris eu adipiscing rhoncus
        </p>
        <p className="text-lg">
          ultrices ametodio aenean neque. Fusce ipsum orci
        </p>
        <p className=" mb-5 sm:mb-[80px] text-lg">
          aliporttitor integer platea placerat.
        </p>
        <div className="flex">
          <div>
            <img src={google} alt="" />
          </div>
          <div>
            <img src={apple} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
