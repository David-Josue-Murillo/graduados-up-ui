import { useFilter } from "../../../../contexts/FilterContext";

const FilterButton = ({ key, label, value }) => {
    const { activeFilter, handleFilterClick} = useFilter(); 

    const isActive = activeFilter === value;

    return (
        <li 
            key={key}
            onClick={() => handleFilterClick(value)}
            >
            <button className={`
                    w-full py-2 px-4 text-left border rounded-md transition
                    ${isActive 
                        ? 'bg-green-100 border-green-600 dark:bg-yellow-700 dark:border-yellow-600' 
                        : 'border-green-400 hover:bg-green-100 dark:hover:bg-yellow-700'}
                `}>
                {label}
            </button>
        </li>
    );
}

export default FilterButton
