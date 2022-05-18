import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export const DashboardItem = ({ title, href, icon }) => {
  return (
    <Link to={href}>
      <div className="dashboard-item">
        <div className="dashboard-item__icon">{icon}</div>
        <h2 className="dashboard-item__title">{title}</h2>
      </div>
    </Link>
  );
};
