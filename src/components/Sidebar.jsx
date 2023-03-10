import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineRight,
  AiFillCalendar,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillCartFill, BsGeoFill, BsCalendarMonth } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaChartPie } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { CgPerformance } from "react-icons/cg";
import { AiOutlineTransaction } from "react-icons/ai";
import { GiOverInfinity } from "react-icons/gi";
import SidebarLink from "./SidebarLink";
import admin from "../assets/admin.png";

const Sidebar = ({ closeIcon, setShowSidebar }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");

  const client = [
    {
      icon: <BsFillCartFill />,
      name: "Products",
    },
    {
      icon: <HiUsers />,
      name: "Customers",
    },
    {
      icon: <AiOutlineTransaction />,
      name: "Transactions",
    },
    {
      icon: <BsGeoFill />,
      name: "Geography",
    },
  ];

  const sales = [
    {
      icon: <GiOverInfinity />,
      name: "Overview",
    },
    {
      icon: <AiFillCalendar />,
      name: "Daily",
    },
    {
      icon: <BsCalendarMonth />,
      name: "Monthly",
    },
    {
      icon: <FaChartPie />,
      name: "Breakdown",
    },
  ];

  const management = [
    {
      icon: <RiAdminFill />,
      name: "Admins",
    },
  ];

  // change active with pathname
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <>
      <div>
        <div className="relative">
          <h1 className="text-center text-xl uppercase text-[#92df39] font-bold mb-3 border-b-2 border-gray-400 pb-1">
            Office
          </h1>
          {closeIcon && (
            <AiOutlineClose
              onClick={() => setShowSidebar(false)}
              className="absolute top-1 left-2 icon"
            />
          )}
        </div>

        {/* Dashboard */}
        <div
          className={`${
            active === "dashboard" &&
            "bg-[#92df39] !text-[#1b3d23] hover:bg-[#b8ea7f] hover:opacity-90"
          } py-1 px-6`}
        >
          <Link to={`/dashboard`} className="flex items-center justify-between">
            <AiFillHome />
            <h1>Dashboard</h1>
            <AiOutlineRight />
          </Link>
        </div>

        {/* client */}
        <div>
          <h1 className="mt-4 mb-2 pl-6">Client</h1>
          <div>
            {client?.map((item, index) => (
              <SidebarLink key={index} {...item} active={active} />
            ))}
          </div>
        </div>

        {/* sales */}
        <div>
          <h1 className="mt-4 mb-2 pl-6">Sales</h1>
          <div>
            {sales?.map((item, index) => (
              <SidebarLink key={index} {...item} active={active} />
            ))}
          </div>
        </div>

        {/* management */}
        <div>
          <h1 className="mt-4 mb-2 pl-6">Management</h1>
          <div>
            {management?.map((item, index) => (
              <SidebarLink key={index} {...item} active={active} />
            ))}
          </div>
        </div>
      </div>
      {/* Admin User */}
      <div className="text-sm gap-2 flex items-center cursor-pointer justify-center">
        <p className="text-2xl font-bold">Admin</p>
        <img
          src={admin}
          alt="admin"
          className="w-12 h-12 rounded-full bg-[#92df39]"
        />
      </div>
    </>
  );
};

export default Sidebar;
