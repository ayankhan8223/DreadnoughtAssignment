import { useState } from "react";
import clsx from "clsx";
import { useSpring, animated, config } from "react-spring";
import IconButton from "../DashboardComponents/IconButton";
import Icon from "../DashboardComponents/Icon";
import MenuItem from "./MenuItem";
import Image from "../DashboardComponents/Image";

const sidebarItems = [
  [
    { id: "0", title: "Dashboard", notifications: false },
    { id: "1", title: "Overview", notifications: false },
    { id: "2", title: "Chat", notifications: 6 },
    { id: "3", title: "Team", notifications: false },
  ],
  [
    { id: "4", title: "Tasks", notifications: false },
    { id: "5", title: "Reports", notifications: false },
    { id: "6", title: "Settings", notifications: false },
  ],
];
function Sidebar({ onSidebarHide, showSidebar }) {
  const [selected, setSelected] = useState("0");
  const { dashOffset, indicatorWidth, precentage } = useSpring({
    dashOffset: 26.015,
    indicatorWidth: 70,
    precentage: 77,
    from: { dashOffset: 113.113, indicatorWidth: 0, precentage: 0 },
    config: config.molasses,
  });
  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10 ",
        showSidebar ? "flex" : "hidden"
      )}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <i
            className="fas fa-rocket"
            style={{
              color: "var(--electric-violet)",
              fontSize: 25,
              transform: "rotate(265deg)",
            }}
          ></i>
          <div
            className="block sm:hidden xl:block ml-2 font-extrabold text-2xl"
            style={{ color: "var(--electric-violet)" }}
          >
            Dreadnought
          </div>
          <div className="flex-grow sm:hidden xl:block" />
          <IconButton
            icon="times"
            className="block sm:hidden text-[#5a3bf9]"
            onClick={onSidebarHide}
          />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col hideScoll">
        <div className="w-full p-3 h-24 sm:h-20 xl:h-24 hidden sm:block flex-shrink-0">
          <div className="bg-sidebar-card-top rounded-xl w-full h-full flex items-center justify-start sm:justify-center xl:justify-start px-3 sm:px-0 xl:px-3">
            <Icon path="user-circle" className="text-3xl text-white" />
            <div className="block sm:hidden xl:block ml-3">
              <div className="text-sm font-bold text-white">Welcome</div>
              <div className="text-sm text-white">Mr. David</div>
            </div>
            <div className="block sm:hidden xl:block flex-grow" />
          </div>
        </div>
        {sidebarItems[0].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))}
        <div className="mt-8 mb-0 font-bold px-3 block sm:hidden xl:block">
          SHORTCUTS
        </div>
        {sidebarItems[1].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))}
        <div className="flex-grow" />
        <div className="w-full p-3 h-28 hidden sm:block sm:h-20 xl:h-32">
          <div
            className="rounded-xl w-full h-full px-3 sm:px-0 xl:px-3 overflow-hidden"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%0A%3Csvg width='216' height='104' viewBox='0 0 216 104' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Crect width='216' height='104' fill='%232C2C2D'/%3E%3Ccircle cx='236.5' cy='-23.25' r='44.75' stroke='%23262627' stroke-width='4'/%3E%3Ccircle cx='236.5' cy='-23.25' r='59.75' stroke='%23262627' stroke-width='4'/%3E%3Ccircle cx='236.5' cy='-23.25' r='78.5' stroke='%23262627' stroke-width='4'/%3E%3Ccircle cx='236.5' cy='-23.25' r='96' stroke='%23262627' stroke-width='4'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='216' height='104' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A')",
            }}
          >
            <div className="block sm:hidden xl:block pt-3">
              <div className="font-bold text-gray-300 text-sm">Used Space</div>
              <div className="text-gray-500 text-xs">
                Admin updated 09:12 am November 08,2020
              </div>
              <animated.div className="text-right text-gray-400 text-xs">
                {precentage.interpolate((i) => `${Math.round(i)}%`)}
              </animated.div>
              <div
                className="w-full"
                style={{ color: "var(--electric-violet)" }}
              >
                <svg
                  viewBox="0 0 100 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="5"
                    y1="5.25"
                    x2="95"
                    y2="5.25"
                    stroke="var(--melrose)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <animated.line
                    x1="5"
                    y1="5.25"
                    x2={indicatorWidth}
                    y2="5.25"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="hidden sm:block xl:hidden ">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" fill="#2C2C2D" />
                <path
                  d="M 28 28 m 0, -18 a 18 18 0 0 1 0 36 a 18 18 0 0 1 0 -36"
                  stroke="#3C3C3C"
                  strokeWidth="6"
                />
                <animated.path
                  d="M 28 28 m 0, -18 a 18 18 0 0 1 0 36 a 18 18 0 0 1 0 -36"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeDasharray="113.113"
                  strokeDashoffset={dashOffset}
                  strokeWidth="6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
          <img src="\1632585389452.jfif" alt="" width={40} />
          <div className="block sm:hidden xl:block ml-2 font-bold ">
            Ayan Khan
          </div>
          <div className="flex-grow block sm:hidden xl:block" />
          <Icon
            path="res-react-dash-options"
            className="block sm:hidden xl:block w-3 h-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
