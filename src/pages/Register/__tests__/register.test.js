import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ReduxProvider } from "../../../providers/ReduxProvider";
import { Register } from "../index";
import { jest } from "@jest/globals";
import * as reactRedux from "react-redux";

describe("Test Register Page", () => {
  it("should send a form when click on save button", async () => {
    const form = {
      disabled: false,
    };

    const errors = {};
    const validationRules = {};

    const setForm = jest.fn();
    const setFormValue = jest.fn();
    const handleSubmit = jest.fn();
    const send = jest.fn();

    const postDataForm = jest.fn();

    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);

    render(
      <ReduxProvider>
        <MemoryRouter>
          <Register
            form={form}
            errors={errors}
            setForm={setForm}
            postDataForm={postDataForm}
            setFormValue={setFormValue}
            handleSubmit={handleSubmit}
            send={send}
            dispatch={useDispatchMock}
            validationRules={validationRules}
          />
        </MemoryRouter>
      </ReduxProvider>
    );
    fireEvent.input(screen.getByTestId("imgInput"), {
      target: { value: "" },
    });
    fireEvent.input(screen.getByTestId("docTypeInput"), {
      target: { value: "CPF" },
    });
    fireEvent.input(screen.getByTestId("docNumberInput"), {
      target: { value: "01234567891" },
    });
    fireEvent.input(screen.getByTestId("nameInput"), {
      target: { value: "Test" },
    });
    fireEvent.input(screen.getByTestId("emailInput"), {
      target: { value: "email@test.com" },
    });
    fireEvent.change(screen.getByTestId("dateInput"), {
      target: { value: "2022-04-04" },
    });
    fireEvent.input(screen.getByTestId("zipCodeInput"), {
      target: { value: "76543211" },
    });
    fireEvent.input(screen.getByTestId("addressInput"), {
      target: { value: "Address test" },
    });
    fireEvent.input(screen.getByTestId("numberInput"), {
      target: { value: "1" },
    });
    fireEvent.input(screen.getByTestId("complementInput"), {
      target: { value: "Complement test" },
    });
    fireEvent.input(screen.getByTestId("regionInput"), {
      target: { value: "Region test" },
    });
    fireEvent.change(screen.getByTestId("ufInput"), {
      target: { value: "AC" },
    });
    fireEvent.input(screen.getByTestId("cityInput"), {
      target: { value: "City test" },
    });

    await waitFor(() => {
      setTimeout(() => {
        fireEvent.submit(screen.getByText("SALVAR"));
        expect(send).toHaveBeenCalled();
      }, 100);
    });
  });
  it("should test dispatch", async () => {
    const form = {
      docType: "CPF",
      docNumber: "11987654321",
      name: "Name Test",
      email: "email@test.com",
      date: "04/10/2022",
      zipCode: "87654321",
      address: "Address test",
      number: 1,
      complement: "Complement test",
      region: "Region test",
      uf: "AC",
      city: "City test",
      disabled: false,
    };

    const postDataForm = { type: "POST_DATA_FORM", payload: form };

    const mapDispatchToProps = (dispatch) => {
      return {
        postDataForm: () => {
          dispatch(postDataForm);
        },
      };
    };
    const dispatch = jest.fn();
    const map = mapDispatchToProps(dispatch);

    const errors = {};
    const validationRules = {};

    const setForm = jest.fn();
    const setFormValue = jest.fn();
    const handleSubmit = jest.fn();
    const send = jest.fn();

    render(
      <ReduxProvider>
        <MemoryRouter>
          <Register
            form={form}
            errors={errors}
            setForm={setForm}
            postDataForm={postDataForm}
            setFormValue={setFormValue}
            handleSubmit={handleSubmit}
            send={send}
            dispatch={dispatch}
            validationRules={validationRules}
          />
        </MemoryRouter>
      </ReduxProvider>
    );
    fireEvent.submit(screen.getByText("SALVAR"));
    map.postDataForm();
    expect(dispatch).toHaveBeenCalledWith({
      payload: {
        address: "Address test",
        city: "City test",
        complement: "Complement test",
        date: "04/10/2022",
        disabled: false,
        docNumber: "11987654321",
        docType: "CPF",
        email: "email@test.com",
        name: "Name Test",
        number: 1,
        region: "Region test",
        uf: "AC",
        zipCode: "87654321",
      },
      type: "POST_DATA_FORM",
    });
  });
});
