import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("expect header to be defined", async () => {
    expect(await screen.findByText("Exchange")).toBeInTheDocument();
  });

  test("expect to have a select component", async () => {
    expect(
      (await screen.findAllByText("Currency from")).length
    ).toBeGreaterThan(1);
  });
});
