import Headers from "@/components/Headers";
import React, { useEffect, useState } from "react";
import CarDetails from "../shared/carDetails.json";
import Features from "../shared/features.json";
import InputField from "./components/inputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";
import { Separator } from "@/components/ui/separator";
import CheckBoxField from "./components/CheckBoxField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CarImages, CarListing } from "../../config/schema";
import { db } from "../../config";
import UploadImages from "./components/uploadImages";
import { FiLoader } from "react-icons/fi";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";
import { useSearchParams } from "react-router-dom";
import { eq } from "drizzle-orm";
import Service from "@/shared/Service";
const AddListing = () => {
  const [formData, setFormData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [triggerUploadImages, setTriggerUploadImages] = useState(false);

  const [searchParams] = useSearchParams();

  const mode = searchParams.get("mode");
  const carId = searchParams.get("id");
  const [carInfo, setCarInfo] = useState([]);
  useEffect(() => {
    if (mode == "edit") {
      GetListingDetail();
    }
  }, []);

  const GetListingDetail = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, carId));
    const resp = Service?.FormatResult(result);
    console.log("detail",resp);
    setCarInfo(resp[0]);
    setFormData(resp[0]);
    setFeaturesData(resp[0]?.features);
  };

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const { user } = useUser();

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFeatureData = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onsubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    toast("PLease wait");

    if (mode == "edit") {
      const result = await db
        .update(CarListing)
        .set({
          ...formData,
          features: featuresData,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          userName: user?.fullName,
          userImageUrl: user?.imageUrl,
          postedOn: moment().format("DD/MM/YYYY"),
        })
        .where(eq(CarListing.id, carId))
        .returning({ id: CarListing.id });
      if (result) {
        console.log("Data saved");
        setTriggerUploadImages(result[0]?.id);
        setLoader(false);
        toast.success("Listing Added Successfully");
      }
    } else {
      try {
        const result = await db
          .insert(CarListing)
          .values({
            ...formData,
            features: featuresData,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
            userImageUrl: user?.imageUrl,
            postedOn: moment().format("DD/MM/YYYY"),
          })
          .returning({ id: CarListing.id });
        if (result) {
          console.log("Data saved");
          setTriggerUploadImages(result[0]?.id);
          setLoader(false);
          toast.success("Listing Added Successfully");
        }
      } catch (error) {
        console.log("Eror in saving", error);
      }
    }
  };
console.log(carInfo)
  return (
    <div>
      <Headers />
      <div className="md:px-10 md:px-20 my-10 ">
        <h2 className="font-bold text-4xl">Add New Listing</h2>

        <form className="border rounded-xl p-10 mt-10">
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              {CarDetails?.carDetails?.map((item, index) => (
                <div key={index}>
                  <label className="text-sm ">
                    {item?.label}{" "}
                    {item?.required ? (
                      <span className="text-red-500">*</span>
                    ) : null}
                  </label>
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputField
                      carInfo={carInfo}
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType === "dropdown" ? (
                    <DropdownField
                      carInfo={carInfo}
                      handleInputChange={handleInputChange}
                      item={item}
                    />
                  ) : item.fieldType === "textarea" ? (
                    <TextAreaField
                      carInfo={carInfo}
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-16" />
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {Features?.features?.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <Checkbox
                    checked={featuresData?.[item.name]}
                    item={item}
                    onCheckedChange={(value) =>
                      handleFeatureData(item.name, value)
                    }
                  />
                  <label>{item.label}</label>
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          <UploadImages
            carInfo={carInfo}
            mode={mode}
            setLoader={(v) => {
              setLoader(v);
              navigate("/profile");
            }}
            triggerUploadImages={triggerUploadImages}
          />

          <div className="mt-10 flex justify-end">
            <Button
              disabled={loader}
              type="submit"
              onClick={(e) => onsubmit(e)}
            >
              {loader ? (
                <FiLoader className="animate-spin text-lg" />
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
