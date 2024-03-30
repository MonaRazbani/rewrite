import { setEngine } from "@/redux/features/rewrite.slice";
import { Select } from "antd";
import { useAppDispatch, useAppSelector } from "../(hooks)/redux";
import { IoSettingsOutline } from "react-icons/io5";
import { engines } from "../constants/engine";
import { IoIosArrowDown } from "react-icons/io";

function SelectEngine() {
  const dispatch = useAppDispatch();
  const { engine } = useAppSelector((store) => store.RewriteSlice);

  return (
    <div className="w-6/12">
      <label className="block mb-2 text-sm font-semibold text-gray-900">
        Engine :{" "}
      </label>
      <Select
        placeholder="Select a lanuage"
        className="w-full rounded-full bg-gray-200 "
        defaultValue={engine}
        onChange={(state) => dispatch(setEngine(state))}
        options={engines}
        suffixIcon={
          <>
            <IoSettingsOutline className="" color="black" size={24} />{" "}
            <IoIosArrowDown color="black" size={24} />
          </>
        }
        size="large"
      />
    </div>
  );
}

export default SelectEngine;
