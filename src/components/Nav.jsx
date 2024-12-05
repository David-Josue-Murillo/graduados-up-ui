import React from 'react'
import { Link } from 'react-scroll'

const Nav = ({click}) => {
    return (
        <nav className={click ? 'flex w-full text-center mt-5' : 'hidden md:block lg:mr-32'}>
            <ul className="w-full px-5 mt-5 space-x-8  font-farro text-sm font-medium md:mt-3 md:flex md:text-xs lg:mt-5 lg:text-base">
                <Link spy={true} smooth={true} to='Home'>
                    <li className='hover:text-green-600'>Inicio</li>
                </Link>
                <Link spy={true} smooth={true} to='Documentation'>
                    <li className='hover:text-green-600'>Documentación</li>
                </Link>
                <Link spy={true} smooth={true} to='Examples'>
                    <li className='hover:text-green-600'>Ejemplos</li>
                </Link>
                <Link spy={true} smooth={true} to='Up'>
                    <li className='hover:text-green-600'>Up</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
