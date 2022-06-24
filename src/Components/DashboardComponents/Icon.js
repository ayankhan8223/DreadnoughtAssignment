import React from "react";
import clsx from "clsx";

function Icon({ path = "options", className }) {
  return <i className={`fas fa-${path} ${className}`} />;
}

export default Icon;
