import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { H1, H2, H3 } from "./typography";

const meta: Meta<typeof H1> = {
  title: "Components/UI/Typography",
  component: H1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The text content to display",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllHeadings: Story = {
  render: () => (
    <div className="space-y-4 text-center">
      <H1>Main Page Title</H1>
      <H2>Section Heading</H2>
      <H3>Subsection Title</H3>
      <p className="text-gray-600">Regular paragraph text for context</p>
    </div>
  ),
};

export const TypographyScale: Story = {
  args: {
    children: "Scale Example",
    className: "",
  },
  render: () => (
    <div className="space-y-6 text-left">
      <div>
        <H1 className="mb-2">Heading 1 - 3xl (30px)</H1>
        <p className="text-sm text-gray-500">
          Font size: text-3xl, Weight: font-semibold
        </p>
      </div>
      <div>
        <H2 className="mb-2">Heading 2 - 2xl (24px)</H2>
        <p className="text-sm text-gray-500">
          Font size: text-2xl, Weight: font-semibold
        </p>
      </div>
      <div>
        <H3 className="mb-2">Heading 3 - xl (20px)</H3>
        <p className="text-sm text-gray-500">
          Font size: text-xl, Weight: font-medium
        </p>
      </div>
    </div>
  ),
};

export const H1Default: Story = {
  args: {
    children: "Heading 1 - Main Title",
    className: "",
  },
};

export const H1WithCustomClass: Story = {
  args: {
    children: "Heading 1 - Custom Styling",
    className: "text-blue-600 underline",
  },
};

export const H2Default: Story = {
  args: {
    children: "Heading 2 - Section Title",
    className: "",
  },
  render: (args) => <H2 {...args} />,
};

export const H2WithCustomClass: Story = {
  args: {
    children: "Heading 2 - Custom Styling",
    className: "text-green-600 italic",
  },
  render: (args) => <H2 {...args} />,
};

export const H3Default: Story = {
  args: {
    children: "Heading 3 - Subsection Title",
    className: "",
  },
  render: (args) => <H3 {...args} />,
};

export const H3WithCustomClass: Story = {
  args: {
    children: "Heading 3 - Custom Styling",
    className: "text-purple-600 font-bold",
  },
  render: (args) => <H3 {...args} />,
};
