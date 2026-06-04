import { defaultTheme, type Theme } from "@brennoluan/alfabit-tokens";
import { createContext, useState } from "react";

export const ThemeContext = createContext<{
  theme: Theme | undefined;
  changeTheme: (theme: Theme) => void;
}>({
  theme: undefined,
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [appTheme, setAppTheme] = useState<Theme | undefined>(defaultTheme);

  return (
    <ThemeContext.Provider
      value={{ theme: appTheme, changeTheme: setAppTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
