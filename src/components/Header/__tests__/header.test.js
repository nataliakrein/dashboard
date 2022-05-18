import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Header } from "..";

describe("Testing Header component", () => {
  it("should render the component", () => {
    const children = "header component test";

    render(<Header>{children}</Header>);
    expect(children).toEqual("header component test");
  });
});
