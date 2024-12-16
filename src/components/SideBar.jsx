import React, { useState } from 'react';

const SideBar = () => {
    // Estado para el elemento activo
    const [activeItem, setActiveItem] = useState('');

    // Elementos de navegación con sublistas
    const navItems = [
        {
            name: 'Introduccion',
            subItems: ['¿Qué es?'],
        },
        {
            name: 'Empezar',
            subItems: ['URL Base', 'Rutas disponibles', 'Paginación'],
        },
        {
            name: 'Endpoints',
            subItems: ['/graduates', '/careers', '/faculty', '/campus'],
        },
    ];

    // Función para manejar el clic en un elemento principal
    const handleItemClick = (item) => {
        setActiveItem(activeItem === item ? '' : item); // Alterna entre expandir y colapsar
    };

    return (
        <aside className="w-64 p-4 rounded-lg fixed">
            <ul className="space-y-4">
                {navItems.map((navItem) => (
                    <li key={navItem.name}>
                        {/* Elemento principal */}
                        <div
                            onClick={() => handleItemClick(navItem.name)}
                            className={`pl-6 py-3 transition-all cursor-pointer rounded-r-full 
                            ${activeItem === navItem.name
                                    ? 'pl-12 bg-green-300 text-green-900 font-bold dark:bg-gray-700'
                                    : 'text-gray-950 hover:text-green-600 dark:hover:text-green-600 dark:text-gray-100 hover:pl-10 hover:bg-gray-200 dark:hover:bg-gray-900'
                                }`}
                        >
                            {navItem.name}
                        </div>

                        {/* Sublista */}

                        <ul className="ml-8 mt-2 space-y-2">
                            {navItem.subItems.map((subItem) => (
                                <li
                                    key={subItem}
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-600 cursor-pointer hover:pl-4 transition-all"
                                >
                                    {subItem}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;
