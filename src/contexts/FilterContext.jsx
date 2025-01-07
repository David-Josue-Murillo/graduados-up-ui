import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { fetchAllGraduates } from "../api/numGraduates";

const FilterContext = createContext();

// Definir los filtros disponibles y sus condiciones
const FILTER_CONDITIONS = {
    '2019-2022': () => true, // Sin filtrado adicional, toma todos los datos
    'Ingeniería en Informática': (item) => item?.career?.name === 'Lic. en Ingeniera en Informática',
    // Puedes agregar más filtros aquí
};

export function FilterProvider({ children }) {
    const [activeFilter, setActiveFilter] = useState(null);
    const [data, setData] = useState({
        isLoading: false,
        error: null,
        yearlyTotals: {},
        sortedYearlyData: { years: [], totals: [] }
    });

    // Función unificada para procesar datos con filtros dinámicos
    const processData = useCallback((apiData, filterType) => {
        const rawData = Array.isArray(apiData) ? apiData : apiData.data || [];
        const filterCondition = FILTER_CONDITIONS[filterType] || (() => true);
        
        const yearlyTotals = rawData.reduce((acc, item) => {
            if (
                item?.year != null && 
                item?.quantity != null && 
                filterCondition(item)
            ) {
                const yearKey = item.year.toString();
                acc[yearKey] = (acc[yearKey] || 0) + item.quantity;
            }
            return acc;
        }, {});

        const entries = Object.entries(yearlyTotals).sort();
        return {
            yearlyTotals,
            sortedYearlyData: {
                years: entries.map(([year]) => year),
                totals: entries.map(([, total]) => total)
            }
        };
    }, []);

    const handleFilterClick = useCallback(async (value) => {
        setActiveFilter(value);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (!activeFilter) return;

            setData(prev => ({ ...prev, isLoading: true, error: null }));

            try {
                const apiData = await fetchAllGraduates();
                const processedData = processData(apiData, activeFilter);
                
                setData({
                    isLoading: false,
                    error: null,
                    ...processedData
                });
            } catch (error) {
                setData({ 
                    isLoading: false, 
                    error: error.message,
                    yearlyTotals: {},
                    sortedYearlyData: { years: [], totals: [] }
                });
            }
        };

        fetchData();
    }, [activeFilter, processData]);

    // Función para limpiar filtros
    const clearFilter = useCallback(() => {
        setActiveFilter(null);
        setData({
            isLoading: false,
            error: null,
            yearlyTotals: {},
            sortedYearlyData: { years: [], totals: [] }
        });
    }, []);

    return (
        <FilterContext.Provider 
            value={{
                activeFilter,
                data,
                handleFilterClick,
                clearFilter
            }}
        >
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