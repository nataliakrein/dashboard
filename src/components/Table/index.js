import React, { useState, useEffect } from "react";
import { TableHead } from "../TableHead";
import { TableRow } from "../TableRow";
import { TableFooter } from "../TableFooter";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { sortAlphabetically } from "../../redux/actions/form";

export const Table = () => {
  const dispatch = useDispatch();
  const dataForm = useSelector((state) => state.formReducer.formList);
  const [startIndex, setStartIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [itemsToDisplay, setItemsToDisplay] = useState(10);
  const [visibleItems, setVisibleItems] = useState(
    dataForm.slice(startIndex, startIndex + itemsToDisplay)
  );

  const showPreviousPage = () => {
    page !== 0 && setPage(page - 1);
    page !== 0 && setStartIndex(startIndex - itemsToDisplay);
  };

  const showNextPage = () => {
    visibleItems[visibleItems.length - 1] !== dataForm[dataForm.length - 1] &&
      setPage(page + 1);
    visibleItems[visibleItems.length - 1] !== dataForm[dataForm.length - 1] &&
      setStartIndex(startIndex + itemsToDisplay);
  };

  const showFirstPage = () => {
    page !== 0 && setPage(0);
  };

  const showLastPage = () => {
    dataForm.length > itemsToDisplay &&
      setPage(Math.floor(dataForm.length / itemsToDisplay));
  };

  useEffect(() => {
    setVisibleItems(dataForm.slice(startIndex, startIndex + itemsToDisplay));
  }, [page, startIndex, itemsToDisplay, dataForm]);

  const sortBy = () => {
    let sortedForms = dataForm.slice();
    dispatch(sortAlphabetically(sortedForms));
  };

  return (
    <div className="table">
      <div className="table__container">
        <TableHead sortBy={sortBy} />
        {visibleItems.map((data, index) => (
          <div className="table__row" key={index}>
            <TableRow
              id={data.id}
              identification={data.name}
              doc={data.docNumber}
              docType={data.docType}
              uf={data.uf}
              city={data.city}
              zipCode={data.zipCode}
              date={data.date}
              img={data.img}
              disabled={data.disabled}
            />
          </div>
        ))}
      </div>
      <TableFooter
        page={page}
        showPreviousPage={showPreviousPage}
        itemsToDisplay={itemsToDisplay}
        setItemsToDisplay={setItemsToDisplay}
        showNextPage={showNextPage}
        setPage={setPage}
        showFirstPage={showFirstPage}
        showLastPage={showLastPage}
        setVisibleItems={setVisibleItems}
        setStartIndex={setStartIndex}
      />
    </div>
  );
};
