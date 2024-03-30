import {
  setCreativity,
  toggelShowHistories,
} from "@/redux/features/rewrite.slice";
import { Input, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../(hooks)/redux";
import { creativites } from "../constants/creativites";
import Search from "antd/es/input/Search";
import { histories } from "../constants/histrories";
import HistoryBox from "./histroyBox";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";

function Histories() {
  const handleSearch = () => {};
  const dispatch = useAppDispatch();

  return (
    <div className="w-full m-auto p-6 flex gap-3 flex-col">
      <div className="flex flex-row border-b-[1px] pb-2">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined className="site-form-item-icon" />}
          onPressEnter={handleSearch}
          className="w-11/12 pb-1"
          size="large"
        />
        <CloseOutlined
          color="#747474"
          onClick={() => dispatch(toggelShowHistories())}
        />
      </div>
      {histories.map((h) => (
        <HistoryBox history={h} />
      ))}
    </div>
  );
}

export default Histories;
