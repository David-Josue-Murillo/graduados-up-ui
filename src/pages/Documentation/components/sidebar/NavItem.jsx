import SubItems from "./SubItems"

const NavItem = ({ item, refs, onNavigate }) => {
    return (
        <li>
            <div
                onClick={() => onNavigate(refs[item.refKey])}
                className='pl-6 py-3 2xl:py-6 transition-all cursor-pointer rounded-r-full text-gray-950 hover:text-green-600 dark:hover:text-green-600 dark:text-gray-100 hover:pl-10 dark:hover:bg-gray-900'
            >
                {item.name}
            </div>
            <SubItems items={item.items} refs={refs} onNavigate={onNavigate} />
        </li>
    )
}

export default NavItem
