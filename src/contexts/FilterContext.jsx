import { createContext, useCallback, useContext } from "react";
import { useFilterData } from "../hooks/useFilterData";
import { FILTER_CONDITIONS } from "../constants/filterConstants";
import { graduatesCache } from "../cache/DataCache";

const FilterContext = createContext();

export function FilterProvider({ children }) {
    const filterData = useFilterData(FILTER_CONDITIONS);

    const clearCache = useCallback(() => {
        graduatesCache.clearCache();
    }, []);

    const contextValue = {
        ...filterData,
        clearCache,
        isCacheAvailable: () => graduatesCache.getData() !== null,
        getCacheTimestamp: () => graduatesCache.lastFetchTimestamp
    };

    return (
        <FilterContext.Provider value={contextValue}>
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