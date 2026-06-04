import { Button } from "@brennoluan/alfabit-button";
import { darkTheme, lightTheme, type Theme } from "@brennoluan/alfabit-tokens";
import { useState } from "react";

export function Welcome() {
  const [appTheme, setAppTheme] = useState<Theme | undefined>(undefined);
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
              Bem vindo ao Design System Alfabit
            </h1>
          </div>
        </header>
        <Button theme={appTheme}>Hello World, Alfabit npm!</Button>
        <Button
          variant="secondary"
          onClick={() =>
            setAppTheme(
              appTheme === lightTheme || !appTheme ? darkTheme : lightTheme,
            )
          }
        >
          Trocar o tema
        </Button>
      </div>
    </main>
  );
}
