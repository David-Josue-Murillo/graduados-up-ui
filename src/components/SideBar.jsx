import React, { useState } from 'react';

const SideBar = () => {
    // Estado para el elemento activo
    const [activeItem, setActiveItem] = useState('');

    // Elementos de navegación
    const navItems = [
        'Información',
        'Empezar',
        'Endpoints',
        'Ejemplos de uso',
        'Graduados',
        'Facultades',
        'Campus',
    ];

    // Función para manejar el clic en un elemento
    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <section data-aos="fade-right sm:w-4/12">
            <aside className="dark:bg-gray-950 h-screen">
                <nav className="mt-4 font-farro-light text-sm pr-4 sm:pr-10">
                    <ul className="flex flex-col">
                        {navItems.map((item) => (
                            <li
                                key={item}
                                onClick={() => handleItemClick(item)}
                                className={`pl-8 py-3 transition-all cursor-pointer rounded-r-full 
                                    ${activeItem === item
                                        ? 'pl-12 bg-green-300 text-green-900 font-farro-bold dark:bg-gray-700'
                                        : 'hover:pl-10 hover:bg-gray-200 dark:hover:bg-gray-900'
                                    }`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </section>
    );
};

export default SideBar;
