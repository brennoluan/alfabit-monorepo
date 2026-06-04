import {
  defaultTheme,
  gray,
  violet,
  type Theme,
} from "@brennoluan/alfabit-tokens";

export const customTheme: Theme = {
  colors: {
    ...defaultTheme.colors,
    background: violet.quaternary,
    text: gray.black,
    primary: violet.primary,
    secondary: violet.secondary,
  },
};
