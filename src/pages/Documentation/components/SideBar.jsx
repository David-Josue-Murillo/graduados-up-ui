
const SideBar = ({onNavigate, refs}) => {
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

    return (
        <aside className='w-0 md:w-64 p-0 md:p-4 rounded-lg hidden md:flex fixed' data-aos='fade-right'>
            <ul className="space-y-4">
                {navItems.map((navItem) => (
                    <li key={navItem.name}>
                        {/* Elemento principal */}
                        <div
                            onClick={() => {
                                onNavigate(navItem.ref)
                            }}
                            className='pl-6 py-3 transition-all cursor-pointer rounded-r-full text-gray-950 hover:text-green-600 dark:hover:text-green-600 dark:text-gray-100 hover:pl-10 dark:hover:bg-gray-900'
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
