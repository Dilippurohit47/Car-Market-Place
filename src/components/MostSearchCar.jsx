import FakeData from "@/shared/FakeData";
import React from "react";
import Caritem from "./Caritem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const MostSearchCar = () => {
  console.log(FakeData.carList);
  return (
    <div className="mx-24  pb-5  ">
      <h2 className="font-bold text-3xl text-center mt-16 mb-7 ">
        Most Searched Cars
      </h2>

      <Carousel className="">
        <CarouselContent className="pb-4">
          {FakeData.carList.map((car, index) => (
            <CarouselItem className="basis-1/4">
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
