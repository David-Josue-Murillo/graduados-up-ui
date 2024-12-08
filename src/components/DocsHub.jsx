import React from 'react'

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
                </section>
            </section>
        </main>
    )
}

export default DocsHub
