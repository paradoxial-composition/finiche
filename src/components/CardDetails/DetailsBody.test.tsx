import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import DetailsBody from "./DetailsBody";

describe("DetailsBody component", () => {
  it("renders the correct value", () => {
    const renderValueMock = jest.fn().mockReturnValueOnce("Jhon stark");
    const { getByText } = render(<DetailsBody renderValue={renderValueMock} />);
    const titleElement = getByText("Jhon stark");
    expect(titleElement).toBeInTheDocument();
    expect(renderValueMock).toHaveBeenCalled();
  });
});
