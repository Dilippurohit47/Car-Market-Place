import Service from "@/shared/Service";
import { db } from "../../config";
import { CarImages, CarListing } from "../../config/schema";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { eq } from "drizzle-orm";
import Headers from "@/components/Headers";
import Search from "@/components/Search";
import Caritem from "@/components/Caritem";

const SearchByOptions = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const condition = searchParams.get("cars");
  const price = searchParams.get("price");
  const make = searchParams.get("make");

  useEffect(() => {
    getCarList();
  }, [make, condition]);

  const getCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(condition != undefined && eq(CarListing.condition, condition))
      .where(make != undefined && eq(CarListing.make, make));

    const resp = Service.FormatResult(result);
    setSearchResults(resp);
  };
  return (
    <div className="bg-gray-100">
      <Headers />
      <div className="flex items-center justify-center mt-4 ">
        <Search />
      </div>
      <div className="md:p-10 p-2   mt-10 md:mt-4 md:px-20">
        <h2 className="font-bold  md:text-4xl text-2xl ">
          {make} {condition}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2   lg:grid-cols-4 mt-7 gap-5">
          {searchResults.length > 0
            ? searchResults.map((item, index) => (
                <div className="">
                  <Caritem car={item} />
                </div>
              ))
            : [1, 2, 3, 4, 5].map((item, index) => (
                <div className="h-[370px] rounded-xl bg-slate-200 animate-pulse"></div>
              ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default SearchByOptions;
