import React from 'react'
import SyntaxBlock from './SyntaxBlock';
import SectionHeader from './SectionHeader';
import campusResponse from '../mocks/api/campusResponse.json'
import facultyResponse from '../mocks/api/facultyResponse.json'
import careersResponse from '../mocks/api/careersResponse.json'
import InfoRespComponent from './InfoRespComponent';
import GetStartedSection from './GetStartedSection';
import graduateAllResponse from '../mocks/api/graduatesResponse.json'

const DocsHub = () => {
    const filtersGraduates = [
        ['Año', 'year', '2023'],
        ['Carrera', 'career_id', 'Ingeniería en Informática'],
        ['Campus', 'campus_id', 'Campus Central'],
    ];

    return (
        <main className="md:w-8/12" data-aos="fade-up" aria-labelledby='page-title'>
            <section>
                <SectionHeader
                    id="introduccion"
                    title="Introducción"
                    description="¡Bienvenido a la documentación de Graduados UP! Esta página te dará una introducción sobre que trata esta RESTful API."
                />

                <article>
                    <h2 className="text-lg font-medium mt-8" id="about-graduados-up">¿Qué es Graduados UP?</h2>
                    <p className="font-farro-light text-gray-700" aria-describedby="about-graduados-up">
                        Graduados UP es un proyecto que busca facilitar la gestión de graduados de la Universidad del Pacífico, proporcionando una API que permite acceder a datos detallados sobre los graduados, sus facultades, carreras y campus.
                    </p>
                </article>

                <article className='bg-gray-100 mx-4 my-8 p-8 rounded-3xl border border-gray-300' aria-labelledby="datos-disponibles">
                    <h3 className="text-lg font-medium pb-2" id="datos-disponibles">¿Qué datos puedes ver?</h3>
                    <ul className="text-gray-800 font-farro-light text-sm space-y-2 list-disc pl-5" aria-describedby="datos-disponibles">
                        {[
                            "Cantidad de estudiantes graduados por año",
                            "Relaciones entre campus, carreras y facultades",
                            "Detalles sobre programas académicos y facultades asociadas",
                            "Historial de graduados en diferentes campus"
                        ].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </article>
            </section>

            <GetStartedSection />


            
        </main>
    )
}

export default DocsHub

