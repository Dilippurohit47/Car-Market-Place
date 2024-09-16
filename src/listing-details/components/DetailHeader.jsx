import React from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";

import { FaGasPump } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";

const DetailHeader = ({ carDetails }) => {

  return (
    <div>
      {carDetails?.listingTitle ? (
        <div>
          <h2 className="font-bold text-3xl">{carDetails?.listingTitle}</h2>
          <p className="text-sm">{carDetails?.tagline}</p>

          <div className="flex gap-4">
            <div className=" flex gap-2 items-center p-2 bg-blue-50 rounded-full">
              <IoCalendarNumberOutline className="h-5 w-5 text-primary" />
              <h2 className=" text-sm text-primary">{carDetails?.Year}</h2>
            </div>

            <div className=" flex gap-2 items-center p-2 bg-blue-50 rounded-full">
              <IoSpeedometerOutline className="h-5 w-5 text-primary" />
              <h2 className=" text-sm text-primary">{carDetails?.mileage}</h2>
            </div>

            <div className=" flex gap-2 items-center p-2 bg-blue-50 rounded-full">
              <GiGearStickPattern className="h-5 w-5 text-primary" />
              <h2 className=" text-sm text-primary">
                {carDetails?.transmission}
              </h2>
            </div>
            <div className=" flex gap-2 items-center p-2 bg-blue-50 rounded-full">
              <FaGasPump className="h-5 w-5 text-primary" />
              <h2 className=" text-sm text-primary">{carDetails?.fuelType}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full rounded-xl h-[100px] bg-slate-300 animate-pulse"></div>
      )}
    </div>
  );
};

export default DetailHeader;
