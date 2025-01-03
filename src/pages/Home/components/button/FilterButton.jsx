const FilterButton = ({ key, label, value }) => {
    return (
        <li key={key}>
            <button className="w-full py-2 px-4 text-left border border-green-400 rounded-md hover:bg-green-100 dark:hover:bg-yellow-700 transition">
                {label}
            </button>
        </li>
    );
}

export default FilterButton
