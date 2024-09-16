import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { CarImages, CarListing } from "../../../config/schema";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../config";
import Service from "@/shared/Service";
import Caritem from "@/components/Caritem";
import { FaTrashRestore } from "react-icons/fa";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
const MyListing = () => {
  const { user } = useUser();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    user && GetUserCarListing();
  }, [user]);
  const GetUserCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CarListing.id));
    const resp = Service.FormatResult(result);
    console.log(resp);
    setCarList(resp);
  };
  const [open, setOpen] = useState(false);

  const DeleteCarListing = async (id) => {
    try {
      await db.delete(CarImages).where(eq(CarImages.carListingId, id));
      await db.delete(CarListing).where(eq(CarListing.id, id));
      toast.success("Listing deleted successfully");
      window.location.reload();
    } catch (error) {
      console.log("error in deleting", error);
    }
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center ">
        <h2 className="font-bold text-4xl">My Listing</h2>
        <Link to={"/add-listing"}>
          <Button>+ Add New Listing</Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-7 lg:grid-cols-4 gap-5">
        {carList.map((item, index) => (
          <div key={index}>
            <Caritem car={item} />
            <div className="p-2 bg-gray-50 gap-2 rounded-lg  flex justify-between">
              <Link
                to={"/add-listing?mode=edit&id=" + item?.id}
                className="w-full"
              >
                <Button variant="outline" className="w-full ">
                  Edit
                </Button>
              </Link>

              <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger asChild>
                  <Button className="" variant="destructive">
                    <FaTrashRestore onClick={() => setOpen(true)} />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your car Listing and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setOpen(false)}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => DeleteCarListing(item?.id)}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListing;
