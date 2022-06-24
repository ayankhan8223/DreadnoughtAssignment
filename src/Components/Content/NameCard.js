import React from "react";
import Image from "../DashboardComponents/Image";
import Icon from "../DashboardComponents/Icon";
import { useSpring, animated } from "react-spring";
import clsx from "clsx";

function NameCard({
  name,
  position,
  transactionAmount,
  rise,
  tasksCompleted,
  imgId,
}) {
  const { transactions, barPlayhead } = useSpring({
    transactions: transactionAmount,
    barPlayhead: 1,
    from: { transactions: 0, barPlayhead: 0 },
  });
  return (
    <div className="w-full p-2 lg:w-1/3">
      <div className="rounded-lg bg-card flex justify-between p-3 h-32">
        <div className="">
          <div className="flex items-center">
            <i
              class={imgId}
              style={{
                color: "var(--electric-violet)",
                fontSize: 25,
                background: "var(--cornflower)",
                borderRadius: "50%",
                border: "1px solid var(--melrose)",
                padding: 10,
                width: 45,
                height: 45,
                display: "grid",
                placeItems: "center",
                marginRight: 7,
              }}
            ></i>
            <div className="ml-2">
              <div className="flex items-center">
                <div className="mr-2 font-bold text-black">{name}</div>
              </div>
              <div className="text-sm ">{position}</div>
            </div>
          </div>

          <div className="text-sm  mt-2">{`${tasksCompleted} from 5 tasks completed`}</div>
          <svg
            className="w-44 mt-3"
            height="6"
            viewBox="0 0 200 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="200" height="6" rx="3" fill="var(--cornflower)" />
            <animated.rect
              width={barPlayhead.interpolate(
                (i) => i * (tasksCompleted / 5) * 200
              )}
              height="6"
              rx="3"
              fill="url(#paint0_linear)"
            />
            <rect x="38" width="2" height="6" fill="#171717" />
            <rect x="78" width="2" height="6" fill="#171717" />
            <rect x="118" width="2" height="6" fill="#171717" />
            <rect x="158" width="2" height="6" fill="#171717" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#8E76EF" />
                <stop offset="1" stopColor="#3912D2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <Icon
            path={rise ? "res-react-dash-bull" : "res-react-dash-bear"}
            className="w-8 h-8"
          />
          <animated.div
            className={clsx(
              rise ? "text-green-500" : "text-red-500",
              "font-bold",
              "text-lg"
            )}
          >
            {transactions.interpolate((i) => `${i.toFixed(2)}`)}
          </animated.div>
          <div className="text-sm ">Last 6 month</div>
        </div>
      </div>
    </div>
  );
}

export default NameCard;
