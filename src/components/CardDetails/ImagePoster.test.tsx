import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ImagePoster from "./ImagePoster";

describe("ImagePoster component", () => {
  it("renders the ImagePoster component with the correct image source", () => {
    const { getByAltText } = render(<ImagePoster />);
    const imageElement = getByAltText("movie poster");

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "placeholder.jpg"
    );
  });

  it("has the correct CSS classes applied to the container div", () => {
    const { container } = render(<ImagePoster />);
    const divElement = container.firstChild;

    expect(divElement).toHaveClass("lg:w-2/5");
    expect(divElement).toHaveClass("lg:h-full");
    expect(divElement).toHaveClass("hidden");
    expect(divElement).toHaveClass("lg:inline-flex");
    expect(divElement).toHaveClass("flex-col");
    expect(divElement).toHaveClass("justify-center");
    expect(divElement).toHaveClass("rounded-l-lg");
  });

  it("has the correct CSS classes applied to the image", () => {
    const { getByAltText } = render(<ImagePoster />);
    const imageElement = getByAltText("movie poster");

    expect(imageElement).toHaveClass("w-full");
    expect(imageElement).toHaveClass("h-full");
  });
});