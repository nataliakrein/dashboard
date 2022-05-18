import React from "react";
import { DashboardItem } from "../../components/DashboardItem";
import "./style.scss";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Início</h1>
      <div className="dashboard__items">
        <DashboardItem
          icon={<HomeWorkOutlinedIcon />}
          title={"Listar empresas"}
          href={"/lista"}
        />
        <DashboardItem
          icon={<StorefrontOutlinedIcon />}
          title={"Cadastrar empresa"}
          href={"/cadastrar"}
        />
      </div>
    </div>
  );
};
