import React from 'react'

const SubItems = ({ items, refs, onNavigate }) => {
    return (
        <ul className="ml-8 mt-2 space-y-2">
            {items.map((subItem) => (
                <li
                    key={subItem.name}
                    onClick={() => onNavigate(refs[subItem.refKey])}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-600 cursor-pointer hover:pl-4 transition-all"
                >
                    {subItem.name}
                </li>
            ))}
        </ul>
    );
}

export default SubItems
