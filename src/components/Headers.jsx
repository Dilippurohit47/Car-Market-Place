import {
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const list = [
 
];

const Headers = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center shadow-sm p-5">
<Link to={"/"}>
<img src="/logo.svg" width={150} height={100} />
</Link>

      <ul className=" gap-16 hidden md:flex">
        {list.map((item, index) => (
          <Link to={item.link}>
             <li className="font-medium hover:text-[#2479F0] cursor-pointer transition-all duration-100 ">
            {item.name}
          </li>
          </Link>
       
        ))}
      </ul>

      {isSignedIn ? (
        <div className="flex items-center gap-5">
          {" "}
          <UserButton />
          <Link to={"/profile"}>
            <Button>Submit Listing </Button>
          </Link>
        </div>
      ) : (
        <div className="bg-[#2b00ffc5] px-2 py-1 text-white rounded-md">
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      )}
    </div>
  );
};

export default Headers;
