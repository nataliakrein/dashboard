import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ReduxProvider } from "../../../providers/ReduxProvider";
import { Table } from "../index";
import { jest } from "@jest/globals";

describe("Test Table component", () => {
  it("should call showPreviousPage", async () => {
    const showPreviousPage = jest.fn();

    render(
      <ReduxProvider>
        <MemoryRouter>
          <Table showPreviousPage={showPreviousPage} />
        </MemoryRouter>
      </ReduxProvider>
    );
    fireEvent.click(screen.getByTestId("ChevronLeftIcon"));
    await waitFor(() => {
      setTimeout(() => {
        expect(showPreviousPage).toHaveBeenCalled();
      }, 1000);
    });
  });

  it("should call showNextPage", async () => {
    const showNextPage = jest.fn();

    render(
      <ReduxProvider>
        <MemoryRouter>
          <Table showNextPage={showNextPage} />
        </MemoryRouter>
      </ReduxProvider>
    );

    fireEvent.click(screen.getByTestId("ChevronRightIcon"));
    await waitFor(() => {
      setTimeout(() => {
        expect(showNextPage).toHaveBeenCalled();
      }, 1000);
    });
  });
  it("should call showFirstPage", async () => {
    const showFirstPage = jest.fn();

    render(
      <ReduxProvider>
        <MemoryRouter>
          <Table showFirstPage={showFirstPage} />
        </MemoryRouter>
      </ReduxProvider>
    );
    fireEvent.click(screen.getByTestId("FirstPageIcon"));
    await waitFor(() => {
      setTimeout(() => {
        expect(showFirstPage).toHaveBeenCalled();
      }, 1000);
    });
  });
  it("should call showLastPage", async () => {
    const showLastPage = jest.fn();

    render(
      <ReduxProvider>
        <MemoryRouter>
          <Table showLastPage={showLastPage} />
        </MemoryRouter>
      </ReduxProvider>
    );

    fireEvent.click(screen.getByTestId("LastPageIcon"));
    await waitFor(() => {
      setTimeout(() => {
        expect(showLastPage).toHaveBeenCalled();
      }, 1000);
    });
  });
  it("should call sortBy", async () => {
    const sortBy = jest.fn();

    render(
      <ReduxProvider>
        <MemoryRouter>
          <Table sortBy={sortBy} />
        </MemoryRouter>
      </ReduxProvider>
    );

    fireEvent.click(screen.getByTestId("KeyboardArrowDownIcon"));
    await waitFor(() => {
      setTimeout(() => {
        expect(sortBy).toHaveBeenCalled();
      }, 1000);
    });
  });
});
