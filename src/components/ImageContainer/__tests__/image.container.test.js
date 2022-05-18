import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";

import { ImageContainer } from "..";

describe("Testing ImageContainer component", () => {
  it("should render the component", () => {
    const ref = null;
    const scr = "image";
    render(
      <MemoryRouter>
        <ImageContainer ref={ref} src={scr} />
      </MemoryRouter>
    );
    expect(scr).toEqual("image");
  });
});
