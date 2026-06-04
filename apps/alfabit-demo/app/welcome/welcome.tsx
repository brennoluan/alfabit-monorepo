import { Button } from "@brennoluan/alfabit-button";
import { darkTheme, lightTheme, type Theme } from "@brennoluan/alfabit-tokens";
import { useContext } from "react";
import { customTheme } from "~/config/themes";
import { ThemeContext } from "~/context/themeContext";

export function Welcome() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const buttonText = `Trocar para o tema ${theme === lightTheme || !theme ? "dark" : "light"}`;

  return (
    <main
      className="flex  h-screen items-center justify-center pt-16 pb-4"
      style={{ backgroundColor: theme?.colors.background }}
    >
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1
              className="leading text-2xl font-bold"
              style={{ color: theme?.colors.text }}
            >
              Bem vindo ao Design System Alfabit
            </h1>
          </div>
        </header>
        <Button theme={theme}>Hello World, Alfabit npm!</Button>
        <Button
          variant="secondary"
          onClick={() =>
            changeTheme(theme === lightTheme || !theme ? darkTheme : lightTheme)
          }
        >
          {buttonText}
        </Button>
        <Button variant="secondary" onClick={() => changeTheme(customTheme)}>
          Trocar para o tema customizado
        </Button>
      </div>
    </main>
  );
}
