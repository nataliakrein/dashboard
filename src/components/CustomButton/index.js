import React from "react";
import "./style.scss";

export const CustomButton = ({ type, children, onClick, testid }) => {
  return (
    <button
      className="custom-button"
      type={type}
      onClick={onClick}
      data-testid={testid}
    >
      {children.toUpperCase()}
    </button>
  );
};
