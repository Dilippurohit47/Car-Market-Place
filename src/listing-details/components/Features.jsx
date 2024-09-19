import React from "react";
import { IoMdCheckmark } from "react-icons/io";
const Features = ({ features }) => {
  const Features = features;

  return (
    <div className="mt-6 ">
      <div className="p-5 bg-white  rounded-xl border shadow-md">
        <h2 className="font-medium text-2xl">Features</h2>
        {Features && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(features).map((feature, value) => (
              <div className="flex items-center  gap-3">
                <p>
                  <IoMdCheckmark className="text-lg bg-blue-100 text-primary" />
                </p>
                <h2 className="capitalize">{feature}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
