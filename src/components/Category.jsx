import Data from "@/shared/Data";
import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="mt-32 px-4 ">
      <h2 className="font-bold text-3xl text-center">Browse By Types</h2>
      <div className=" grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 mt-4 ">
        {Data.Category.map((category, index) => (
          <Link to={"search/"+category.name}>
              <div className="border rounded-xl p-3 items-center flex flex-col hover:shadow-lg hover:scale-105 transition-all ease-in-out  duration-200 ">
            <img src={category.icon} width={35} height={35} />
            <h2 className="mt-2">{category.name}</h2>
          </div>
          </Link>
      
        ))}
      </div>
    </div>
  );
};

export default Category;
