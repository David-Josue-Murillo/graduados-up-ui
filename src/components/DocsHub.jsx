import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const jsonResponse = `{
  "message": "Datos obtenidos exitosamente",
  "data": [
    {
      "id": 1,
      "quantity": 150,
      "year": 2023,
      "campus": {
        "id": 1,
        "name": "Centro Regional Universitario de Veraguas"
      },
      "career": {
        "id": 2,
        "name": "Ingeniería en Sistemas",
        "faculty": {
          "id": 1,
          "name": "Facultad de Informática, Electrónica y Comunicación"
        }
      }
    }
  ],
  "status": 200,
  "errors": []
}`

const DocsHub = () => {
    return (
        <main className="md:w-8/12" data-aos="fade-up">
            <section id='Introduccion' className="my-8">
                <h2 className="text-3xl my-2 font-semibold">Introducción</h2>
                <p className='text-gray-800'>¡Bienvenido a la documentación de Graduados UP! Esta página te dará una introducción sobre que trata esta RESTful Apis</p>

                <section>
                    <h3 className="text-lg font-medium mt-8">¿Qué es Graduados UP?</h3>
                    <p className='font-farro-light text-gray-700'>Graduados UP es un proyecto que busca facilitar la gestión de graduados de la Universidad del Pacífico. A través de esta RESTful API, podrás acceder a información de los graduados, facultades, campus y más.</p>
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

            <section id='Empezar' className="my-16">
                <h2 className="text-3xl my-2 font-semibold">Empezar</h2>
                <p className='text-gray-800'>Para empezar a utilizar la RESTful API de Graduados UP, debes de conocer las distintas rutas</p>

                <section>
                    <h3 className="text-lg font-semibold mt-8">Rutas</h3>
                    <p className='my-2'>
                        <strong>URL Base: </strong>
                        <span className='font-farro-light border-b-2 border-b-green-400'>https://www.graduadosup-api.com/api</span>
                    </p>
                    <p className='font-farro-light text-gray-700'>
                        La URL base se mantiene constante y es fundamental para ir añadiendo progresivamente diferentes rutas que aporten la información deseada. Todas las respuestas son en forma de peticiones GET vía HTTPS y devuelven datos en formato JSON.
                    </p>
                    <p className='my-4 font-farro-light text-gray-700'>
                        Actualmente existen cuatro(4) tipos de recursos:
                    </p>

                    <ul className="text-gray-600 text-sm space-y-2 list-disc pl-8">
                        <li><span className='font-bold text-black border-b-2 border-b-green-400'>Graduates: </span>Muestra toda la cantidad de graduados</li>
                        <li><span className='font-bold text-black border-b-2 border-b-green-400'>Faculties: </span>Muestra toda la cantidad de graduados por facultad</li>
                        <li><span className='font-bold text-black border-b-2 border-b-green-400'>Careers: </span>Muestra toda la cantidad de graduados por carrera</li>
                        <li><span className='font-bold text-black border-b-2 border-b-green-400'>Campus: </span>Muestra toda la cantidad de graduados por campus</li>
                    </ul>

                    <h3 className='font-bold text-lg mt-8'>Response</h3>
                    <div className="bg-zinc-800 text-white p-4 border rounded-lg overflow-auto">
                        <div className="flex gap-4 pb-2 border-b border-gray-700">
                            <h4 className="text-green-400">GET</h4>
                            <p className="text-sm my-auto">https://www.graduadosup-api.com/api/graduates</p>
                        </div>
                        <SyntaxHighlighter language="json" style={materialDark}>
                         {jsonResponse}
                        </SyntaxHighlighter>
                    </div>

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
                        <SyntaxHighlighter language="json" style={materialDark}>
                         {jsonResponse}
                        </SyntaxHighlighter>
                    </div>
                </section>
            </section>

            <section id='Endpoints' className="my-16">
                <h2 className="text-3xl my-2 font-semibold">Endpoints</h2>
                <p className='text-gray-800'>A continuación se muestran los diferentes endpoints disponibles en la RESTful API de Graduados UP</p>

                <section>
                    <h3 className="text-lg font-semibold mt-8">Graduates</h3>
                    <p className='my-2 font-farro-light text-gray-700'>Muestra toda la cantidad de graduados</p>
                    <div className="bg-zinc-800 text-white p-4 border rounded-lg overflow-auto">
                        <div className="flex gap-4 pb-2 border-b border-gray-700">
                            <h4 className="text-green-400">GET</h4>
                            <p className="text-sm my-auto">https://www.graduadosup-api.com/api/graduates</p>
                        </div>
                        <SyntaxHighlighter language="json" style={materialDark}>
                         {jsonResponse}
                        </SyntaxHighlighter>
                    </div>

                    <h3 className="text-lg font-semibold mt-8">Faculties</h3>
                    <p className='my-2 font-farro-light text-gray-700'>Muestra toda la cantidad de graduados por facultad</p>
                    <div className="bg-zinc-800 text-white p-4 border rounded-lg overflow-auto">
                        <div className="flex gap-4 pb-2 border-b border-gray-700">
                            <h4 className="text-green-400">GET</h4>
                            <p className="text-sm my-auto">https://www.graduadosup-api.com/api/faculties</p>
                        </div>
                        <SyntaxHighlighter language="json" style={materialDark}>
                         {jsonResponse}
                        </SyntaxHighlighter>
                    </div>

                    <h3 className="text-lg font-semibold mt-8">Careers</h3>
                    <p className='my-2 font-farro-light text-gray-700'>Muestra toda la cantidad de graduados por carrera</p>
                    <div className="bg-zinc-800 text-white p-4 border rounded-lg overflow-auto">
                        <div className="flex gap-4 pb-2 border-b border-gray-700">
                            <h4 className="text-green-400">GET</h4>
                            <p
                                className="text-sm my-auto">https://www.graduadosup-api.com/api/careers</p>
                        </div>
                        <SyntaxHighlighter language="json" style={materialDark}>
                         {jsonResponse}
                        </SyntaxHighlighter>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default DocsHub
