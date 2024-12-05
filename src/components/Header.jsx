import React, { useState } from 'react'
import Logo from './Logo';
import Nav from './Nav';
import IconsNav from './IconsNav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CiMenuFries } from 'react-icons/ci';
import { FiX } from 'react-icons/fi';

const Header = ({handleChangeTheme, theme}) => {
    AOS.init();

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <header className="flex justify-between items-center flex-wrap py-4 px-6 lg:px-12 border-b dark:border-green-300 dark:text-white">
                <Logo 
                    theme={theme}
                />

                <button className='block md:hidden transition' onClick={handleClick}>
                    {click ? <FiX /> : <CiMenuFries />}
                </button>

                <Nav 
                    click={click}
                />
                
                <IconsNav
                    handleChangeTheme={handleChangeTheme}
                    theme={theme}
                />
            </header>
        </>
    )
}

export default Header
