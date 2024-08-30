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

    const {user ,isSignedIn} = useUser()

  return (
    <div>
      <img src="/logo.svg" width={150} height={100} />

      <ul>
        {list.map((item, index) => (
          <li>{item.name}</li>
        ))}
      </ul>

{
    isSignedIn ?
    <div> <UserButton/>
    <Button>Submit Listing </Button>
    </div> :""
}

    </div>
  );
};

export default Headers;
