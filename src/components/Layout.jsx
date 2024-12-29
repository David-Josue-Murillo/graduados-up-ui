import React from 'react'
import { useNavigation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Layout = ({ children }) => {

    const { click, handleClick } = useNavigation();
    const { theme, handleChangeTheme } = useTheme();
  
    return (
      <div className={`app ${theme}`}>
        {/* Aquí puedes agregar componentes comunes como Navbar, Footer, etc. */}
        
        {children}
      </div>
    );
}

export default Layout
