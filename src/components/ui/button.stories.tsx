import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    asChild: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
    size: "default",
    disabled: false,
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
    size: "default",
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
    size: "default",
    disabled: false,
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
    size: "default",
    disabled: false,
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
    size: "default",
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    variant: "default",
    size: "sm",
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "default",
    size: "lg",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "default",
    size: "default",
    disabled: true,
  },
};
