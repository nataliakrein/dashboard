import React, { useState } from "react";
import { Form } from "../../components/Form";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteForm, editForm } from "../../redux/actions/form";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { validationRules } from "../../utils/validationRules";
import { CustomButton } from "../../components/CustomButton";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { HeaderForComponents } from "../../components/HeaderForComponents";
import { MoreButton } from "../../components/MoreButton";

export const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const forms = useSelector((state) => state.formReducer.formList);
  const [form, setForm] = useState(forms.find((form) => form.id === id));

  const send = () => {
    dispatch(editForm(form));
    navigate("/lista");
  };

  const { handleSubmit, errors } = useForm(send, validationRules, form);

  const handleDisableForm = () => {
    setForm({ ...form, disabled: true });
  };

  const handleEnableForm = () => {
    setForm({ ...form, disabled: false });
  };

  const handleDeleteForm = (id) => {
    dispatch(deleteForm(form.id));
    navigate("/lista");
  };

  return (
    <div className="edit">
      <div className="edit-content">
        <HeaderForComponents>
          <Breadcrumbs aria-label="breadcrumb" color="secondary">
            <Link
              underline="hover"
              color="secondary"
              href="/lista"
              style={{ fontSize: "16px", fontWeight: "500" }}
            >
              Empresas
            </Link>
            <Typography
              color="secondary"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              {form.name}
            </Typography>
          </Breadcrumbs>
          <div className="edit-content__buttons">
            <CustomButton
              type="button"
              onClick={handleSubmit}
              testid={"edit-button"}
            >
              Salvar
            </CustomButton>
            <MoreButton
              id={id}
              handleDisableForm={handleDisableForm}
              disabled={form.disabled}
              handleEnableForm={handleEnableForm}
              handleDeleteForm={handleDeleteForm}
            />
          </div>
        </HeaderForComponents>
        <Form form={form} setForm={setForm} errors={errors} />
      </div>
    </div>
  );
};
