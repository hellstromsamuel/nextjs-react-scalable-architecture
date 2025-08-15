import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LocaleSelect } from "./locale-select";

const meta: Meta<typeof LocaleSelect> = {
  title: "Components/Layout/LocaleSelect",
  component: LocaleSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["outline", "ghost"],
      description: "Button variant style",
    },
    showText: {
      control: { type: "boolean" },
      description: "Whether to show text labels",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "outline",
    showText: false,
    className: "",
  },
};

export const WithText: Story = {
  args: {
    variant: "outline",
    showText: true,
    className: "",
  },
};
