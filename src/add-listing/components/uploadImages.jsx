import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
const UploadImages = () => {
  const [selectedFileList, setSelectedFileList] = useState([]);

  const onFileSelected = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item != image);
    console.log(result);
    setSelectedFileList(result);
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
