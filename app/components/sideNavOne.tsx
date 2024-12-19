"use client";
import {
  Events,
  Home,
  Logout,
  Manage,
  Portfolio,
  Rewards,
  Settings,
} from "@/libs/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const nav = [
  {
    name: "Dashboard",
    icon: Home,
    link: "/sideNav-one",
  },
  {
    name: "Events",
    icon: Events,
    link: "/events",
  },
  {
    name: "Rewards",
    icon: Rewards,
    link: "/rewards",
  },
  {
    name: "Manage Events",
    icon: Manage,
    link: "/manage",
  },
  {
    name: "Portfolio",
    icon: Portfolio,
    link: "/portfolio",
  },
];

const bottomNav = [
  {
    name: "Settings",
    icon: Settings,
    link: "/setting",
  },
  {
    name: "Logout",
    icon: Logout,
    link: "/logout",
  },
];
const SideNavigation = () => {
  return (
    <div className="hidden lg:block col-span-3 h-full bg-white overflow-y-scroll relative">
      <div className="pt-[58px] pl-[38px] pr-[15px]">
        <h4 className="text-3xl xl:text-4xl font-semibold text-black">
          ZEROCHECK
        </h4>
      </div>
      <div className="flex flex-col h-5/6 justify-between">
        <div className="mt-[72px] flex flex-col items-end  space-y-[46.5px]">
          {nav.map((_data, _index) => (
            <LinksComponent _data={_data} _index={_index} key={_index} />
          ))}
        </div>
        <div className="flex flex-col items-end  space-y-[46.5px]">
          {bottomNav.map((_data, _index) => {
            if (_data.name !== "Logout") {
              return (
                <LinksComponent _data={_data} _index={_index} key={_index} />
              );
            } else {
              return (
                <ButtonComponent _data={_data} _index={_index} key={_index} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;

interface ILinkProps {
  _data: {
    name: string;
    icon: string;
    link: string;
  };
  _index: number;
}
function LinksComponent({ _data, _index }: ILinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={_data?.link}
      key={_index}
      className={`flex items-center gap-4 w-9/12 ${
        pathname === _data?.link ? "border-r-4 border-pink-600" : ""
      }`}
    >
      <div className="h-5 w-5 relative">
        <Image src={_data.icon} alt={_data.name} fill />
      </div>
      <h5
        className={`text-black ${
          pathname === _data?.link ? "font-extrabold" : "font-light"
        }`}
      >
        {_data?.name}
      </h5>
    </Link>
  );
}

function ButtonComponent({ _data, _index }: ILinkProps) {
  const pathname = usePathname();
  return (
    <button
      onClick={() => {}}
      key={_index}
      className={`flex items-center gap-4 w-9/12 ${
        pathname === _data?.link ? "border-r-4 border-pink-600" : ""
      }`}
    >
      <div className="h-5 w-5 relative">
        <Image src={_data.icon} alt={_data.name} fill />
      </div>
      <h5
        className={`text-black ${
          pathname === _data?.link ? "font-extrabold" : "font-light"
        }`}
      >
        {_data?.name}
      </h5>
    </button>
  );
}
