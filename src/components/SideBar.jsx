import { useState } from 'react';

const SideBar = ({onNavigate, refs}) => {
    // Estado para el elemento activo
    const [activeItem, setActiveItem] = useState('');

    // Elementos de navegación con sublistas
    const navItems = [
        {
            name: 'Introduccion',
            items: {
                subName: ['¿Qué es?'],
                refItem: [refs.whatIsRef]
            },
            ref: refs.introRef,
        },
        {
            name: 'Empezar',
            items: {
                subName: ['URL Base', 'Rutas disponibles', 'Paginación'],
                refItem: [refs.urlBaseRef, refs.availableRoutesRef, refs.paginationRef]
            },
            ref: refs.startRef,
        },
        {
            name: 'Endpoints',
            items: {
                subName: ['/graduates', '/careers', '/faculty', '/campus'],
                refItem: [refs.graduatesRef, refs.careersRef, refs.facultiesRef, refs.campusRef]
            },
            ref: refs.endpointRef,
        },
    ];

    // Función para manejar el clic en un elemento principal
    const handleItemClick = (item) => {
        setActiveItem(activeItem === item ? '' : item); // Alterna entre expandir y colapsar
    };


    return (
        <aside className='w-64 p-4 rounded-lg fixed' data-aos="fade-right">
            <ul className="space-y-4">
                {navItems.map((navItem) => (
                    <li key={navItem.name}>
                        {/* Elemento principal */}
                        <div
                            onClick={() => {
                                handleItemClick(navItem.name); 
                                onNavigate(navItem.ref)
                            }}
                            className={`pl-6 py-3 transition-all cursor-pointer rounded-r-full 
                            ${activeItem === navItem.name
                                    ? 'pl-12 bg-green-300 text-green-900 font-bold dark:bg-gray-700'
                                    : 'text-gray-950 hover:text-green-600 dark:hover:text-green-600 dark:text-gray-100 hover:pl-10 hover:bg-gray-200 dark:hover:bg-gray-900'
                                }`}
                            aria-expanded={activeItem === navItem.name}
                        >
                            {navItem.name}
                        </div>

                        {/* Sublista */}

                        <ul className="ml-8 mt-2 space-y-2">
                            {navItem.items.subName.map((item, idx) => (
                                <li
                                    onClick={() => onNavigate(navItem.items.refItem[idx])}
                                    key={item}
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-600 cursor-pointer hover:pl-4 transition-all"
                                >
                                    {item}
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
