import { createContext, useState, useCallback, useEffect } from 'react';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
  const getTheme = () => {
    const themeConfig = localStorage.getItem("themeConfig")
    if (themeConfig == "light" || themeConfig == "dark") {
      return themeConfig
    } else {
      return isBrowserDefaultDark()
    }
  }
  const [theme, setTheme] = useState(getTheme())
  const handleTheme = useCallback((theme) => {
    setTheme(theme)
    localStorage.setItem("themeConfig", theme)
  }, [])
  const getThemeConfig = () => {
    const config = localStorage.getItem("themeConfig");
    let alias;
    switch (config) {
      case 'light':
        alias = "Terang"
        break;
      case 'dark':
        alias = "Gelap"
        break;
      default:
        alias = "Default sistem"
    }
    return [config, alias]
  }

  useEffect(() => {
    setTheme(getTheme())
  }, [theme])
  return (<ThemeContext.Provider value={{ theme, handleTheme, getThemeConfig }}>
    {children}
  </ThemeContext.Provider>)
}