import React from "react";

const Description = ({ carDetails }) => {
  return (
    <div>
      {carDetails?.listingDescription ? (
        <div className="p-5 rounded-xl bg-white shadow-md mt-1 border">
          <h2 className="font-bold text-xl mb-3  mt-3">Description</h2>
          <p>{carDetails?.listingDescription}</p>
        </div>
      ) : (
        <div className="w-full h-[250px] bg-slate-200 animate-pulse rounded-xl mt-7"></div>
      )}
    </div>
  );
};

export default Description;
