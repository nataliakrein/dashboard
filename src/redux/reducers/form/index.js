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

const initialState = {
  formList: [],
  form: {},
  cep: {},
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA_FORM:
      return {
        ...state,
        formList: [...state.formList, action.form],
        form: action.form,
      };
    case GET_DATA_FORM:
      return {
        ...state,
        formList: [state.formList],
      };
    case EDIT_FORM:
      return {
        ...state,
        formList: [
          ...state.formList.map((form) =>
            form.id === action.form.id ? action.form : form
          ),
        ],
      };
    case SORT_IN_ALPHABETICAL_ORDER:
      return {
        ...state,
        formList: action.formList.sort((a, b) => a.name.localeCompare(b.name)),
      };
    case DISABLE_FORM:
      return {
        ...state,
        formList: state.formList.map((form) =>
          action.id === form.id ? { ...form, disabled: true } : form
        ),
      };
    case ENABLE_FORM:
      return {
        ...state,
        formList: state.formList.map((form) =>
          action.id === form.id ? { ...form, disabled: false } : form
        ),
      };
    case DELETE_FORM:
      return {
        ...state,
        formList: state.formList.filter((form) => action.id !== form.id),
      };
    case GET_CEP:
      return {
        ...state,
        cep: action.cep,
      };

    default:
      return state;
  }
};
