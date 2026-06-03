// @ts-ignore
import type { Meta, StoryObj } from "@storybook/react";
import { TextBlock } from "@brennoluan/alfabit-component";

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
