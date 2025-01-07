import { createContext, useContext } from "react";
import { useFilterData } from "../hooks/useFilterData";
import { FILTER_CONDITIONS } from "../constants/filterConstants";

const FilterContext = createContext();

export function FilterProvider({ children }) {
    const filterData = useFilterData(FILTER_CONDITIONS);

    return (
        <FilterContext.Provider value={filterData}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
};