import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [switchChecked, setSwitchChecked] = useState(false);

    const handleSwitch = (checked) => {
        console.log('type of ====>', typeof checked)
        setSwitchChecked(checked)
        setTheme(switchChecked ? 'dark' : 'light')
    }

    return (
      <ThemeContext.Provider value={{ handleSwitch }}>
        {children}
      </ThemeContext.Provider>
    );
}

export default ThemeContext;