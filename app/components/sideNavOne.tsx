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
    link: "/dashboard",
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
    <section className="hidden py-6 pl-10 bg-white  min-h-screen fixed flex-col justify-between lg:flex">
      <section className="space-y-12">
        <div className="py-8 pr-4">
          <h4 className="text-3xl xl:text-4xl font-semibold text-black">
            ZEROCHECK
          </h4>
        </div>

        <div className="space-y-10 ml-4">
          {nav.map((_data, _index) => (
            <LinksComponent _data={_data} _index={_index} key={_index} />
          ))}
        </div>
      </section>

      <section className="flex flex-col space-y-8 ml-4">
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
      </section>
    </section>
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
      className={`flex items-center gap-8 w-full ${
        pathname === _data?.link ? "border-r-4 border-pink-600" : ""
      }`}
    >
      <div className="h-5 w-5 relative">
        <Image src={_data.icon} alt={_data.name} fill />
      </div>
      <h5
        className={`text-black text-sm ${
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
      className={`flex items-center gap-8 w-full ${
        pathname === _data?.link ? "border-r-4 border-pink-600" : ""
      }`}
    >
      <div className="h-5 w-5 relative">
        <Image src={_data.icon} alt={_data.name} fill />
      </div>
      <h5
        className={`text-black text-sm ${
          pathname === _data?.link ? "font-extrabold" : "font-light"
        }`}
      >
        {_data?.name}
      </h5>
    </button>
  );
}
