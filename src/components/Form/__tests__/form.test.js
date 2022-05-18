import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ReduxProvider } from "../../../providers/ReduxProvider";
import { Form } from "../index";
import { jest } from "@jest/globals";
import userEvent from "@testing-library/user-event";
import * as reactRedux from "react-redux";

describe("Test Form Component", () => {
  it("should update the input fields and render form component", async () => {
    const form = {
      disabled: false,
      zipCode: "69945-970",
      docType: "CPF",
      docNumber: "012.345.678-91",
    };

    const useSelectorMock = jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValue({
        logradouro: "",
        bairro: "",
        uf: "",
        localidade: "",
      });

    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);

    const newZipCode = "";

    const errors = {};
    const setForm = jest.fn();
    const setFormValue = jest.fn();

    render(
      <ReduxProvider>
        <MemoryRouter>
          <Form
            newZipCode={newZipCode}
            form={form}
            dispatch={useDispatchMock}
            cep={useSelectorMock}
            errors={errors}
            setForm={setForm}
            setFormValue={setFormValue}
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
      target: { value: "012.345.678-91" },
    });
    fireEvent.input(screen.getByTestId("nameInput"), {
      target: { value: "Test" },
    });
    fireEvent.input(screen.getByTestId("emailInput"), {
      target: { value: "email@test.com" },
    });
    fireEvent.input(screen.getByTestId("dateInput"), {
      target: { value: "04/13/2022" },
    });
    fireEvent.input(screen.getByTestId("zipCodeInput"), {
      target: { value: "69945-970" },
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
    fireEvent.input(screen.getByTestId("ufInput"), {
      target: { value: "RS" },
    });
    fireEvent.input(screen.getByTestId("cityInput"), {
      target: { value: "City test" },
    });
    expect(screen.getByText("Tipo de documento")).toBeInTheDocument();
  });

  it("should return default values", async () => {
    const form = {
      img: "",
      docType: "CPF",
      docNumber: "01234567891",
      name: "Test",
      email: "email@test.com",
      date: "2022-04-04",
      zipCode: "76543211",
      address: "Address test",
      number: "1",
      complement: "Complement test",
      region: "Region test",
      uf: "RS",
      city: "City test",
      disabled: false,
    };

    const useSelectorMock = jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValue({
        logradouro: "",
        bairro: "",
        uf: "",
        localidade: "",
      });

    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);

    const newZipCode = "";
    const errors = {};
    const setForm = jest.fn();
    const setFormValue = jest.fn();

    render(
      <ReduxProvider>
        <MemoryRouter>
          <Form
            cep={useSelectorMock}
            newZipCode={newZipCode}
            form={form}
            errors={errors}
            setForm={setForm}
            dispatch={useDispatchMock}
            setFormValue={setFormValue}
          />
        </MemoryRouter>
      </ReduxProvider>
    );

    expect(screen.getByTestId("docTypeInput").value).toBe("CPF");
    expect(screen.getByTestId("docNumberInput").value).toBe("012.345.678-91");
    expect(screen.getByTestId("emailInput").value).toBe("email@test.com");
    expect(screen.getByTestId("dateInput").value).toBe("2022-04-04");
    expect(screen.getByTestId("zipCodeInput").value).toBe("76.543-211");
    expect(screen.getByTestId("addressInput").value).toBe("Address test");
    expect(screen.getByTestId("numberInput").value).toBe("1");
    expect(screen.getByTestId("ufInput").value).toBe("RS");
  });

  it("should upload the image", async () => {
    const form = {
      img: "",
      docType: "CPF",
      docNumber: "01234567891",
      name: "Test",
      email: "email@test.com",
      date: "2022-04-04",
      zipCode: "76543211",
      address: "Address test",
      number: "1",
      complement: "Complement test",
      region: "Region test",
      uf: "RS",
      city: "City test",
      disabled: false,
    };

    const useSelectorMock = jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValue({
        logradouro: "",
        bairro: "",
        uf: "",
        localidade: "",
      });

    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);

    const newZipCode = "";

    const errors = {};

    const setForm = jest.fn();
    const setFormValue = jest.fn();

    const file = new File(["hello"], "hello.png", { type: "image/png" });

    render(
      <ReduxProvider>
        <MemoryRouter>
          <Form
            cep={useSelectorMock}
            newZipCode={newZipCode}
            form={form}
            errors={errors}
            setForm={setForm}
            dispatch={useDispatchMock}
            setFormValue={setFormValue("img")}
          />
        </MemoryRouter>
      </ReduxProvider>
    );

    const input = screen.getByTestId("imgInput");
    userEvent.upload(input, file);

    expect(input.files[0]).toStrictEqual(file);
    expect(input.files.item(0)).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
  });
});
