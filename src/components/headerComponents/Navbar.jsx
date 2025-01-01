import { Link } from 'react-router-dom'

const Navbar = ({click}) => {
    return (
        <nav className={click ? 'flex w-full text-center mt-5' : 'hidden md:block lg:mr-32'}>
            <ul className="w-full px-5 mt-5 space-x-8  font-farro text-sm font-medium md:mt-3 md:flex lg:mt-5 lg:text-base cursor-pointer">
                <Link to='/'>
                    <li className='hover:text-green-600'>Inicio</li>
                </Link>

                <Link to='/documentation'>
                    <li className='hover:text-green-600'>Documentación</li>
                </Link>
                
                <Link to='/about'>
                    <li className='hover:text-green-600'>Acerca de</li>
                </Link>
                
            </ul>
        </nav>
    )
}

export default Navbar
