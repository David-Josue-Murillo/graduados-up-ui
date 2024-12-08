import React from 'react'

const DocsHub = () => {
    return (
        <main className="md:w-8/12" data-aos="fade-up">
            <section className="my-8">
                <h2 id='Información' className="text-3xl my-2 font-semibold">Introducción</h2>
                <p className='text-gray-800'>¡Bienvenido a la documentación de Graduados UP! Esta página te dará una introducción sobre que trata esta RESTful Apis</p>

                <section>
                    <h3 className="text-lg font-medium mt-8">¿Qué es Graduados UP?</h3>
                    <p className='font-farro-light text-sm'>Graduados UP es un proyecto que busca facilitar la gestión de graduados de la Universidad del Pacífico. A través de esta RESTful API, podrás acceder a información de los graduados, facultades, campus y más.</p>
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
        </main>
    )
}

export default DocsHub
