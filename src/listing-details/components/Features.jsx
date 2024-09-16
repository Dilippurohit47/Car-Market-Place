import React from "react";
import { IoMdCheckmark } from "react-icons/io";
const Features = ({ features }) => {
    const Features = features
   
  return (
    <div className="mt-6 ">
      <div className="p-5 bg-white  rounded-xl border shadow-md">
        <h2 className="font-medium text-2xl">Features</h2>
    { Features && <div>
            {[features].map((item, index) => (
            <div key={index}>
              <IoMdCheckmark className="text-lg bg-blue-100 text-primary" />
            </div>
          ))}</div>
    }
      </div>
    </div>
  );
};

export default Features;
