import { features } from "../constant";
import styles, { layout } from "../style";
import Button from "./Button";
import star from "../assets/Star.svg";
import send from "../assets/Send.svg";
import shield from "../assets/Shield.svg";

const Business = () => {
  return (
    <div className="mb-10 mt-10 flex flex-col sm:flex-row px-10 sm:px-0">
      <div className="w-[300px] sm:w-[600px] mr-10 mb-10 sm:mb-5">
        <h1 className="mb-3 text-[35px] font-semibold text-white">
          You do the business,
        </h1>
        <h1 className="mb-5  text-white text-[35px] font-semibold">
          {" "}
          we’ll handle the money.
        </h1>
        <p className=" mb-4 text-white mb-2 font-normal">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center hover:radient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mb-8">
          <div>
            <img className="mr-12 sm:mr-8" src={star} alt="No image" />
          </div>
          <div className="text-white cursor-pointer ">
            <h1 className="font-poppins font-semibold text-xl">Rewards</h1>
            <p className="font-poppins">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center hover:radient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mb-8">
          <div>
            <img className="mr-12 sm:mr-8" src={send} alt="No image" />
          </div>
          <div className="text-white cursor-pointer mr-3 sm:mr-0">
            <h1 className="font-poppins font-semibold text-xl">100% Secured</h1>
            <p className="font-poppins">
            We take proactive steps make sure your information and transactions are secure.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center hover:radient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mb-8">
          <div>
            <img className="mr-12 sm:mr-8" src={shield} alt="No image" />
          </div>
          <div className="text-white cursor-pointer ">
            <h1 className="font-poppins font-semibold text-xl">Balance Transfer</h1>
            <p className="font-poppins">
            A balance transfer credit card can save you a lot of money in interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
