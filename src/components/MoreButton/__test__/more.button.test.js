import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ReduxProvider } from "../../../providers/ReduxProvider";
import { MoreButton } from "../index";
import { jest } from "@jest/globals";

describe("Test MoreButton component", () => {
  it("should show edit option when click on button", async () => {
    const handleMenuItemClick = jest.fn();

    render(
      <ReduxProvider>
        <MemoryRouter>
          <MoreButton handleMenuItemClick={handleMenuItemClick} />
        </MemoryRouter>
      </ReduxProvider>
    );

    fireEvent.click(screen.getByTestId("MoreVertIcon"));
    expect(screen.getByText("Editar")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Editar"));
    await waitFor(() => {
      setTimeout(() => {
        expect(handleMenuItemClick).toHaveBeenCalled();
      }, 100);
    });
  });
});
