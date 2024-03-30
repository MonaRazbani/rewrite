import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../(hooks)/redux";
import { history } from "@/types/history";
import { FaBookmark, FaRegBookmark, FaRegTrashAlt } from "react-icons/fa";

function HistoryBox({ history }: HistoryProps) {
  const handlePin = () => {};
  const handleUnpin = () => {};
  const handleSave = () => {};
  const handleUnsanve = () => {};
  const handleDelete = () => {};
  return (
    <div className="bg-white rounded-lg border-[1px] border-[#EFEFEF] p-3">
      <div className="w-full m-auto flex flex-col gap-4">
        <div className="flex flex-row justify-between py-auto ">
          <div className=" text-xs ">{history.title}</div>
          <div className="flex flex-row gap-1 sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  ">
            <div className={`${history.pinned ? "bg-purple-200" : ""} p-[2px]`}>
              {history.pinned ? (
                <BsPinAngleFill
                  className="bg-purple-200 rounded-sm "
                  color="#9373EE"
                  onClick={handlePin}
                />
              ) : (
                <BsPinAngle
                  className=""
                  color="#D9D9D9"
                  onClick={handleUnpin}
                />
              )}
            </div>
            <div className={`${history.saved ? "bg-purple-200" : ""} p-[2px] `}>
              {history.saved ? (
                <FaBookmark
                  className=" "
                  color="#9373EE"
                  onClick={handleSave}
                  size={13}
                />
              ) : (
                <FaRegBookmark
                  className=""
                  color="#D9D9D9"
                  onClick={handleUnsanve}
                />
              )}
            </div>
            <div className={`  hover:"bg-purple-200 p-[2px] `}>
              <FaRegTrashAlt
                className=""
                color="#D9D9D9"
                onClick={handleDelete}
              />
            </div>
          </div>
        </div>
        <div className=" flex md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  justify-between py-auto sm:flex-col ">
          <div className="text-[10px] text-[#B9BAC0]"> {history.language}</div>
          <div className="text-[10px] text-[#B9BAC0]">{history.date}</div>
        </div>
      </div>
    </div>
  );
}
export default HistoryBox;

interface HistoryProps {
  history: history;
}
