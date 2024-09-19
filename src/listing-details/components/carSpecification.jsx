import CarSpecificationIcons from "@/shared/CarSpecificationIcons";
import React from "react";

const CarSpecification = ({ carDetails }) => {
  return (
    <div className="p-10  rounded-xl mt-7 border shadow-md">
        <h2 className="font-bold text-3xl mb-2 ">Specifications</h2>
      { carDetails ?  CarSpecificationIcons.map((item, index) => (
        <div className="flex font-semibold items-center justify-between">
          <h2> {item?.label}</h2>
          <h2>{carDetails[item.name]}</h2>
        </div>
      ))
     : <div className="w-full h-[500px] rounded-xl bg-slate-200 animate-pulse ">

     </div>
    }

    </div>
  );
};

export default CarSpecification;
