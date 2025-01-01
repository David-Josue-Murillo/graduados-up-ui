import React from 'react'
import { useTheme } from '../contexts/ThemeContext';
import { useNavigation } from '../contexts/NavigationContext';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {

    const { click, handleClick } = useNavigation();
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme} dark:bg-gray-950`}>
            {/* Aquí puedes agregar componentes comunes como Navbar, Footer, etc. */}
            <Header
                click={click}
                handleClick={handleClick}
                toggleTheme={toggleTheme}
                theme={theme}
            />

            {children}

            <Footer />
        </div>
    );
}

export default Layout
