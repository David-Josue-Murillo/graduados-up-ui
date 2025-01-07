import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { fetchAllGraduates } from "../api/numGraduates";

const FilterContext = createContext();

export function FilterProvider({ children }) {
    // Estado para el filtro activo
    const [activeFilter, setActiveFilter] = useState(null);

    // Estado para los datos
    const [data, setData] = useState({
        isLoading: false,
        error: null,
        yearlyTotals: {},
        sortedYearlyData: { years: [], totals: [] }
    });

    // Función para procesar los datos
    const processData = useCallback((apiData) => {
        const rawData = Array.isArray(apiData) ? apiData : apiData.data || [];
        
        const yearlyTotals = rawData.reduce((acc, item) => {
            if (item?.year != null && item?.quantity != null) {
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

    const processDataLii = useCallback((apiData) => {
        const rawData = Array.isArray(apiData) ? apiData : apiData.data || [];
        
        const yearlyTotals = rawData.reduce((acc, item) => {
            if (item?.year != null && item?.quantity != null && item?.career.name == 'Lic. en Ingeniera en Informática') {
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

    // Función para manejar la selección de filtros
    const handleFilterClick = useCallback(async (value) => {
        setActiveFilter(value);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if(!activeFilter) return;

            setData(prev => ({...prev, isLoading: true, error: null}));

            try {
                let apiData = await fetchAllGraduates();

                switch (activeFilter) {
                    case '2019-2022':
                        const processedData = processData(apiData);
                        setData({
                            isLoading: false,
                            error: null,
                            ...processedData
                        });
                        break;
    
                    case 'Ingeniería en Informática':
                        const processedDataLii = processDataLii(apiData);
                        setData({
                            isLoading: false,
                            error: null,
                            ...processedDataLii
                        });
                        break
                
                    default:
                        console.log("No filter selected");
                        break;
                }
            } catch (error) {
                setData({ isLoading: false, error: error.message });
            }
        };

        fetchData();
    }, [activeFilter, processData]);

    return (
        <FilterContext.Provider 
            value={{
                activeFilter,
                data,
                handleFilterClick,
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