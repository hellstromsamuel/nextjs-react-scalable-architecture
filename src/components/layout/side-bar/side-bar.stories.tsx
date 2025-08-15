import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SideBar from "./side-bar";

const meta: Meta<typeof SideBar> = {
  title: "Components/Layout/SideBar",
  component: SideBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
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
    className: "",
  },
};

export const WithCustomStyling: Story = {
  args: {
    className:
      "bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700",
  },
};
