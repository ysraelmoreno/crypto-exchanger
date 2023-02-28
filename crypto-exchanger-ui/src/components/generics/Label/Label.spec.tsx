import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label", () => {
  const labelText = "This is My Label";

  beforeEach(() => {
    render(<Label>{labelText}</Label>);
  });

  test("should be in the document", async () => {
    expect(await screen.findByText(labelText)).toBeInTheDocument();
  });

  test("element type should be an label", async () => {
    const component = await screen.findByText(labelText);

    expect(component.tagName).toBe("LABEL");
  });

  test("element should display the text correctly", async () => {
    const component = await screen.findByText(labelText);

    expect(component.textContent).toBe(labelText);
  });

  test("element should be visible", async () => {
    const component = await screen.findByText(labelText);

    expect(component).toBeVisible();
  });
});
