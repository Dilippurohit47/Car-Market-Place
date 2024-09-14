import { Button } from "@/components/ui/button";
import { storage } from "../../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CarImages } from "../../../config/schema";
import { db } from "../../../config";

const UploadImages = ({ triggerUploadImages, setLoader, carInfo }) => {
  const [selectedFileList, setSelectedFileList] = useState([]);

  const onFileSelected = (e) => {
    const files = e.target.files;
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  useEffect(() => {
    if (triggerUploadImages) {
      uploadImageToServer();
    }
  }, [triggerUploadImages]);

  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item != image);
    setSelectedFileList(result);
  };

  console.log(carInfo)

  const uploadImageToServer = () => {
    setLoader(true);
    selectedFileList.forEach((file) => {
      const fileName = Date.now() + ".jpeg";
      const storageRef = ref(storage, "car-marketplace/" + fileName);
      const metaData = {
        contentType: "image/jpeg",
      };
      uploadBytes(storageRef, file, metaData)
        .then((snapShot) => {
          console.log("Uploaded file");
        })
        .then((res) => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            console.log(downloadUrl);
            await db.insert(CarImages).values({
              imageUrl: downloadUrl,
              carListingId: triggerUploadImages,
            });
          });
        });
      setLoader(false);
    });
  };

  return (
    <div className="">
      <h2 className="font-medium text-xl my-3">Upload Car images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4  gap-5 lg:grid-cols-6">
        {selectedFileList.map((image, index) => (
          <div className="relative" key={index}>
            <IoMdClose
              className="absolute right-0 m-3 bg-white rounded-full cursor-pointer "
              onClick={() => onImageRemove(image, index)}
            />

            <img
              src={URL.createObjectURL(image)}
              className="w-full h-[130px] object-cover rounded-md"
            />
          </div>
        ))}

        <label htmlFor="uploadImages">
          <div className="border rounded-xl border-dotted border-primary p-10 bg-blue-100 cursor-pointer hover:shadow-md">
            <h2 className="text-lg text-center text-primary">+</h2>
          </div>
        </label>

        <input
          type="file"
          multiple={true}
          id="uploadImages"
          className="opacity-0"
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
};

export default UploadImages;
