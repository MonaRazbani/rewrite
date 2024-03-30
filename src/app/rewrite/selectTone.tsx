import { setTone } from "@/redux/features/rewrite.slice";
import { Select } from "antd";
import { useAppDispatch, useAppSelector } from "../(hooks)/redux";
import { tones } from "../constants/tones";

function SelectTone() {
  const dispatch = useAppDispatch();
  const { tone } = useAppSelector((store) => store.RewriteSlice);

  return (
    <div className="w-full">
      <label className="block mb-2 text-sm font-semibold text-gray-900">
        Tone of Voise :{" "}
      </label>
      <Select
        placeholder="Select a lanuage"
        className="w-full rounded-full bg-gray-200 "
        defaultValue={tone}
        onChange={(state) => dispatch(setTone(state))}
        options={tones}
      />
    </div>
  );
}

export default SelectTone;
