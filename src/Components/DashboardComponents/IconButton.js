import React from "react";

function IconButton({ onClick = () => {}, icon = "options", className }) {
  return (
    <button onClick={onClick} type="button" className={className}>
      <i className={`fas fa-${icon} ${className}`} alt="" />
    </button>
  );
}

export default IconButton;
