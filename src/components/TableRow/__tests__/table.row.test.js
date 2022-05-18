import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";
import { ReduxProvider } from "../../../providers/ReduxProvider";
import { TableRow } from "..";
import * as reactRedux from "react-redux";

describe("Testing TableRow component", () => {
  it("should render the component", () => {
    const id = "1";
    const img = "img test";
    const identification = "identificaiton test";
    const doc = "00000000000";
    const zipCode = "00000000";
    const date = "01/01/2022";
    const disabled = false;
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    render(
      <ReduxProvider>
        <MemoryRouter>
          <TableRow
            id={id}
            img={img}
            identification={identification}
            doc={doc}
            zipCode={zipCode}
            date={date}
            disabled={disabled}
            dispatch={dummyDispatch}
          />
        </MemoryRouter>
      </ReduxProvider>
    );
    expect(screen.getByText("identificaiton test")).toBeInTheDocument();
    expect(screen.getByText("01/01/2022")).toBeInTheDocument();
  });

  it("should call disable button", async () => {
    const handleDisableFormSpy = jest.fn();
    const disableFormSpy = jest.fn();
    const id = "1";
    const img = "img test";
    const identification = "identificaiton test";
    const doc = "00000000000";
    const zipCode = "00000000";
    const date = "01/01/2022";
    const disabled = false;
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    render(
      <ReduxProvider>
        <MemoryRouter>
          <TableRow
            id={id}
            img={img}
            identification={identification}
            doc={doc}
            zipCode={zipCode}
            date={date}
            disabled={disabled}
            dispatch={dummyDispatch}
            handleDisableForm={handleDisableFormSpy}
            disableForm={disableFormSpy}
          />
        </MemoryRouter>
      </ReduxProvider>
    );
    fireEvent.click(screen.getByTestId("button-table-row"));
    await waitFor(() => {
      setTimeout(() => {
        expect(handleDisableFormSpy).toBeCalledTimes();
      }, 1000);
    });
  });
  it("should call enable button", async () => {
    const handleEnableFormSpy = jest.fn();
    const disableFormSpy = jest.fn();
    const id = "1";
    const img = "img test";
    const identification = "identificaiton test";
    const doc = "00000000000";
    const zipCode = "00000000";
    const date = "01/01/2022";
    const disabled = true;
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    render(
      <ReduxProvider>
        <MemoryRouter>
          <TableRow
            id={id}
            img={img}
            identification={identification}
            doc={doc}
            zipCode={zipCode}
            date={date}
            disabled={disabled}
            dispatch={dummyDispatch}
            handleEnableForm={handleEnableFormSpy}
            disableForm={disableFormSpy}
          />
        </MemoryRouter>
      </ReduxProvider>
    );
    fireEvent.click(screen.getByTestId("button-table-row"));
    await waitFor(() => {
      setTimeout(() => {
        expect(handleEnableFormSpy).toBeCalledTimes();
      }, 1000);
    });
  });
  it("should call delete button", async () => {
    const handleDeleteFormSpy = jest.fn();
    const disableFormSpy = jest.fn();
    const id = "1";
    const img = "img test";
    const identification = "identificaiton test";
    const doc = "00000000000";
    const zipCode = "00000000";
    const date = "01/01/2022";
    const disabled = true;
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    render(
      <ReduxProvider>
        <MemoryRouter>
          <TableRow
            id={id}
            img={img}
            identification={identification}
            doc={doc}
            zipCode={zipCode}
            date={date}
            disabled={disabled}
            dispatch={dummyDispatch}
            handleDeleteForm={handleDeleteFormSpy}
            disableForm={disableFormSpy}
          />
        </MemoryRouter>
      </ReduxProvider>
    );
    fireEvent.click(screen.getByTestId("button-table-row"));
    await waitFor(() => {
      setTimeout(() => {
        expect(handleDeleteFormSpy).toBeCalledTimes();
      }, 1000);
    });
  });
});
