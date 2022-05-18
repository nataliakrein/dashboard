import React from "react";
import "./style.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export const HeaderForComponents = ({ title, children }) => {
  let navigate = useNavigate();
  return (
    <div className="header-for-components">
      <button
        type="button"
        onClick={() => navigate(-1)}
        data-testid="header-button"
      >
        <ArrowBackIosIcon color="icon" fontSize="small" />
      </button>
      <div className="header-for-components__children">{children}</div>
    </div>
  );
};
