import { useTheme } from '../contexts/ThemeContext';
import { useNavigation } from '../contexts/NavigationContext';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {

    const { click, handleClick } = useNavigation();
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme} dark:bg-gray-950 flex flex-col min-h-screen`}>
            <Header
                click={click}
                handleClick={handleClick}
                toggleTheme={toggleTheme}
                theme={theme}
            />

            <main className='flex-grow'>
                {children}
            </main>

            <Footer />
        </div>
    );
}

export default Layout
