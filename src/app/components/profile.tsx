import { user } from "@/types";
import { profile } from "console";
import { FaRegBell } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Profile({ userInfo }: UserProps) {
  return (
    <div className="bottom-0 absolute w-48">
      <div className="flex flex-row justify-center gap-2 border-t-[1px] py-4 ">
        <div className="rounded-full h-12 w-12">
          <img src={userInfo.imageSrc} />
        </div>
        <div className="flex flex-col justify-center">
          <text className="text-xs font-medium">{userInfo.name}</text>
          <text className="text-xs font-normal text-[#747474]">
            {userInfo.Email}
          </text>
        </div>
        <div className="pt-1 flex">
          <FaRegBell size={18} color="#747474" />
          <IoMdInformationCircleOutline size={20} color="#747474" />
        </div>
      </div>
    </div>
  );
}
export default Profile;

interface UserProps {
  userInfo: user;
}
