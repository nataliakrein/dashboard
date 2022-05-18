import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router";

import { DashboardItem } from "..";

describe("Testing DashboardItem component", () => {
  it("should render the component", () => {
    const icon = "icon text test";
    const title = "title text test";
    const href = "/";
    render(
      <MemoryRouter>
        <DashboardItem icon={icon} title={title} href={href} />
      </MemoryRouter>
    );
    expect(icon).toEqual("icon text test");
    expect(title).toEqual("title text test");
    expect(href).toEqual("/");
  });
});
