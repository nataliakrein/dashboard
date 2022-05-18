import React, { useState } from "react";
import { Form } from "../../components/Form";
import "./style.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postDataForm } from "../../redux/actions/form";
import { useForm } from "../../hooks/useForm";
import { CustomButton } from "../../components/CustomButton";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { HeaderForComponents } from "../../components/HeaderForComponents";
import { validationRules } from "../../utils/validationRules";
import { v4 as uuidv4 } from "uuid";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: uuidv4(),
    img: "",
    docType: "",
    docNumber: "",
    name: "",
    email: "",
    date: "",
    zipCode: "",
    address: "",
    number: "",
    complement: "",
    region: "",
    uf: "",
    city: "",
    disabled: false,
  });

  const send = () => {
    dispatch(postDataForm(form));
    navigate("/lista");
  };

  const { handleSubmit, errors } = useForm(send, validationRules, form);

  return (
    <div className="register">
      <div className="register-content">
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
              style={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Cadastrar Empresa
            </Typography>
          </Breadcrumbs>
          <CustomButton
            type="button"
            onClick={handleSubmit}
            testid={"register-button"}
          >
            Salvar
          </CustomButton>
        </HeaderForComponents>
        <Form form={form} setForm={setForm} errors={errors} />
      </div>
    </div>
  );
};
