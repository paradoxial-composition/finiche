import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardDetails from "./CardDetails";

describe("CardDetails component", () => {
    const mockMovie = {
		"Title": "Toy Story",
		"US Gross": 191796233,
		"Worldwide Gross": 361948825,
		"US DVD Sales": null,
		"Production Budget": 30000000,
		"Release Date": "Nov 22 1995",
		"MPAA Rating": "G",
		"Running Time min": null,
		"Distributor": "Walt Disney Pictures",
		"Source": "Original Screenplay",
		"Major Genre": "Adventure",
		"Creative Type": "Kids Fiction",
		"Director": "John Lasseter",
		"Rotten Tomatoes Rating": 100,
		"IMDB Rating": 8.2,
		"IMDB Votes": 151143,
		"id": 992
	};

  it("renders the component with the correct movie details", () => {
    const { getByText } = render(
      <CardDetails movie={mockMovie} setShowDetails={() => {}} />
    );

    expect(getByText("Toy Story")).toBeInTheDocument();
    expect(getByText("100")).toBeInTheDocument();
    expect(getByText("8.2")).toBeInTheDocument();
    expect(getByText("151143")).toBeInTheDocument();

    expect(getByText("Walt Disney Pictures")).toBeInTheDocument();
    expect(getByText("Adventure")).toBeInTheDocument();
    expect(getByText("John Lasseter")).toBeInTheDocument();
  });

  it("closes the details when clicking outside the content", async () => {
    const setShowDetailsMock = jest.fn();
    const { getByTestId } = render(
      <CardDetails movie={mockMovie} setShowDetails={setShowDetailsMock} />
    );
    const detailsContainer = getByTestId("details-container");
    fireEvent.click(detailsContainer);

    await waitFor(() => {
        expect(setShowDetailsMock).toHaveBeenCalledWith(false);
    });
  });
});
