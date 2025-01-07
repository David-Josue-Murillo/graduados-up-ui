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

// Registrar componentes de Chart.js
ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    CategoryScale
);

export const defaultChartOptions = {
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

export const createChartData = (labels, data) => ({
    labels,
    datasets: [
        {
            label: "Total de Graduados por Año",
            data,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 8,
        },
    ],
});