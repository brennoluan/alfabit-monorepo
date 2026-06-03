import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@brennoluan/alfabit-input";

const meta = {
  title: "Moléculas/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { disabled: false, placeholder: "Placeholder", label: "Label" },
  argTypes: {
    placeholder: { description: "Texto do placeholder" },
    disabled: { description: "Estado de desabilitado", control: "boolean" },
    label: { description: "Texto da label" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    disabled: false,
  },
};
