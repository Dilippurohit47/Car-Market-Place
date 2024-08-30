import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";

const list = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Search",
    link: "/",
  },
  {
    name: "New",
    link: "/",
  },
  {
    name: "Preowned",
    link: "/",
  },
];

const Headers = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <img src="/logo.svg" width={150} height={100} />

      <ul className=" gap-16 hidden md:flex">
        {list.map((item, index) => (
          <li className="font-medium hover:text-[#2479F0] cursor-pointer transition-all duration-100 ">
            {item.name}
          </li>
        ))}
      </ul>

      {isSignedIn ? (
        <div className="flex items-center gap-5">
          {" "}
          <UserButton />
          <Button>Submit Listing </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Headers;
