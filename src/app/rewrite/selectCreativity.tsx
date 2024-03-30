import { setCreativity } from "@/redux/features/rewrite.slice";
import { Select } from "antd";
import { useAppDispatch, useAppSelector } from "../(hooks)/redux";
import { creativites } from "../constants/creativites";

function SelectCreativity() {
  const dispatch = useAppDispatch();
  const { creativity } = useAppSelector((store) => store.RewriteSlice);

  return (
    <div className="w-full m-auto">
      <label className="block mb-2 text-sm font-semibold text-gray-900">
        Creativity:{" "}
      </label>
      <Select
        placeholder="Select a lanuage"
        className="w-full rounded-full bg-gray-200  "
        defaultValue={creativity}
        onChange={(state) => dispatch(setCreativity(state))}
        options={creativites}
      />
    </div>
  );
}

export default SelectCreativity;
