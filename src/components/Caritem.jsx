import React from "react";
import { LuFuel } from "react-icons/lu";
import { MdSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { Separator } from "./ui/separator";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Caritem = ({ car }) => {
  return (

    <Link to={`/listing-details/${car?.id}`}>
      <div className="rounded-xl bg-white border hover:shadow-2xl cursor-pointer h-full ">
        <h2 className="absolute m-2 bg-green-500 text-white rounded-full text-sm px-2">New</h2>
      <img
        src={car?.images[0]?.imageUrl} 
        width={"100%"}
        height={250} 
        className="rounded-t-xl overflow-hidden object-cover  h-[250px]"
        alt="car images"
      />
      <div className="p-4 ">
        <h2 className="font-bold text-black text-lg mb-2 ">{car?.listingTitle}</h2>
        <Separator />
        <div className="grid grid-cols-3 mt-5 ">
          <div className="flex flex-col items-center">
            <LuFuel className="text-lg mb-2" />
            <h2>{car?.mileage}</h2>
          </div>
          <div className="flex flex-col items-center  truncate text-ellipsis">
            <MdSpeed className="text-lg mb-2" />
            <h2>{car?.fuelType}</h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg mb-2" />
            <h2>{car?.transmission}</h2>
          </div>
        </div>

        <Separator className="my-2" />
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl  ">${car?.sellingPrice}</h2>
          <h2 className="text-primary text-sm flex gap-2 items-center cursor-pointer">
            View Details
          <IoOpenOutline />

          </h2>
        </div>
      </div>
    </div>
    </Link>
  
  );
};

export default Caritem;
