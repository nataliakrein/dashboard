import { formReducer } from "..";

import {
  postDataForm,
  getDataForm,
  sortAlphabetically,
  editForm,
  disableForm,
  deleteForm,
  enableForm,
  getCEP,
} from "../../../actions/form";

describe("Reducer test", () => {
  it("should return [] as initial state", () => {
    expect(formReducer(undefined, {})).toEqual({
      cep: {},
      formList: [],
      form: {},
    });
  });

  it("should handle POST_DATA_FORM", () => {
    const initialState = {
      form: { test: "test" },
      formList: ["test"],
    };
    expect(formReducer(initialState, postDataForm([{ test: "test" }]))).toEqual(
      {
        form: [
          {
            test: "test",
          },
        ],
        formList: [
          "test",
          [
            {
              test: "test",
            },
          ],
        ],
      }
    );
  });

  it("should handle GET_DATA_FORM", () => {
    const initialState = {
      formList: ["test"],
    };
    expect(formReducer(initialState, getDataForm())).toEqual({
      formList: [["test"]],
    });
  });

  it("should handle EDIT_FORM", () => {
    const initialState = {
      form: { test: "test" },
      formList: ["test"],
    };
    const form = {
      test: "edit test",
    };
    expect(formReducer(initialState, editForm(form))).toEqual({
      form: {
        test: "test",
      },
      formList: [
        {
          test: "edit test",
        },
      ],
    });
  });

  it("should handle SORT_IN_ALPHABETICAL_ORDER", () => {
    const initialState = {
      formList: [{ name: "btest" }, { name: "atest" }],
    };
    expect(
      formReducer(initialState, sortAlphabetically(initialState.formList))
    ).toEqual({ formList: [{ name: "atest" }, { name: "btest" }] });
  });

  it("should handle DISABLE_FORM", () => {
    const initialState = {
      formList: [{ id: "1" }, { id: "2" }],
    };
    expect(formReducer(initialState, disableForm("2"))).toEqual({
      formList: [
        {
          id: "1",
        },
        {
          disabled: true,
          id: "2",
        },
      ],
    });
  });

  it("should handle ENABLE_FORM", () => {
    const initialState = {
      formList: [{ id: "1" }, { id: "2", disabled: true }],
    };
    expect(formReducer(initialState, enableForm("2"))).toEqual({
      formList: [
        {
          id: "1",
        },
        {
          disabled: false,
          id: "2",
        },
      ],
    });
  });

  it("should handle DELETE_FORM", () => {
    const initialState = {
      formList: [{ id: "1" }, { id: "2" }],
    };
    expect(formReducer(initialState, deleteForm("2"))).toEqual({
      formList: [
        {
          id: "1",
        },
      ],
    });
  });

  it("should handle GET_CEP", () => {
    const initialState = {
      cep: {},
    };
    expect(formReducer(initialState, getCEP("11111111"))).toEqual({ cep: {} });
  });
});
