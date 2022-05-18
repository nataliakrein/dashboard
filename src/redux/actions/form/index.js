import { getCEPRequest } from "../../../components/service";
import {
  POST_DATA_FORM,
  GET_DATA_FORM,
  EDIT_FORM,
  SORT_IN_ALPHABETICAL_ORDER,
  DISABLE_FORM,
  GET_CEP,
  ENABLE_FORM,
  DELETE_FORM,
} from "../../types/form";

export const postDataForm = (form) => ({
  type: POST_DATA_FORM,
  form,
});

export const getDataForm = (formList) => ({
  type: GET_DATA_FORM,
  formList,
});

export const sortAlphabetically = (formList) => {
  return {
    type: SORT_IN_ALPHABETICAL_ORDER,
    formList,
  };
};

export const editForm = (form) => ({
  type: EDIT_FORM,
  form,
});

export const disableForm = (id) => ({
  type: DISABLE_FORM,
  id,
});

export const enableForm = (id) => ({
  type: ENABLE_FORM,
  id,
});

export const deleteForm = (id) => ({
  type: DELETE_FORM,
  id,
});

export const getCEP = (cep) => {
  return (dispatch) => {
    getCEPRequest(cep).then((response) =>
      dispatch({ type: GET_CEP, cep: response.data })
    );
  };
};
