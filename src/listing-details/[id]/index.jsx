import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailHeader from "../components/DetailHeader";
import Headers from "@/components/Headers";
import { db } from "../../../config";
import { CarImages, CarListing } from "../../../config/schema";
import { eq } from "drizzle-orm";
import Service from "@/shared/Service";
import ImageGallery from "../components/imageGallery";
import Description from "../components/Description";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import CarSpecification from "../components/carSpecification"
import OwnersDetail from "../components/OwnersDetail";
import Footer from "@/components/Footer";
import FinancingCalci from "../components/FinancingCalci";

const ListingDetails = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState([]);
  useEffect(() => {
    GetCarDetails();
  }, [id]);
  console.log(carDetails);
  const GetCarDetails = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, id));

    const resp = Service.FormatResult(result);
    console.log("resp", resp);
    setCarDetails(resp[0]);
  };

  return (
    <div>
      <Headers />
      <div className="p-10 md:px-20 ">
        <DetailHeader carDetails={carDetails} />

      </div>

      <div className="md:px-5 lg:px-20  grid grid-cols-1 md:grid-cols-3 w-full mt-5 gap-5">
        <div className="md:col-span-2">
          <ImageGallery carDetails={carDetails} />
          <Description carDetails={carDetails} />
          <Features features={carDetails?.features} />
          <FinancingCalci carDetails={carDetails} />
        </div>

        <div>
          <Pricing carDetails={carDetails} />
          <CarSpecification carDetails={carDetails} />
          <OwnersDetail carDetails={carDetails} />
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default ListingDetails;
