import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [switchChecked, setSwitchChecked] = useState(false);

    useEffect(() => {
      const isLightThemeObj = localStorage.getItem("isLightTheme");
      if (isLightThemeObj === null) {
        //initial state
        localStorage.setItem(
          "isLightTheme",
          JSON.stringify({ isLightTheme: true })
        );
        setTheme("light");
        setSwitchChecked(false);
        return;
      }
      const isLightTheme = JSON.parse(isLightThemeObj).isLightTheme;
      setTheme(isLightTheme ? "light" : "dark");
      setSwitchChecked(!isLightTheme);
    }, []);

    const handleSwitch = () => {
      const isLightThemeObj = localStorage.getItem("isLightTheme");
      const isLightTheme = JSON.parse(isLightThemeObj).isLightTheme;
      if (isLightTheme === null) {
        //initial state
        localStorage.setItem(
          "isLightTheme",
          JSON.stringify({ isLightTheme: true })
        );
        setTheme("light");
        setSwitchChecked(false);
        return;
      }
      localStorage.setItem(
        "isLightTheme",
        JSON.stringify({ isLightTheme: !isLightTheme })
      );
      setTheme(isLightTheme ? "dark" : "light");
      setSwitchChecked(!switchChecked);
    };

    return (
      <ThemeContext.Provider value={{ theme, switchChecked, handleSwitch }}>
        {children}
      </ThemeContext.Provider>
    );
}

export default ThemeContext;