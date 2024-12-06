import React from "react";
import ChartComponent from "./ChartComponent";

const GraduatesSection = () => {
    return (
        <div className="container mx-auto px-4">
            <div className=" my-8">
                <h1 className="text-4xl font-farro-bold font-bold text-center text-green-600">
                    Estudiantes Graduados de la UP
                </h1>
                <p className="text-center text-gray-600 dark:dark:text-slate-500">
                    Aquí encontrarás información sobre los estudiantes graduados de la Universidad de Panamá.
                </p>
            </div>
        
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-6 mt-12">
                {/* Filtro */}
                <div className="bg-white shadow-md rounded-lg p-4 border border-yellow-200">
                    <h2 className="text-lg font-bold mb-4 text-yellow-600">Filtrar por</h2>
                    <ul className="space-y-2">
                        {["2018-2024", "2010-2018", "2000-2010"].map((range, index) => (
                            <li key={index}>
                                <button className="w-full py-2 px-4 text-left border border-green-400 rounded-md hover:bg-green-100 transition">
                                    Graduados entre {range}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Gráfico */}
                <div className="bg-white shadow-md rounded-lg p-4 md:col-span-2 border border-green-200">
                    <ChartComponent />
                </div>
            </div>

            {/* Información adicional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 text-center">
                <div className="w-8/12 m-auto">
                    <h3 className="text-xl font-semibold mb-2">¿What is this?</h3>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
                        minim veniam.
                    </p>
                </div>

                <div className="w-8/12 m-auto">
                    <h3 className="text-xl font-semibold mb-2">¿Where do I start?</h3>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
                        minim veniam.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GraduatesSection;
