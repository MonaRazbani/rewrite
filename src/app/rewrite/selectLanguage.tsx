import { setLanguage } from "@/redux/features/rewrite.slice";
import { CloseOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { useAppDispatch, useAppSelector } from "../(hooks)/redux";
import { languages, languagesOptions } from "../constants/languages";

const LanguagesDropDown = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      {languages.map((option, index) => (
        <div key={`${index}`}>
          <Select
            placeholder="Select a field"
            defaultValue={option.name}
            onChange={() => dispatch(setLanguage(option))}
            options={languagesOptions}
          />
          <CloseOutlined />
        </div>
      ))}
    </>
  );
  {
    /* return (
    <ul className="h-80  overflow-auto">
      {languages.map((item, index) => {
        return (
          <li
            key={index}
            className={` flex flex-col cursor-pointer hover:bg-slate-100 rounded-md px-6  ${
              selectedLanguage?.name === item.name ? 'text-purple-600' : ''
            }`}
            onClick={() => dispatch(setLanguage({ index, language: item }))}
          >
            <b>{item.name}</b>
            <span>{item.local}</span>
          </li>
        );
      })}
    </ul>
  ); */
  }
};

function SelectLanguage() {
  const dispatch = useAppDispatch();
  const { selectedLanguage } = useAppSelector((store) => store.RewriteSlice);

  return (
    <div className="w-full">
      <label className="block mb-2 text-sm font-semibold text-gray-900">
        Select language{" "}
      </label>
      <Select
        placeholder="Select a lanuage"
        className="w-full rounded-full bg-gray-200 border-0 "
        defaultValue={selectedLanguage}
        onChange={(state) => dispatch(setLanguage(state))}
        options={languagesOptions}
        size="large"
      />
    </div>
  );
}

export default SelectLanguage;
