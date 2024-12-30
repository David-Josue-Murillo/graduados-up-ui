import React from 'react'
import { useTheme } from '../contexts/ThemeContext';
import { useNavigation } from '../contexts/NavigationContext';
import Header from './Header';

const Layout = ({ children }) => {

    const { click, setClick } = useNavigation();
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            {/* Aquí puedes agregar componentes comunes como Navbar, Footer, etc. */}
            <Header
                click={click}
                setClick={setClick}
                toggleTheme={toggleTheme}
                theme={theme}
            />

            {children}
        </div>
    );
}

export default Layout
