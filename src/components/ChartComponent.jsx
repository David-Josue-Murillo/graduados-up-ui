import { Line } from "react-chartjs-2";
import { useGraduatesData } from "../hooks/useGraduateData"; 
import { defaultChartOptions, createChartData } from "../config/ChartConfig";
import YearlySummary from "./YearlySummary";

const ChartComponent = () => {
    const { isLoading, error, yearlyTotals, sortedYearlyData } = useGraduatesData();

    if (isLoading) return <div className="dark:text-gray-100 text-center py-4">Cargando...</div>;
    if (error) return <div className="text-red-500 py-4">Error: {error}</div>;

    const chartData = createChartData(sortedYearlyData.years, sortedYearlyData.totals);

    return (
        <div className="w-full space-y-4">
            <div className="h-96">
                <Line data={chartData} options={defaultChartOptions} />
            </div>
            <YearlySummary yearlyTotals={yearlyTotals} />
        </div>
    );
};

export default ChartComponent;