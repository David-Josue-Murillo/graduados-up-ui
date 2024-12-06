import React from "react";
import { Line } from "react-chartjs-2";
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

// Registramos los módulos necesarios
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
    // Datos y configuración para el gráfico
    const data = {
        labels: ["2010", "2012", "2014", "2016", "2018", "2020", "2022"],
        datasets: [
            {
                label: "Estudiantes Graduados",
                data: [1000, 1200, 1400, 1600, 1800, 2000, 2200],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2,
                tension: 0.4, // Curvatura de la línea
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

    return (
        <div className="w-full h-96">
            <Line data={data} options={options} />
        </div>
    );
};

export default ChartComponent;
