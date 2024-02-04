import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { ThemeProvider as StyleProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

interface ThemeContextProps {
  theme: any;
  toggleTheme: () => void;
}

interface PropsType {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: FC<PropsType> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const theme = useMemo(
    () => (currentTheme === "light" ? lightTheme : darkTheme),
    [currentTheme]
  );

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyleProvider theme={theme}>{children}</StyleProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must use in ThemeProvider");
  }
  return context;
};
