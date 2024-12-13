import React from 'react'
import SyntaxBlock from './SyntaxBlock';
import SectionHeader from './SectionHeader';
import graduateAllResponse from '../mocks/api/graduatesResponse.json'
import campusResponse from '../mocks/api/campusResponse.json'
import facultyResponse from '../mocks/api/facultyResponse.json'
import careersResponse from '../mocks/api/careersResponse.json'
import oneGraduateResponse from '../mocks/api/oneGraduateResponse.json'


const DocsHub = () => {
    const routes = [
        { resource: "Graduates", description: "Muestra toda la cantidad de graduados" },
        { resource: "Faculties", description: "Muestra toda la cantidad de graduados por facultad" },
        { resource: "Careers", description: "Muestra toda la cantidad de graduados por carrera" },
        { resource: "Campus", description: "Muestra toda la cantidad de graduados por campus" },
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

            <section className="my-16" aria-labelledby="getting-started">
                <SectionHeader
                    id="empezar"
                    title="Empezar"
                    description="Para empezar a utilizar la RESTful API de Graduados UP, debes de conocer las distintas rutas."
                />

                <h2 className="text-lg font-semibold mt-8" id="available-routes">
                    URL Base: &nbsp;
                    <span className='font-farro-light font-bold text-black border-b-2 border-b-green-400'>
                        https://www.graduadosup-api.com/api
                    </span>
                </h2>

                <h2 className="text-lg font-semibold mt-8" id="available-routes">Rutas Disponibles</h2>
                <ul className="text-gray-600 text-sm space-y-2 list-disc pl-8" aria-describedby="available-routes">
                    {routes.map((route) => (
                        <li key={route.resource}>
                            <span className="font-bold text-black border-b-2 border-b-green-400">{route.resource}: </span>
                            {route.description}
                        </li>
                    ))}
                </ul>

                <h2 className='font-bold text-lg mt-8' id='json-response-all-graduates'>Response</h2>
                <SyntaxBlock
                    method="GET"
                    url="https://www.graduadosup-api.com/api/graduates"
                    response={JSON.stringify(graduateAllResponse, null, 2)}
                />

                <h2 className='font-bold text-lg mt-8' id='paginacion'>Paginación</h2>
                <p className='font-farro-light text-gray-700'>Para obtener una cantidad específica de datos, puedes utilizar la paginación. Por defecto, la paginación es de 10 elementos por página.</p>
                <div className='pb-2'>
                    <h3 className='font-bold text-lg mt-4'>Página y límite</h3>
                    <p className='font-farro-light text-gray-700'>
                        La API puede recibir dos parámetros para la paginación: <span className='font-bold text-gray-900'>PAGE</span> indica el número de página y <span className='font-bold text-gray-900'>LIMIT</span> indica la cantidad de elementos por página. Si no añades estos parámetros, la API devolverá los primeros 10 elementos.
                    </p>
                </div>

                <SyntaxBlock
                    method="GET"
                    url="https://www.graduadosup-api.com/api/graduates"
                    response={JSON.stringify(graduateAllResponse, null, 2)}
                />
            </section>

            <section className="my-16" aria-labelledby="endpoints">
                <SectionHeader
                    id="endpoints"
                    title="Endpoints"
                    description="A continuación se muestran los diferentes endpoints disponibles en la RESTful API de Graduados UP y cómo puedes acceder a ellos. Puedes obtener información detallada sobre graduados, facultades, carreras y campus. Cada endpoint tiene una descripción detallada de cómo acceder a los datos."
                />

                <section id="graduates">
                    <h2 className="text-2xl font-semibold mt-16">Graduates</h2>
                    <p className='font-farro-light text-gray-700'>La Universidad de Panamá (UP) tiene 287,729 graduados desde 1939 hasta 2023.</p>

                    <article>
                        <div className='pb-2'>
                            <h3 className='text-lg font-semibold mt-8'>Obtener todos los graduados</h3>
                            <p className='font-farro-light text-gray-700'>Puedes obtener acceso a la lista de graduados utilizando el endpoint <span className='text-gray-900 font-bold'>/graduates</span> . Retornara toda la cantidad de estudiantes que se han graduados por año, campus y carrera.</p>
                        </div>

                        <SyntaxBlock
                            method="GET"
                            url="https://www.graduadosup-api.com/api/graduates"
                            response={JSON.stringify(graduateAllResponse, null, 2)}
                        />
                    </article>

                    <article className='mt-16'>
                        <div className='pb-2'>
                            <h3 className='text-lg font-semibold mt-8'>Obtener un dato en específico</h3>
                            <p className='font-farro-light text-gray-700'>
                                Puedes obtener acceso a un único dato de la lista de graduados agregando un id como un parámetro, utilizando el endpoint
                                <span className='text-gray-900 font-bold'> /graduates/1</span>
                            </p>

                            <p className='font-farro-light text-gray-700 mt-4'>
                                También puedes obtener un dato en específico filtrando a través de los siguientes parametros:
                            </p>

                            <ul className="text-gray-600 text-sm space-y-2 list-disc pl-8 mt-2" aria-describedby="available-routes">
                                {[
                                    ['Año', 'year', '2023'],
                                    ['Carrera', 'career_id', 'Ingeniería en Informática'],
                                    ['Campus', 'campus_id', 'Campus Central'],
                                ].map((item, index) => (
                                    <li key={index}>{item[0]} <span className='text-gray-900 font-bold'>(/graduates?{item[1]}={item[2]})</span></li>
                                ))}
                            </ul>
                        </div>
                    </article>
                </section>

                <section id="careers">
                    <h2 className="text-2xl font-semibold mt-16">Careers</h2>
                    <p className='font-farro-light text-gray-700'>La Universidad de Panamá ofrece una amplia variedad de carreras para sus estudiantes. Cuenta con un alrededor de 171 carreras en diferentes áreas.</p>

                    <article>
                        <div className='pb-2'>
                            <h3 className='text-lg font-semibold mt-8'>Obtener toda la cantidad de estudiante graduados por carrera</h3>
                            <p className='font-farro-light text-gray-700'>Puedes obtener acceso a la lista de carreras utilizando el endpoint <span className='text-gray-900 font-bold'>/carrers</span> . Al realizar la petición, se retornara todos los registros junto con el nombre de la facultad a la cual pertenece la carrera junto a otros datos adicionales.</p>
                        </div>

                        <SyntaxBlock
                            method="GET"
                            url="https://www.graduadosup-api.com/api/careers"
                            response={JSON.stringify(careersResponse, null, 2)}
                        />
                    </article>

                    <article className='mt-16'>
                        <div className='pb-2'>
                            <h3 className='text-lg font-semibold mt-8'>Obtener un dato en específico</h3>
                            <p className='font-farro-light text-gray-700'>
                                Puedes obtener acceso a un único dato de la lista de carreras agregando un id como un parámetro, utilizando el endpoint
                                <span className='text-gray-900 font-bold'> /careers/1</span>
                            </p>

                            <p className='font-farro-light text-gray-700 mt-4'>
                                Hasta el momento no hay soporte para filtrar por parámetros. Pero ya se está trabajando en ello.
                            </p>
                        </div>
                    </article>
                </section>

                <section id="faculty">
                    <h2 className="text-2xl font-semibold mt-16">Faculty</h2>
                    <p className='font-farro-light text-gray-700'>Actualmente, la universidad está organizada en 19 facultades. Sin embargo, es importante destacar que la distribución de estas facultades y las carreras que ofrecen pueden diferir entre los distintos campus</p>

                    <article>
                        <div className='pb-2'>
                            <h3 className='text-lg font-semibold mt-8'>Obtener toda la cantidad de graduados por facultad</h3>
                            <p className='font-farro-light text-gray-700'>Puedes obtener acceso a la lista de facultades utilizando el endpoint <span className='text-gray-900 font-bold'>/faculties</span> . Este recurso te permite acceder a datos sobre el número de graduados por facultad, proporcionándote una visión completa de la trayectoria académica de cada una desde su creación.</p>
                        </div>

                        <SyntaxBlock
                            method="GET"
                            url="https://www.graduadosup-api.com/api/faculties"
                            response={JSON.stringify(facultyResponse, null, 2)}
                        />
                    </article>

                    <article className='mt-16'>
                        <div className='pb-2'>
                            <h3 className='text-lg font-semibold mt-8'>Obtener un dato en específico</h3>
                            <p className='font-farro-light text-gray-700'>
                                Puedes obtener acceso a un único dato de la lista de facultades agregando un id como un parámetro, utilizando el endpoint
                                <span className='text-gray-900 font-bold'> /graduates/1</span>
                            </p>

                            <p className='font-farro-light text-gray-700 mt-4'>
                                Utilizando el endpoint <span className='text-gray-900 font-bold'> /graduates/1/career</span> , podrás obtener un listado detallado de las carreras que han cursado los egresados de una facultad en particular.
                            </p>
                        </div>
                    </article>
                </section>

                <section id="campus">
                    <h2 className="text-2xl font-semibold mt-16">Campus</h2>
                    <p className='font-farro-light text-gray-700'>La Universidad de Panamá (UP) tiene varios campus, entre ellos los centros regionales y extensiones en Azuero, Bocas del Toro, Coclé, Colón, Darién, Los Santos, Panamá Este, Panamá Oeste, San Miguelito y Veraguas.
                    </p>

                    <article>
                        <div className='pb-2'>
                            <h3 className='text-lg font-semibold mt-8'>Obtener toda la cantidad de graduados por campus (Centro regionales y extensiones)</h3>
                            <p className='font-farro-light text-gray-700'>Puedes obtener acceso a la lista de graduados utilizando el endpoint <span className='text-gray-900 font-bold'>/campus</span> . Este recurso te permite conocer el número total de egresados de todas las facultades a lo largo de los años</p>
                        </div>

                        <SyntaxBlock
                            method="GET"
                            url="https://www.graduadosup-api.com/api/campus"
                            response={JSON.stringify(campusResponse, null, 2)}
                        />
                    </article>

                    <article className='mt-16'>
                        <div className='pb-2'>
                            <h3 className='text-lg font-semibold mt-8'>Obtener un dato en específico</h3>
                            <p className='font-farro-light text-gray-700'>
                                Puedes obtener acceso a un único dato de la lista de campus agregando un id como un parámetro, utilizando el endpoint
                                <span className='text-gray-900 font-bold'> /campus/1</span>
                            </p>

                            <p className='font-farro-light text-gray-700 mt-4'>
                                Hasta el momento no hay soporte para filtrar por parámetros. Pero ya se está trabajando en ello.
                            </p>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}

export default DocsHub

