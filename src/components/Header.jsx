import Logo from './headerComponents/Logo';
import IconsNav from './headerComponents/IconsNav';
import Navbar from './headerComponents/Navbar';
import { CiMenuFries } from 'react-icons/ci';
import { FiX } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ({click, handleClick, handleChangeTheme, theme}) => {
    AOS.init();

    return (
        <>
            <header className="flex justify-between items-center flex-wrap py-4 px-6 lg:px-12 border-b dark:border-0 dark:text-white">
                <Logo 
                    theme={theme}
                />

                <button className='block md:hidden transition' onClick={handleClick}>
                    {click ? <FiX /> : <CiMenuFries />}
                </button>

                <Navbar 
                    click={click}
                />
                
                <IconsNav
                    click={click}
                    handleChangeTheme={handleChangeTheme}
                    theme={theme}
                />
            </header>
        </>
    )
}

export default Header
