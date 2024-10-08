import FakeData from "@/shared/FakeData";
import React, { useEffect, useState } from "react";
import Caritem from "./Caritem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarImages, CarListing } from "../../config/schema";
import { desc, eq } from "drizzle-orm";
import { db } from "../../config";
import Service from "@/shared/Service";
const MostSearchCar = ({ heading }) => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    GetPopularCarList();
  }, []);

  const GetPopularCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .orderBy(desc(CarListing.id))
      .limit(10);
    const resp = Service.FormatResult(result);
    setCarList(resp);
  };

  return (
    <div className="md:mx-24  pb-5  mx-2 hidden md:block  ">
      <h2 className="font-bold  md:text-3xl text-center  mt-16 mb-7 ">
        {heading || "  Most Searched Cars"}
      </h2>

      <Carousel className="w-full relative ">
        <CarouselContent className="pb-4 ">
          {carList?.map((car, index) => (
            <CarouselItem
              key={index}
              className="  md:basis-2/4 sm:basis-2/4 lg:basis-1/4  "
            >
              <Caritem car={car} key={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MostSearchCar;
