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
const [searchResults,setSearchResults] = useState([])
  const condition = searchParams.get("cars");
  const price = searchParams.get("price");
  const make = searchParams.get("make");

  useEffect(() => {
    getCarList();
  }, [make,condition]);

  const getCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(condition != undefined && eq(CarListing.condition, condition))
      .where(make != undefined && eq(CarListing.make, make));

    const resp = Service.FormatResult(result);
    setSearchResults(resp)
  };
console.log(searchResults)
  return     <div>
  <Headers />
  <div className="p-16 bg-black flex justify-center ">
    <Search />
  </div>
  <div className="p-10 md:px-20">
    <h2 className="font-bold  text-4xl ">{make} {condition}</h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5">
    { searchResults.length > 0 ? 
      searchResults.map((item,index)=>(
       <div>
          <Caritem car={item} />
       </div>
         
      )) : [1,2,3,4,5].map((item,index)=>(
        <div className="h-[370px] rounded-xl bg-slate-200 animate-pulse">

        </div>
      ))
    } </div>
  </div>
</div>
};

export default SearchByOptions;
