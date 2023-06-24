import React, { useContext, useState } from 'react';
import './App.css';
import { NavProvider } from './contexts/NavContext';
import { ThemeProvider } from './contexts/ThemeContext';
import RoutedApp from './RoutedApp';

function App() {
  return (
    <NavProvider>
      <ThemeProvider>
        <RoutedApp />
      </ThemeProvider>
    </NavProvider>
  );
  
}

export default App;
