import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";

import { TableHead } from "..";

describe("Testing TableHead component", () => {
  it("should render the component", () => {
    render(
      <MemoryRouter>
        <TableHead />
      </MemoryRouter>
    );
    expect(screen.getByText("Identificação")).toBeInTheDocument();
    expect(screen.getByText("Cidade/UF")).toBeInTheDocument();
    expect(screen.getByText("CEP")).toBeInTheDocument();
    expect(screen.getByText("Data de abertura")).toBeInTheDocument();
  });
});
