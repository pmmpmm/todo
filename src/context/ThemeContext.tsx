import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProviderProps {
  children: React.ReactNode;
}
interface ThemeContextType {
  theme: boolean;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: true,
  toggleTheme() {}
});

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<boolean>(
    "theme" in localStorage ? localStorage.theme : "light"
  );
  const toggleTheme = () => {
    setTheme(!theme);
    updateTheme(!theme);
  };

  useEffect(() => {
    const isThemeState =
      !(localStorage.theme === "dark") ||
      (!("theme" in localStorage)! &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setTheme(isThemeState);
    updateTheme(isThemeState);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function updateTheme(thema: boolean): void {
  if (!thema) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}
export const useThemeContext = () => useContext(ThemeContext);
