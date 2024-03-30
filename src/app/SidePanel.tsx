import { FormOutlined, SnippetsOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Link from "next/link";
import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { TbWriting } from "react-icons/tb";
type Props = {};
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

function SidePanel({}: Props) {
  const items: MenuItem[] = [
    getItem(
      <Link href={"/dashboard"}>
        <div className="flex flex-row gap-2 flex-wrap text-sm ">
          <MdOutlineDashboard color="#747474" size={20} className="" />{" "}
          Dashboard
        </div>
      </Link>,
      "1"
    ),
    getItem(
      <Link href={"/chat"}>
        <div className="flex flex-row gap-2 flex-wrap text-sm">
          <LuMessagesSquare color="#747474" size={20} className="" /> Chat
        </div>
      </Link>,
      "2"
    ),
    getItem(
      <Link href={"/rewrite"}>
        <div className="flex flex-row gap-2 flex-wrap text-sm">
          <TbWriting size={20} color="#747474" className="" /> ReWrite
        </div>
      </Link>,
      "3"
    ),
    getItem(
      <Link href={"/image"}>
        <div className="flex flex-row gap-2 flex-wrap text-sm">
          <AiOutlineCamera color="#747474" size={20} className="" /> Image
        </div>
      </Link>,
      "4"
    ),
    getItem(
      <Link href={"/translate"}>
        <div className="flex flex-row gap-2 flex-wrap text-sm">
          <IoLanguage size={20} color="#747474" className="" /> Translate
        </div>
      </Link>,
      "5"
    ),
    getItem(
      <Link href={"/grammer"}>
        <div className="flex flex-row gap-2 flex-wrap text-sm">
          <img src="text-grammar 1.svg" className="" /> Grammer
        </div>
      </Link>,
      "6"
    ),
    getItem(
      <Link href={"/code"}>
        <div className="flex flex-row gap-2 flex-wrap text-sm">
          <FaCode size={20} color="#747474" className="" /> Code
        </div>
      </Link>,
      "7"
    ),
  ];

  return (
    <Menu
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["1"]}
      mode="inline"
      theme="light"
      items={items}
      style={{ backgroundColor: "#FCFCFD" }}
    />
  );
}

export default SidePanel;
