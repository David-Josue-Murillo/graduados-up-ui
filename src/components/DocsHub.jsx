import React from 'react'
import SyntaxBlock from './SyntaxBlock';
import SectionHeader from './SectionHeader';
import graduateAllResponse from '../mocks/api/graduatesResponse.json'


const DocsHub = () => {
    const routes = [
        { resource: "Graduates", description: "Muestra toda la cantidad de graduados" },
        { resource: "Faculties", description: "Muestra toda la cantidad de graduados por facultad" },
        { resource: "Careers", description: "Muestra toda la cantidad de graduados por carrera" },
        { resource: "Campus", description: "Muestra toda la cantidad de graduados por campus" },
    ];

    return (
        <main className="md:w-8/12" data-aos="fade-up">
            <section>
                <SectionHeader
                    id="Introduccion"
                    title="Introducción"
                    description="¡Bienvenido a la documentación de Graduados UP! Esta página te dará una introducción sobre que trata esta RESTful API."
                />
                <section>
                    <h3 className="text-lg font-medium mt-8">¿Qué es Graduados UP?</h3>
                    <p className="font-farro-light text-gray-700">
                        Graduados UP es un proyecto que busca facilitar la gestión de graduados de la Universidad del Pacífico...
                    </p>
                </section>
                <section className='bg-gray-100 mx-4 my-8 p-8 rounded-3xl border border-gray-300'>
                    <h4 className="text-lg font-medium pb-2">¿Qué datos puedes ver?</h4>
                    <ul className="text-gray-800 font-farro-light text-sm space-y-2 list-disc pl-5">
                        <li>Cantidad de estudiantes graduados por año.</li>
                        <li>Relaciones entre campus, carreras y facultades.</li>
                        <li>Detalles sobre programas académicos y facultades asociadas.</li>
                        <li>Historial de graduados en diferentes campus.</li>
                    </ul>
                </section>
            </section>

            <section className="my-16">
                <SectionHeader
                    id="Empezar"
                    title="Empezar"
                    description="Para empezar a utilizar la RESTful API de Graduados UP, debes de conocer las distintas rutas."
                />

                <h3 className="text-lg font-semibold mt-8">Rutas</h3>
                <ul className="text-gray-600 text-sm space-y-2 list-disc pl-8">
                    {routes.map((route) => (
                        <li key={route.resource}>
                            <span className="font-bold text-black border-b-2 border-b-green-400">{route.resource}: </span>
                            {route.description}
                        </li>
                    ))}
                </ul>

                <h3 className='font-bold text-lg mt-8'>Response</h3>
                <SyntaxBlock method="GET" url="https://www.graduadosup-api.com/api/graduates" response={JSON.stringify(graduateAllResponse, null, 2)} />
                
                <section>
                    <h3 className='font-bold text-lg mt-8'>Paginación</h3>
                    <p className='font-farro-light text-gray-700'>Para obtener una cantidad específica de datos, puedes utilizar la paginación. Por defecto, la paginación es de 10 elementos por página.</p>
                    <div className='pb-2'>
                        <h4 className='font-bold text-lg mt-4'>Página y limete</h4>
                        <p className='font-farro-light text-gray-700'>
                            La API puede recibir dos parámetros para la paginación: <span className='font-bold text-gray-900'>PAGE</span> indica el número de página y <span className='font-bold text-gray-900'>LIMIT</span> indica la cantidad de elementos por página. si no añades estos parámetros, la API devolverá los primeros 10 elementos.
                        </p>
                    </div>
                    <div className="bg-zinc-800 text-white p-4 border rounded-lg overflow-auto">
                        <div className="flex gap-4 pb-2 border-b border-gray-700">
                            <h4 className="text-green-400">GET</h4>
                            <p className="text-sm my-auto">https://www.graduadosup-api.com/api/graduates</p>
                        </div>

                    </div>
                </section>
            </section>

            <section id='Endpoints' className="my-16">
                <h2 className="text-3xl my-2 font-semibold">Endpoints</h2>
                <p className='text-gray-800'>A continuación se muestran los diferentes endpoints disponibles en la RESTful API de Graduados UP</p>

                <section>
                    <h3 className="text-lg font-semibold mt-8">Graduates</h3>
                    <p className='my-2 font-farro-light text-gray-700'>La Universidad de Panamá (UP) tiene 287,729 graduados desde 1939 hasta 2023. </p>

                    <h4 className='text-lg font-semibold mt-8'>Obtener todos los graduados</h4>
                    <p className='my-2 font-farro-light text-gray-700'>Puedes obtener acceso a la lista de graduados utilizando el endpoint <span className='text-gray-900 font-bold'>/graduates</span></p>
                    <div className="bg-zinc-800 text-white p-4 border rounded-lg overflow-auto">
                        <div className="flex gap-4 pb-2 border-b border-gray-700">
                            <h4 className="text-green-400">GET</h4>
                            <p className="text-sm my-auto">https://www.graduadosup-api.com/api/graduates</p>
                        </div>

                    </div>
                </section>
            </section>
        </main>
    )
}

export default DocsHub
