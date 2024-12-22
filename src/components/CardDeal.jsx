import { features } from "../constant";
import styles, { layout } from "../style";
import Button from "./Button";
import card from "../assets/card.png";


const Business = () => {
  return (
    <div className="mt-[10px] sm:mt-[150px] flex flex-col sm:flex-row px-10 sm:px-0">
      <div className="mt-[100px] w-[300px] sm:w-[500px] mr-10 mb-10 sm:mb-5">
        <h1 className="font-poppins mb-3 text-[45px] font-semibold text-white">
        Find a better card deal 
        </h1>
        <h1 className="mb-5 font-poppins font-semibold text-white text-[45px] font-semibold">
          {" "}
          in few easy steps.
        </h1>
        <p className=" mb-4 text-white font-poppins text-large mb-2 font-normal">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className="flex flex-1">
        <img src={card} alt="card" />
      </div>
    </div>
  );
};

export default Business;
