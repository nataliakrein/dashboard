import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";
import { screen } from "@testing-library/dom";
import { HeaderForComponents } from "..";

describe("Testing HeaderForComponents component", () => {
  it("should render the component", () => {
    const children = "children test";
    render(
      <MemoryRouter>
        <HeaderForComponents>{children}</HeaderForComponents>
      </MemoryRouter>
    );
    expect(children).toEqual("children test");
  });
  it("should call button", async () => {
    const navigateSpy = jest.fn();
    render(
      <MemoryRouter>
        <HeaderForComponents navigate={navigateSpy} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId("header-button"));
    await waitFor(() => {
      setTimeout(() => {
        expect(navigateSpy).toHaveBeenCalled();
      }, 100);
    });
  });
});
