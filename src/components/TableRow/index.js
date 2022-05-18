import React from "react";
import { MoreButton } from "../MoreButton";
import "./style.scss";
import Divider from "@mui/material/Divider";
import { useMask } from "../../hooks/useMask";
import { ImageContainer } from "../ImageContainer";
import { deleteForm, disableForm, enableForm } from "../../redux/actions/form";
import { useDispatch } from "react-redux";

export const TableRow = ({
  id,
  img,
  identification,
  doc,
  uf,
  city,
  zipCode,
  date,
  disabled,
  docType,
}) => {
  const { docNumberMask, zipCodeMask, dateMask, localMask } = useMask();
  const dispatch = useDispatch();

  const handleDisableForm = (id) => {
    dispatch(disableForm(id));
  };

  const handleEnableForm = (id) => {
    dispatch(enableForm(id));
  };

  const handleDeleteForm = (id) => {
    dispatch(deleteForm(id));
  };

  return (
    <div className="table-row">
      <div
        className={
          disabled === true
            ? "table-row__content--disabled"
            : "table-row__content"
        }
      >
        <div className="table-row__item table-row__first-column">
          <div className="table-row__img">
            {img !== "" && <ImageContainer src={img} />}
          </div>
          <div className="table-row__description">
            <h4>{identification}</h4>
            <p>{docNumberMask(docType, doc)}</p>
          </div>
        </div>
        <div className="table-row__item table-row__second-column ">
          {localMask(city, uf)}
        </div>
        <div className="table-row__item table-row__third-column">
          {zipCodeMask(zipCode)}
        </div>
        <div className="table-row__item table-row__fourth-column">
          {date !== "" && dateMask(date)}
        </div>
        <div className="table-row__item table-row__fifth-column">
          <MoreButton
            id={id}
            handleDisableForm={handleDisableForm}
            testId={"button-table-row"}
            disabled={disabled}
            handleEnableForm={handleEnableForm}
            handleDeleteForm={handleDeleteForm}
          />
        </div>
      </div>
      <Divider />
    </div>
  );
};
