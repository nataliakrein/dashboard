import { MenuItem, TextField } from "@mui/material";
import React, { useEffect } from "react";
import "./style.scss";
import { docTypeMock } from "../../utils/docTypeMock";
import { ufMock } from "../../utils/ufMock";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { ImageContainer } from "../ImageContainer";
import { getCEP } from "../../redux/actions/form";
import { useSelector, useDispatch } from "react-redux";
import { useMask } from "../../hooks/useMask";

export const Form = (props) => {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const dispatch = useDispatch();
  const cep = useSelector((state) => state.formReducer.cep);

  const { docNumberMask, zipCodeMask } = useMask();

  useEffect(() => {
    let newZipCode = props.form.zipCode.replace(/[^a-z0-9]/gi, "");
    if (newZipCode.length === 8) {
      cep.erro !== true && dispatch(getCEP(newZipCode));
      props.setForm({
        ...props.form,
        address: cep.logradouro,
        region: cep.bairro,
        uf: cep.uf,
        city: cep.localidade,
      });
    }
  }, [props.form.zipCode, cep.logradouro, cep.bairro, cep.uf, cep.localidade]);

  const setFormValue = (key) => (event) => {
    if (key === "img") {
      const [file] = event.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = (e) => {
          current.src = e.target.result;
          props.setForm({
            ...props.form,
            [key]: e.target.result,
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      props.setForm({
        ...props.form,
        [key]: event?.target?.value,
      });
    }
  };

  const disableFutureDates = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <form className="form">
      <div className="form__section">
        <div className="form__container">
          <div className="form__img">
            <label htmlFor="input-file" className="form__img__label">
              <input
                data-testid="imgInput"
                className="form__img__input"
                accept="image/*"
                id="input-file"
                type="file"
                onChange={setFormValue("img")}
                ref={imageUploader}
                disabled={props.form.disabled === true ? true : false}
              />
              {props.form.img === "" ? (
                <IconButton aria-label="upload picture" ref={uploadedImage}>
                  <PhotoCamera />
                </IconButton>
              ) : (
                <ImageContainer
                  reference={uploadedImage}
                  src={props.form.img !== "" ? props.form.img : undefined}
                />
              )}
            </label>
          </div>

          <div className="form__inputs">
            <TextField
              inputProps={{
                "data-testid": "docTypeInput",
              }}
              id="input-doc-type"
              select
              label="Tipo de documento"
              value={props.form.docType || ""}
              onChange={setFormValue("docType")}
              variant="standard"
              className="form__inputs__docType"
              helperText={props.errors.docType}
              error={props.errors.docType}
              disabled={props.form.disabled === true ? true : false}
            >
              {docTypeMock.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              className="form__inputs__doc"
              inputProps={{
                "data-testid": "docNumberInput",
              }}
              disabled={props.form.disabled === true ? true : false}
              label="Documento"
              variant="standard"
              helperText={props.errors.docNumber}
              error={props.errors.docNumber}
              value={
                docNumberMask(props.form.docType, props.form.docNumber) || ""
              }
              onChange={setFormValue("docNumber")}
              type="text"
              id="input-doc"
            />

            <TextField
              type="text"
              id="input-name"
              label="Nome completo/Razão social"
              inputProps={{
                "data-testid": "nameInput",
              }}
              value={props.form.name || ""}
              onChange={setFormValue("name")}
              className="form__inputs__name"
              variant="standard"
              helperText={props.errors.name}
              error={props.errors.name}
              disabled={props.form.disabled === true ? true : false}
            />
            <TextField
              type="email"
              id="input-emaii"
              inputProps={{
                "data-testid": "emailInput",
              }}
              label="E-mail"
              value={props.form.email || ""}
              onChange={setFormValue("email")}
              variant="standard"
              className="form__inputs__email"
              helperText={props.errors.email}
              error={props.errors.email}
              disabled={props.form.disabled === true ? true : false}
            />
            <TextField
              id="input-date"
              label="Data de abertura"
              inputProps={{
                "data-testid": "dateInput",
                max: disableFutureDates(),
              }}
              value={props.form.date || ""}
              onChange={setFormValue("date")}
              variant="standard"
              className="form__inputs__date"
              helperText={props.errors.date}
              error={props.errors.date}
              type="date"
              InputLabelProps={{ shrink: true }}
              disabled={props.form.disabled === true ? true : false}
            />
          </div>
        </div>

        <div className="form__section__address">
          <h3 className="form__section__address__title">Endereço</h3>
          <div className="address__inputs">
            <TextField
              inputProps={{
                "data-testid": "zipCodeInput",
              }}
              disabled={props.form.disabled === true ? true : false}
              className="address__inputs__zipCode"
              label="CEP"
              variant="standard"
              helperText={props.errors.zipCode}
              error={props.errors.zipCode}
              type="text"
              id="input-zipCode"
              value={zipCodeMask(props.form.zipCode) || ""}
              onChange={setFormValue("zipCode")}
            />
            <TextField
              id="input-address"
              label="Endereço"
              inputProps={{
                "data-testid": "addressInput",
              }}
              value={props.form.address || ""}
              onChange={setFormValue("address")}
              variant="standard"
              className="address__inputs__address"
              helperText={props.errors.address}
              error={props.errors.address}
              disabled={props.form.disabled === true ? true : false}
            />
            <TextField
              type="number"
              id="input-number"
              inputProps={{
                "data-testid": "numberInput",
              }}
              label="Número"
              variant="standard"
              value={props.form.number || ""}
              onChange={setFormValue("number")}
              className="address__inputs__number"
              helperText={props.errors.number}
              error={props.errors.number}
              disabled={props.form.disabled === true ? true : false}
            />
            <TextField
              id="input-complement"
              inputProps={{
                "data-testid": "complementInput",
              }}
              label="Complemento"
              variant="standard"
              value={props.form.complement || ""}
              onChange={setFormValue("complement")}
              className="address__inputs__complement"
              disabled={props.form.disabled === true ? true : false}
            />
            <TextField
              type="text"
              id="input-region"
              inputProps={{
                "data-testid": "regionInput",
              }}
              label="Bairro"
              variant="standard"
              value={props.form.region || ""}
              onChange={setFormValue("region")}
              className="address__inputs__region"
              helperText={props.errors.region}
              error={props.errors.region}
              disabled={props.form.disabled === true ? true : false}
            />
            <TextField
              select
              id="input-uf"
              inputProps={{
                "data-testid": "ufInput",
              }}
              label="UF"
              value={props.form.uf || ""}
              onChange={setFormValue("uf")}
              variant="standard"
              className="address__inputs__uf"
              helperText={props.errors.uf}
              error={props.errors.uf}
              disabled={props.form.disabled === true ? true : false}
            >
              {ufMock.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              type="text"
              id="input-city"
              label="Cidade"
              inputProps={{
                "data-testid": "cityInput",
              }}
              variant="standard"
              value={props.form.city || ""}
              onChange={setFormValue("city")}
              className="address__inputs__city"
              helperText={props.errors.city}
              error={props.errors.city}
              disabled={props.form.disabled === true ? true : false}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
