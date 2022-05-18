import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ReduxProvider } from "../../../providers/ReduxProvider";
import { TableFooter } from "../index";
import { jest } from "@jest/globals";

describe("Test TableFooter Page", () => {
  it("should call handleChangeItemsToDisplay", async () => {
    const handleChangeItemsToDisplay = jest.fn();
    const setPage = jest.fn();
    const setItemsToDisplay = jest.fn();
    const itemsToDisplay = 30;

    render(
      <ReduxProvider>
        <MemoryRouter>
          <TableFooter
            itemsToDisplay={itemsToDisplay}
            setPage={setPage}
            setItemsToDisplay={setItemsToDisplay}
            handleChangeItemsToDisplay={handleChangeItemsToDisplay}
          />
        </MemoryRouter>
      </ReduxProvider>
    );

    const selectInput = screen.getByTestId("select-items-to-display");
    fireEvent.select(selectInput, {
      target: { value: 20 },
    });

    expect(screen.getByTestId("select-items-to-display").value).toBe("20");
    expect(screen.getByTestId("select-number-of-pages").value).toBe("0");
  });

  it("should call handleChangePage", async () => {
    const handleChangePage = jest.fn();
    const setPage = jest.fn();
    const setItemsToDisplay = jest.fn();
    const itemsToDisplay = 30;

    render(
      <ReduxProvider>
        <MemoryRouter>
          <TableFooter
            itemsToDisplay={itemsToDisplay}
            setPage={setPage}
            setItemsToDisplay={setItemsToDisplay}
            handleChangePage={handleChangePage}
          />
        </MemoryRouter>
      </ReduxProvider>
    );

    const selectInput = screen.getByTestId("select-number-of-pages");
    fireEvent.select(selectInput, {
      target: { value: 1 },
    });

    expect(screen.getByTestId("select-number-of-pages").value).toBe("1");
    expect(screen.getByTestId("select-items-to-display").value).toBe("30");
  });
});
