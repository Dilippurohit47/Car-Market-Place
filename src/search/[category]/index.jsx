import Headers from "@/components/Headers";
import Search from "@/components/Search";
import { db } from "../../../config";
import { CarImages, CarListing } from "../../../config/schema";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import Service from "@/shared/Service";
import Caritem from "@/components/Caritem";

const SearchByCategory = () => {
  const { category } = useParams();

  const [searchResults, setSearchResults] = React.useState([]);

  useEffect(() => {
    GetCarList();
  }, []);
  const GetCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.category, category));

    const resp = Service.FormatResult(result);

    setSearchResults(resp);
  };

  return (
    <div>
      <Headers />
      <div className="p-16 bg-black flex justify-center ">
        <Search />
      </div>
      <div className="p-10 md:px-20">
        <h2 className="font-bold  text-4xl ">{category}</h2>

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
  );
};

export default SearchByCategory;
