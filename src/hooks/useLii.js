import { useState, useEffect, useMemo } from 'react';
import { fetchAllGraduates } from "../api/numGraduates";

export const useGraduatesData = () => {
    const [dataGraduate, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            try {
                const apiData = await fetchAllGraduates();
                setData(Array.isArray(apiData) ? apiData : apiData.data || []);
            } catch (err) {
                setError(err.message);
                console.error('Error al cargar datos:', err);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    const yearlyTotals = useMemo(() => {
        if (!Array.isArray(dataGraduate)) {
            console.error('dataGraduate no es un array:', dataGraduate);
            return {};
        }

        return dataGraduate.reduce((acc, item) => {
            if (item?.year != null && item?.quantity != null && item?.career.name == 'Lic. en Ingeniera en Informática') {
                const yearKey = item.year.toString();
                acc[yearKey] = (acc[yearKey] || 0) + item.quantity;
            }
            return acc;
        }, {});
    }, [dataGraduate]);

    const sortedYearlyData = useMemo(() => {
        const entries = Object.entries(yearlyTotals).sort();
        return {
            years: entries.map(([year]) => year),
            totals: entries.map(([, total]) => total)
        };
    }, [yearlyTotals]);

    return {
        isLoading,
        error,
        yearlyTotals,
        sortedYearlyData
    };
};