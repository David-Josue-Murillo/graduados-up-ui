import React from 'react'
import '../assets/img/logo_light.png'

const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center py-4 px-8 bg-gray-50 border-b">
                <div className="text-2xl font-bold text-green-600">Graduados UP</div>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#home" className="hover:text-green-600">Home</a></li>
                        <li><a href="#docs" className="hover:text-green-600">Documentación</a></li>
                        <li><a href="#examples" className="hover:text-green-600">Ejemplos</a></li>
                        <li><a href="#up" className="hover:text-green-600">Up</a></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <span role="img" aria-label="moon" className="text-lg">🌙</span>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600"
                    >
                        GitHub
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header
