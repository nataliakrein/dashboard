import React, { useEffect, useState } from "react";
import "./style.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useSelector } from "react-redux";

export const TableFooter = (props) => {
  const allDataForm = useSelector((state) => state.formReducer.formList);
  const [numberOfPages, setNumberOfPages] = useState();

  useEffect(() => {
    setNumberOfPages(
      allDataForm.length > props.itemsToDisplay &&
        Math.ceil(allDataForm.length / props.itemsToDisplay)
    );
  }, [allDataForm, props.itemsToDisplay]);

  const handleChangeItemsToDisplay = (e) => {
    props.setItemsToDisplay(e.target.value);
    props.setPage(0);
    props.setStartIndex(0);
  };

  const handleChangePage = (e) => {
    props.setPage(e.target.value);
    props.setStartIndex(Number(`${e.target.value}0`));
  };

  return (
    <div className="table-footer">
      <div className="table-footer__input">
        <InputLabel id="pages" style={{ color: "#7d8786", fontSize: "14px" }}>
          Página
        </InputLabel>
        <Select
          style={{ width: "45px" }}
          variant="standard"
          labelId="pages"
          id="pages"
          value={props.page || 0}
          onChange={handleChangePage}
          inputProps={{ "data-testid": "select-number-of-pages" }}
          label="Página"
        >
          {Array(numberOfPages)
            .fill(numberOfPages)
            .map((option, index) => (
              <MenuItem key={index} value={index}>
                {index + 1}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div className="table-footer__input">
        <InputLabel
          id="maxItemsToDisplay"
          style={{ color: "#7d8786", fontSize: "14px" }}
        >
          Registros por Página
        </InputLabel>
        <Select
          style={{ width: "45px" }}
          variant="standard"
          labelId="maxItemsToDisplay"
          id="maxItemsToDisplay"
          value={props.itemsToDisplay}
          inputProps={{ "data-testid": "select-items-to-display" }}
          onChange={handleChangeItemsToDisplay}
          label="Registros por Página"
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={allDataForm.length}>Tudo</MenuItem>
        </Select>
      </div>

      <p className="table-footer__pages">{`1 - 10 de ${allDataForm.length}`}</p>
      <div className="table-footer__pagination">
        <FirstPageIcon
          style={{
            color: props.page === 0 ? "#DCDCDC" : "#888888",
          }}
          onClick={props.showFirstPage}
        />
        <ChevronLeftIcon
          style={{
            color: props.page === 0 ? "#DCDCDC" : "#888888",
          }}
          onClick={props.showPreviousPage}
        />
        <ChevronRightIcon
          style={{
            color:
              props.page + 1 !== numberOfPages &&
              props.itemsToDisplay !== allDataForm.length &&
              allDataForm.length >= props.itemsToDisplay
                ? "#888888"
                : "#DCDCDC",
          }}
          onClick={props.showNextPage}
        />
        <LastPageIcon
          style={{
            color:
              props.page + 1 === numberOfPages ||
              props.itemsToDisplay === allDataForm.length ||
              allDataForm.length <= props.itemsToDisplay
                ? "#DCDCDC"
                : "#888888",
          }}
          onClick={props.showLastPage}
        />
      </div>
    </div>
  );
};
