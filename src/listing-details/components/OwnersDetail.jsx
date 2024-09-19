import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Service from "@/shared/Service";
import { useUser } from "@clerk/clerk-react";
import { LuMessageSquare } from "react-icons/lu";
import { useNavigate } from "react-router";

const OwnersDetail = ({ carDetails }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  const onMessageOwnerClick = async () => {
    const userId = user.primaryEmailAddress.emailAddress.split("@")[0];
    const ownerUserId = carDetails?.createdBy.split("@")[0];

    try {
      await Service.createSendBirdUser(
        userId,
        user?.fullName,
        user?.imageUrl
      ).then((res) => console.log(res));
    } catch (error) {
      console.log(error.message);
    }

    try {
      await Service.createSendBirdUser(
        ownerUserId,
        carDetails?.userName,
        carDetails?.userImageUrl
      ).then((res) => console.log(res));
    } catch (error) {
      console.log(error.message);
    }

    try {
      console.log("try")
      await Service.createSendBirdChannel(
        [userId, ownerUserId],
        carDetails?.listingTitle
      ).then((res)=>{
        console.log("Channel Created")
        navigate("/profile");
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 border rounded-xl shadow-md">
      <h2 className="font-bold  mb-3 text-2xl">Owner/Dealer </h2>
      <img
        src={carDetails?.userImageUrl}
        className="w-[50px]  h-[50px] rounded-full "
      />
      <h2 className="mt-2 font-bold text-xl">{carDetails.userName}</h2>
      <h2 className="mt-1 text-gray-400 font-medium ">
        {carDetails.createdBy}
      </h2>
      <Button
        className="w-full mt-4 flex items-center gap-2 "
        onClick={onMessageOwnerClick}
      >
        <span> Message Owner</span> <LuMessageSquare />
      </Button>
    </div>
  );
};

export default OwnersDetail;
