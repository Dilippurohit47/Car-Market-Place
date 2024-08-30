import Data from "@/shared/Data";
import React from "react";

const Category = () => {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center">Browse By Types</h2>
      <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-5 px-20  mt-10   ">
        {Data.Category.map((category, index) => (
          <div className="border rounded-xl p-3 items-center flex flex-col hover:shadow-lg hover:scale-105 transition-all ease-in-out  duration-200 ">
            <img src={category.icon} width={35} height={35} />
            <h2 className="mt-2">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
