import CarSpecificationIcons from "@/shared/CarSpecificationIcons";
import React from "react";

const CarSpecification = ({ carDetails }) => {
    console.log(carDetails)
  return (
    <div className="p-10  rounded-xl mt-7 border shadow-md">
        <h2 className="font-bold text-3xl mb-2 ">Specifications</h2>
      {CarSpecificationIcons.map((item, index) => (
        <div className="flex font-semibold items-center justify-between">
          <h2> {item?.label}</h2>
          <h2>{carDetails[item.name]}</h2>
        </div>
      ))}

      {/* {carDetails.length > 0 && carDetails?.map((car, index) => <div></div>)} */}
    </div>
  );
};

export default CarSpecification;
