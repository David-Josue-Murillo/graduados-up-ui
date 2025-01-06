import { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchAllGraduates } from "../api/numGraduates";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
} from "chart.js";

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    CategoryScale
);

const ChartComponent = () => {
    const [dataGraduate, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            try {
                const apiData = await fetchAllGraduates();
                // Asegurarse de que apiData sea un array
                setData(Array.isArray(apiData) ? apiData : apiData.data || []);
                console.log('Datos recibidos:', apiData); // Para debugging
            } catch (err) {
                setError(err.message);
                console.error('Error al cargar datos:', err);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    // Calcular totales por año
    const yearlyTotals = useMemo(() => {
        // Verificar que dataGraduate sea un array
        if (!Array.isArray(dataGraduate)) {
            console.error('dataGraduate no es un array:', dataGraduate);
            return {};
        }

        const totals = dataGraduate.reduce((acc, item) => {
            if (item && item.year !== undefined && item.quantity !== undefined) {
                const yearKey = item.year.toString();
                acc[yearKey] = (acc[yearKey] || 0) + item.quantity;
            }
            return acc;
        }, {});

        console.log('Totales por año:', totals);
        return totals;
    }, [dataGraduate]);

    // Crear datos para el gráfico
    const chartData = {
        labels: Object.keys(yearlyTotals).sort(),
        datasets: [
            {
                label: "Total de Graduados por Año",
                data: Object.values(yearlyTotals),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 8,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(context) {
                        return `Total Graduados: ${context.parsed.y}`;
                    }
                }
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Año",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Cantidad de Graduados",
                },
                beginAtZero: true,
            },
        },
    };

    if (isLoading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="w-full space-y-4">
            <div className="h-96">
                <Line data={chartData} options={options} />
            </div>
            <div className="mt-4">
                <h3 className="font-bold mb-2">Totales por Año:</h3>
                <ul>
                    {Object.entries(yearlyTotals).sort().map(([year, total]) => (
                        <li key={year} className="mb-1">
                            Año {year}: {total} graduados
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ChartComponent;