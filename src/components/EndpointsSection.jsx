import SyntaxBlock from './SyntaxBlock';
import SectionHeader from './startedComponents/SectionHeader';
import InfoRespComponent from './endpoinstComponents/InfoRespComponent';
import campusResponse from '../mocks/api/campusResponse.json'
import facultyResponse from '../mocks/api/facultyResponse.json'
import careersResponse from '../mocks/api/careersResponse.json'
import graduateResponse from '../mocks/api/graduatesResponse.json'


const EndpointsSection = () => {

    const filtersGraduates = [
        ['Año', 'year', '2023'],
        ['Carrera', 'career_id', 'Ingeniería en Informática'],
        ['Campus', 'campus_id', 'Campus Central'],
    ];

    return (
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
                        response={JSON.stringify(graduateResponse, null, 2)}
                    />
                </article>

                < InfoRespComponent
                    endpoint={'graduates'}
                    descriptionEndpoint={'Puedes obtener acceso a un único dato de la lista de graduados agregando un id como un parámetro, utilizando el endpoint'}
                    descriptionFilter={'También puedes obtener un dato en específico filtrando a través de los siguientes parametros:'}
                    filter={filtersGraduates}
                />
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

                < InfoRespComponent
                    endpoint={'careers'}
                    descriptionEndpoint={'Puedes obtener acceso a un único dato de la lista de carreras agregando un id como un parámetro, utilizando el endpoint'}
                    descriptionFilter={'Hasta el momento no hay soporte para filtrar por parámetros. Pero ya se está trabajando en ello.'}
                />
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

                < InfoRespComponent
                    endpoint={'faculties'}
                    descriptionEndpoint={'Puedes obtener acceso a un único dato de la lista de facultades agregando un id como un parámetro, utilizando el endpoint'}
                    descriptionFilter={'Utilizando el endpoint /faculties/1/career, podrás obtener un listado detallado de las carreras que han cursado los egresados de una facultad en particular.'}
                />
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

                <InfoRespComponent
                    endpoint='campus'
                    descriptionEndpoint='Puedes obtener acceso a un único dato de la lista de campus agregando un id como un parámetro, utilizando el endpoint'
                    descriptionFilter='Hasta el momento no hay soporte para filtrar por parámetros. Pero ya se está trabajando en ello.'
                />
            </section>
        </section>
    )
}

export default EndpointsSection
