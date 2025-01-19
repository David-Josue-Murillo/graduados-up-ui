import { Line } from "react-chartjs-2";
import { defaultChartOptions, createChartData } from "../config/ChartConfig";
import YearlySummary from "./YearlySummary";
import { useFilter } from "../contexts/FilterContext";
import { useCallback } from "react";

const ChartComponent = () => {
    const { 
        data, 
        refreshData, 
        isCacheAvailable, 
        getCacheTimestamp 
    } = useFilter();
    const { isLoading, error, yearlyTotals, sortedYearlyData } = data;
    
    const formatLastUpdate = useCallback(() => {
        if (!isCacheAvailable()) return null;
        const timestamp = getCacheTimestamp();
        if (!timestamp) return null;
        
        return new Date(timestamp).toLocaleString();
    }, [isCacheAvailable, getCacheTimestamp]);

    const handleRefresh = useCallback(() => {
        refreshData();
    }, [refreshData])

    if (isLoading) return <div className="dark:text-gray-100 text-center py-4">Cargando...</div>;
    if (error) {
        return (
            <div className="flex flex-col items-center py-4">
                <div className="text-red-500">Error: {error}</div>
                <button 
                    onClick={handleRefresh}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Reintentar
                </button>
            </div>
        );
    }

    const chartData = createChartData(sortedYearlyData.years, sortedYearlyData.totals);
    const lastUpdate = formatLastUpdate();

    return (
        <div className="w-full space-y-4">
        <div className="flex justify-between items-center px-4">
            {lastUpdate && (
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    Última actualización: {lastUpdate}
                </div>
            )}
            <button 
                onClick={handleRefresh}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Actualizar datos
            </button>
        </div>
        <div className="h-96">
            <Line data={chartData} options={defaultChartOptions} />
        </div>
        <YearlySummary yearlyTotals={yearlyTotals} />
    </div>
    );
};

export default ChartComponent;