import React from "react";
import Icon from "../DashboardComponents/Icon";
const segmentationData = [
  { c1: "AWS Activate Credits", c2: "233", c3: "#2c365d", color: "#232942" },
  { c1: "GCP Startup Credits", c2: "126", c3: "#334ed8", color: "#2c3051" },
];

function Segmentation() {
  return (
    <div className="p-4 h-full">
      <div className="flex justify-between items-center">
        <div className="text-black font-bold">Credits</div>

        <Icon path="res-react-dash-options" className="w-2 h-2" />
      </div>
      <div className="mt-3">All Credits</div>
      {segmentationData.map(({ c1, c2, c3, color }) => (
        <div className="flex items-center" key={c1}>
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: color,
            }}
          />
          <div className="ml-2" style={{ color }}>
            {c1}
          </div>
          <div className="flex-grow" />
          <div className="" style={{ color }}>
            {c2}
          </div>
          <div className="ml-2 w-12 card-stack-border" />
          <div className="ml-2 h-8">
            <div
              className="w-20 h-28 rounded-lg overflow-hidden"
              style={{
                background: c3,
              }}
            >
              {c1 === "Other" && (
                <img
                  src="https://assets.codepen.io/3685267/res-react-dash-user-card.svg"
                  alt=""
                />
              )}
              {/*
<svg width="80" height="112" viewBox="0 0 80 112" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M80 0H0V112H80V0Z" fill="#2F49D1"/>
<path d="M48.2857 113.12C62.6864 69.8671 18.2857 45.92 14 0.839996" stroke="#FFFBFB" stroke-opacity="0.1" stroke-width="2"/>
<path d="M53.7143 112.56C68.115 69.3071 36.2857 42.84 35.7143 0.559998" stroke="#FFFBFB" stroke-opacity="0.1" stroke-width="2"/>
<path d="M60.2857 112C74.6864 68.7471 56.8571 40.6 56.2857 -1.67999" stroke="#FFFBFB" stroke-opacity="0.1" stroke-width="2"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="80" height="112" fill="white"/>
</clipPath>
</defs>
</svg>
*/}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Segmentation;
