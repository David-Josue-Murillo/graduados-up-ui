import ChartComponent from "../../../components/ChartComponent";
import FilterPanel from "./sections/FilterPanel";
import SectionHeader from "./sections/SectionHeader";

const GraduatesSection = () => {
    return (
        <div className="container mx-auto px-4">
            <SectionHeader />
        
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-6 mt-12">
                <FilterPanel />

                {/* Gráfico */}
                <div className="bg-white dark:bg-transparent shadow-md rounded-lg p-4 md:col-span-2 border border-green-200 dark:border-green-400">
                    <ChartComponent />
                </div>
            </div>

            {/* Información adicional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 mt-12 text-center">
                <div className="w-8/12 m-auto">
                    <h3 className="text-xl font-semibold mb-2 dark:dark:text-slate-300">¿Qué es esto?</h3>
                    <p className="text-gray-500 text-sm">
                        Esto es una RESTful APIs para gestionar y visualizar datos de graduados universitarios, incluyendo su información académica, campus, carreras y facultades.
                    </p>
                </div>

                <div className="w-8/12 m-auto">
                    <h3 className="text-xl font-semibold mb-2 dark:dark:text-slate-300">¿Por dónde empiezo?</h3>
                    <p className="text-gray-500 text-sm">
                        Accede a la <a className="text-blue-600 cursor-pointer">documentación</a> de la API para obtener información sobre cómo consumir los datos y realizar consultas.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GraduatesSection;
