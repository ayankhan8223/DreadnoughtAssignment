import React from "react";
import clsx from "clsx";

function Image({ path = "1", className = "w-4 h-4" }) {
  return <img src={`${path}`} alt="" className={clsx(className)} />;
}

export default Image;
