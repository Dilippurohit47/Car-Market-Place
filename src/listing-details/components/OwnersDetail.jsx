import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LuMessageSquare } from "react-icons/lu";

const OwnersDetail = ({ carDetails }) => {
  return (
    <div className="p-10 border rounded-xl shadow-md">
        <h2 className="font-bold  mb-3 text-2xl">Owner/Dealer </h2>
      <img
        src={carDetails?.userImageUrl}
        className="w-[50px]  h-[50px] rounded-full "
      />
      <h2 className="mt-2 font-bold text-xl">{carDetails.userName}</h2>
      <h2 className="mt-1 text-gray-400 font-medium ">{carDetails.createdBy}</h2>
      <Button className="w-full mt-4 flex items-center gap-2 t">
      <span>  Message Owner</span> <LuMessageSquare />
      </Button>
    </div>

  );
};

export default OwnersDetail;
