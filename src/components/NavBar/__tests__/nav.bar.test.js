import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";

import { NavBar } from "..";

describe("Testing NavBar component", () => {
  it("should render the component", () => {
    const scr = "logo";
    render(
      <MemoryRouter>
        <NavBar src={scr} />
      </MemoryRouter>
    );
    expect(scr).toEqual("logo");
  });
});
