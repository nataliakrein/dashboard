import { Divider } from "@mui/material";
import React from "react";
import "./style.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const TableHead = (props) => {
  return (
    <div className="table-head">
      <div className="table-head__content">
        <div className="table-head__item table-head__first-column">
          <h3>Identificação</h3>
          <KeyboardArrowDownIcon fontSize="small" onClick={props.sortBy} />
        </div>
        <div className="table-head__item table-head__second-column">
          <h3>Cidade/UF</h3>
        </div>
        <div className="table-head__item table-head__third-column">
          <h3>CEP</h3>
        </div>
        <div className="table-head__item table-head__fourth-column">
          <h3>Data de abertura</h3>
        </div>
        <div className="table-head__item table-head__fifth-column"></div>
      </div>
      <Divider />
    </div>
  );
};
