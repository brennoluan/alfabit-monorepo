import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextBlock } from "@brennoluan/alfabit-textblock";

const meta = {
  title: "Moléculas/TextBlock",
  component: TextBlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof TextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
