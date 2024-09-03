import React from 'react'
import Headers from '../components/Headers'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MyListing from './components/MyListing'

const Profile = () => {
  return (
    <div>
        <Headers/>
    <div className="px-10 md:px-20 my-10 " >
    <Tabs defaultValue="my-listing" className="w-full">
  <TabsList className="w-full flex justify-start">
    <TabsTrigger value="my-listing">My Listing</TabsTrigger>
    <TabsTrigger value="inbox">Inbox</TabsTrigger>
    <TabsTrigger value="profile">Profile</TabsTrigger>
  </TabsList>
  <TabsContent value="my-listing">
  <MyListing/>
  </TabsContent>
  <TabsContent value="inbox">
    Inbox Tab 
  </TabsContent>
  <TabsContent value="profile">
    Profile Tab 
  </TabsContent>
</Tabs>
    </div>
    </div>
  )
}

export default Profile
