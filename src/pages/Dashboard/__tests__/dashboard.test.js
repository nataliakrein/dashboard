import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";
import { ReduxProvider } from "../../../providers/ReduxProvider";
import { Dashboard } from "..";

describe("Testing Dashboard component", () => {
  it("should render the component", () => {
    render(
      <ReduxProvider>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </ReduxProvider>
    );
    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Listar empresas")).toBeInTheDocument();
    expect(screen.getByText("Cadastrar empresa")).toBeInTheDocument();
  });
});
