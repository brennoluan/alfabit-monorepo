import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@brennoluan/alfabit-button";
import { fn } from "storybook/test";

const meta = {
  title: "Moléculas/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
    children: "Primary Button",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    onClick: {
      action: "click",
      description: "Evento de disparo ao clicar no botão",
    },
    children: { description: "Texto do botão" },
    variant: {
      description: "Variante do botão",
      options: ["primary", "secondary", "tertiary"],
      control: "select",
    },
    size: {
      description: "Tamanho do botão",
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    disabled: {
      description: "Estado de desabilitado",
      control: "radio",
      options: [true, false],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Primary Button",
    disabled: false,
  },
};
