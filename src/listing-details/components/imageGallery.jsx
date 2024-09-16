import React from "react";

const ImageGallery = ({ carDetails }) => {
  console.log(carDetails);

  const hasValidImages = carDetails?.images && Array.isArray(carDetails.images) && carDetails.images.length > 0;

  return (
    <>
      {hasValidImages ? (
        <div>
          <img
            src={carDetails.images[0]?.imageUrl} 
            className="w-full object-cover h-[500px] rounded-xl"
            alt="Car"
          />
        </div>
      ) : (
        <div>No images available</div> 
      )}
    </>
  );
};

export default ImageGallery;
