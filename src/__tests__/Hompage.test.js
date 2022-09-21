import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from '../components/Homepage';

describe("homepage", () => {
  it("renders correct heading", () => {
    render(<Homepage></Homepage>);
    expect(screen.getByRole('heading').textContent).toMatch(/homepage/i);
  })

  it('renders text below the heading', () => {
    render(<Homepage></Homepage>);
    expect(screen.getByRole('article')).toHaveTextContent('Lorem');
  })
});