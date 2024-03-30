import { setViewPoint } from "@/redux/features/rewrite.slice";
import { Select } from "antd";
import { useAppDispatch, useAppSelector } from "../(hooks)/redux";
import { viewsPoints } from "../constants/viewPoints";

function SelectViewPoint() {
  const dispatch = useAppDispatch();
  const { viewPoint } = useAppSelector((store) => store.RewriteSlice);

  return (
    <div className="w-full">
      <label className="block mb-2 text-sm font-semibold text-gray-900">
        Point of View :{" "}
      </label>
      <Select
        placeholder="Select a lanuage"
        className="w-full rounded-full bg-gray-200 "
        defaultValue={viewPoint}
        onChange={(state) => dispatch(setViewPoint(state))}
        options={viewsPoints}
      />
    </div>
  );
}

export default SelectViewPoint;
