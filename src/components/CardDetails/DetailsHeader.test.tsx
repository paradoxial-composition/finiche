import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import DetailsHeader from "./DetailsHeader";

describe("DetailsHeader component", () => {
  it("renders the correct value", () => {
    const renderValueMock = jest.fn().mockReturnValueOnce("Movie Title");
    const { getByText } = render(<DetailsHeader renderValue={renderValueMock} />);
    const titleElement = getByText("Movie Title");
    expect(titleElement).toBeInTheDocument();
    expect(renderValueMock).toHaveBeenCalled();
  });
});
