import { FILTER_OPTIONS, GRADUATES_CONTENT } from "../../constants/graduates"
import FilterButton from "../button/FilterButton"

const FilterPanel = () => {
    return (
        <div className="bg-white dark:bg-transparent shadow-md rounded-lg p-4 border border-yellow-200 dark:border-yellow-600">
            <h2 className="text-lg font-bold mb-4 text-yellow-600">
                {GRADUATES_CONTENT.filterTitle}
            </h2>

            <ul className="space-y-2 dark:dark:text-slate-300">
                {FILTER_OPTIONS.map((option) => (
                    <FilterButton
                        key={option.id}
                        label={option.label}
                        value={option.value}
                    />
                ))}
            </ul>
        </div>
    )
}

export default FilterPanel
