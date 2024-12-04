import type { Meta, StoryObj } from "@storybook/react";
import { fn, expect, userEvent, within } from "@storybook/test";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "fullscreen", // https://storybook.js.org/docs/configure/story-layout
  },
  tags: ["autodocs"], // https://storybook.js.org/docs/writing-docs/autodocs
  argTypes: {
    backgroundColor: { control: "color" }, // https://storybook.js.org/docs/api/argtypes
  },
  args: {
    onClick: fn(), // https://storybook.js.org/docs/essentials/actions#action-args
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Play: Story = {
  args: {
    primary: false,
    label: "Button",
  },
  // https://storybook.js.org/docs/writing-tests/interaction-testing
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Button/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
  },
};
