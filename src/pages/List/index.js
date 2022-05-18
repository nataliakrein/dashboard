import React from "react";
import { HeaderForComponents } from "../../components/HeaderForComponents";
import { Table } from "../../components/Table";
import Typography from "@mui/material/Typography";
import "./style.scss";
import Fab from "@mui/material/Fab";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export const List = () => {
  const dataForm = useSelector((state) => state.formReducer.formList);

  if (dataForm.length === 0)
    return (
      <div className="list">
        <Typography>Nenhum item adicionado!</Typography>
        <Link to="/cadastrar">
          <Fab className="list__fab" aria-label="add">
            <AddIcon color="secondary" />
          </Fab>
        </Link>
      </div>
    );

  return (
    dataForm.length !== 0 && (
      <div className="list">
        <div className="list__table">
          <HeaderForComponents>
            <Typography color="secondary">Empresas</Typography>
          </HeaderForComponents>
          <Table />
        </div>
        <Link to="/cadastrar">
          <Fab className="list__fab" aria-label="add">
            <AddIcon color="secondary" />
          </Fab>
        </Link>
      </div>
    )
  );
};
