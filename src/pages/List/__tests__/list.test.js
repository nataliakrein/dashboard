import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ReduxProvider } from "../../../providers/ReduxProvider";
import { List } from "../index";
import * as reactRedux from "react-redux";
import { jest } from "@jest/globals";

describe("Testing List Page", () => {
  it("should return form values", async () => {
    const useSelectorMock = jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValue([
        {
          id: 1,
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
          uf: "Uf test",
          city: "City test",
          disabled: false,
        },
      ]);

    render(
      <ReduxProvider>
        <MemoryRouter>
          <List dataForm={useSelectorMock} />
        </MemoryRouter>
      </ReduxProvider>
    );
    expect(screen.getByText("Empresas")).toBeInTheDocument();
    expect(screen.getByText("119.876.543-21")).toBeInTheDocument();
    expect(screen.getByText("Name Test")).toBeInTheDocument();
    expect(screen.getByText("City test/Uf test")).toBeInTheDocument();
    expect(screen.getByText("10/04/2022")).toBeInTheDocument();
    expect(screen.getByText("87.654-321")).toBeInTheDocument();
  });
  it("should return a message", async () => {
    const useSelectorMock = jest
      .spyOn(reactRedux, "useSelector")
      .mockReturnValue([]);

    render(
      <ReduxProvider>
        <MemoryRouter>
          <List dataForm={useSelectorMock} />
        </MemoryRouter>
      </ReduxProvider>
    );
    expect(screen.getByText("Nenhum item adicionado!")).toBeInTheDocument();
  });
});
