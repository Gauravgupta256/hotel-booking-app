import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ];

  return (
    <div className="md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
      {sidebarLinks.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          end={item.path === "/owner"}
          className={({ isActive }) =>
            `flex items-center py-3 px-4 md:px-8 gap-3 relative group ${
              isActive
                ? "border-r-4 md:border-r-[6px] bg-blue-100 text-blue-600 font-semibold"
                : "hover:bg-gray-100/90 border-white text-gray-700"
            }`
          }
        >
          <img src={item.icon} alt={item.name} className="h-6 w-6" />
          <p className="md:block hidden">{item.name}</p>
          {/* Tooltip for collapsed sidebar */}
          <span className="absolute left-full ml-2 hidden group-hover:block md:hidden bg-gray-700 text-white text-xs rounded px-2 py-1">
            {item.name}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
