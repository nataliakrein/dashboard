import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CustomButton } from "..";

describe("Testing CustomButton component", () => {
  it("should render the component", () => {
    const children = "button text test";
    render(<CustomButton>{children}</CustomButton>);
    expect(children).toEqual("button text test");
  });
});
