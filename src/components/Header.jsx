import React, { useState } from 'react'
import Logo from './Logo';
import Nav from './Nav';
import IconsNav from './IconsNav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CiMenuFries } from 'react-icons/ci';
import { FiX } from 'react-icons/fi';

const Header = ({handleChangeTheme}) => {
    AOS.init();

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <header className="flex justify-between items-center flex-wrap py-4 px-6 lg:px-12 bg-gray-50 border-b">
                <Logo />

                <button className='block md:hidden transition' onClick={handleClick}>
                    {click ? <FiX /> : <CiMenuFries />}
                </button>

                <Nav 
                    click={click}
                />
                
                <IconsNav 
                    click={click}
                    handleChangeTheme={handleChangeTheme}
                />
            </header>
        </>
    )
}

export default Header
