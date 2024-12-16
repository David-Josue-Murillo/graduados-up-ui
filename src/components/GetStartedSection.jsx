import SectionHeader from './startedComponents/SectionHeader'
import SyntaxBlock from './SyntaxBlock'
import graduateResponse from '../mocks/api/graduatesResponse.json'

const GetStartedSection = ({urlBaseRef, availableRoutesRef, paginationRef}) => {

    const routes = [
        { resource: "Graduates", description: "Muestra toda la cantidad de graduados" },
        { resource: "Faculties", description: "Muestra toda la cantidad de graduados por facultad" },
        { resource: "Careers", description: "Muestra toda la cantidad de graduados por carrera" },
        { resource: "Campus", description: "Muestra toda la cantidad de graduados por campus" },
    ];

    return (
        <section className="my-16" aria-labelledby="getting-started">
            <SectionHeader
                id="empezar"
                title="Empezar"
                description="Para empezar a utilizar la RESTful API de Graduados UP, debes de conocer las distintas rutas."
            />

            <h2 className="text-lg dark:text-gray-100 font-semibold mt-8" id="available-routes" ref={urlBaseRef}>
                URL Base: &nbsp;
                <span className='font-farro-light font-bold text-black dark:text-gray-100 border-b-2 border-b-green-400'>
                    https://www.graduadosup-api.com/api
                </span>
            </h2>

            <h2 className="text-lg dark:text-gray-100 font-semibold mt-8" ref={availableRoutesRef} id="available-routes">Rutas Disponibles</h2>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2 list-disc pl-8" aria-describedby="available-routes">
                {routes.map((route) => (
                    <li key={route.resource}>
                        <span className="font-bold text-black dark:text-gray-100 border-b-2 border-b-green-400">{route.resource}: </span>
                        {route.description}
                    </li>
                ))}
            </ul>

            <h2 className='font-bold text-lg mt-8' id='json-response-all-graduates'>Response</h2>
            <SyntaxBlock
                method="GET"
                url="https://www.graduadosup-api.com/api/graduates"
                response={JSON.stringify(graduateResponse, null, 2)}
            />

            <h2 className='font-bold text-lg dark:text-gray-100 mt-12 my-2' ref={paginationRef} id='paginacion'>Paginación</h2>
            <p className='font-farro-light text-gray-700 dark:text-gray-400'>Para obtener una cantidad específica de datos, puedes utilizar la paginación. Por defecto, la paginación es de 10 elementos por página.</p>
            <div className='my-6'>
                <h3 className='font-bold text-lg dark:text-gray-100 mt-8 my-2'>Página y límite</h3>
                <p className='font-farro-light text-gray-700 dark:text-gray-400'>
                    La API puede recibir dos parámetros para la paginación: <span className='font-bold text-gray-900 dark:text-gray-100'>PAGE</span> indica el número de página y <span className='font-bold text-gray-900 dark:text-gray-100'>LIMIT</span> indica la cantidad de elementos por página. Si no añades estos parámetros, la API devolverá los primeros 10 elementos.
                </p>
            </div>

            <SyntaxBlock
                method="GET"
                url="https://www.graduadosup-api.com/api/graduates"
                response={JSON.stringify(graduateResponse, null, 2)}
            />
        </section>
    )
}

export default GetStartedSection
