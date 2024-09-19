import React from "react";
import Headers from "../components/Headers";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyListing from "./components/MyListing";
import Inbox from "./components/inbox";

const Profile = () => {
  return (
    <div>
      <Headers />
      <div className="px-10 md:px-20 my-10 ">
        <Tabs defaultValue="my-listing" className="w-full">
          <TabsList className="w-full flex p-7  justify-start">
            <TabsTrigger
              value="my-listing"
              className="text-1xl px-4 py-2 rounded-lg focus:outline-none 
                         data-[state=active]:bg-blue-500 
                         data-[state=active]:text-white"
            >
              My Listing
            </TabsTrigger>
            <TabsTrigger
              value="inbox"
              className="text-1xl px-4 py-2 rounded-lg focus:outline-none 
                         data-[state=active]:bg-blue-500 
                         data-[state=active]:text-white"
            >
              Inbox
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="text-1xl px-4 py-2 rounded-lg focus:outline-none 
                         data-[state=active]:bg-blue-500 
                         data-[state=active]:text-white"
            >
              Profile
            </TabsTrigger>
          </TabsList>
          <TabsContent value="my-listing">
            <MyListing />
          </TabsContent>
          <TabsContent value="inbox">
            <Inbox />
          </TabsContent>
          <TabsContent value="profile">Profile Tab</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
