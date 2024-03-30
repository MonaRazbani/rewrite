import { setLength } from "@/redux/features/rewrite.slice";
import { Select } from "antd";
import { useAppDispatch, useAppSelector } from "../(hooks)/redux";
import { lengths } from "../constants/length";

function SelectLength() {
  const dispatch = useAppDispatch();
  const { lenght } = useAppSelector((store) => store.RewriteSlice);

  return (
    <>
      <div className="w-full">
        <label className="block mb-2 text-sm font-semibold text-gray-900">
          Lenght :{" "}
        </label>
        <Select
          placeholder="Select a lanuage"
          className="w-full rounded-full bg-gray-200 "
          defaultValue={lenght}
          onChange={(state) => dispatch(setLength(state))}
          options={lengths}
        />
      </div>
    </>
  );
}

export default SelectLength;
