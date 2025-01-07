import { useState, useCallback, useEffect } from 'react';
import { fetchAllGraduates } from "../api/numGraduates";
import { processData } from '../utils/dataProcessors';
import { INITIAL_DATA_STATE } from '../constants/filterConstants';

export const useFilterData = (filterConditions) => {
    const [activeFilter, setActiveFilter] = useState(null);
    const [data, setData] = useState(INITIAL_DATA_STATE);

    const handleFilterClick = useCallback((value) => {
        setActiveFilter(value);
    }, []);

    const clearFilter = useCallback(() => {
        setActiveFilter(null);
        setData(INITIAL_DATA_STATE);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (!activeFilter) return;

            setData(prev => ({ ...prev, isLoading: true, error: null }));

            try {
                const apiData = await fetchAllGraduates();
                const processedData = processData(apiData, activeFilter, filterConditions);
                
                setData({
                    isLoading: false,
                    error: null,
                    ...processedData
                });
            } catch (error) {
                setData({ 
                    ...INITIAL_DATA_STATE,
                    error: error.message
                });
            }
        };

        fetchData();
    }, [activeFilter, filterConditions]);

    return {
        activeFilter,
        data,
        handleFilterClick,
        clearFilter
    };
};