import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MoviesResult from "./MoviesResult";
import movies from '../../mocks/movies';

describe("MoviesResult component", () => {
  it("renders the component with movie cards", () => {
    const { getAllByTestId } = render(<MoviesResult />);
    const movieCardElements = getAllByTestId("movie-card");

    expect(movieCardElements.length).toBe(movies.length);
  });

  it("opens the movie details when a movie card is clicked", () => {
    const { getAllByTestId, getByTestId } = render(<MoviesResult />);
    const movieCardElements = getAllByTestId("movie-card");

    fireEvent.click(movieCardElements[0]);

    const cardDetailsElement = getByTestId("details-container");

    expect(cardDetailsElement).toBeInTheDocument();
  });
});
