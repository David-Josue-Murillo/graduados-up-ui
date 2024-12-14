import SectionHeader from './SectionHeader'
import SyntaxBlock from './SyntaxBlock'
import graduateResponse from '../mocks/api/graduatesResponse.json'

const GetStartedSection = () => {

    const routes = [
        { resource: "Graduates", description: "Muestra toda la cantidad de graduados" },
        { resource: "Faculties", description: "Muestra toda la cantidad de graduados por facultad" },
        { resource: "Careers", description: "Muestra toda la cantidad de graduados por carrera" },
        { resource: "Campus", description: "Muestra toda la cantidad de graduados por campus" },
    ];

    return (
        <section className="my-12" aria-labelledby="getting-started">
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
                response={JSON.stringify(graduateResponse, null, 2)}
            />

            <h2 className='font-bold text-lg mt-12 my-2' id='paginacion'>Paginación</h2>
            <p className='font-farro-light text-gray-700'>Para obtener una cantidad específica de datos, puedes utilizar la paginación. Por defecto, la paginación es de 10 elementos por página.</p>
            <div className='my-12'>
                <h3 className='font-bold text-lg mt-8 my-2'>Página y límite</h3>
                <p className='font-farro-light text-gray-700'>
                    La API puede recibir dos parámetros para la paginación: <span className='font-bold text-gray-900'>PAGE</span> indica el número de página y <span className='font-bold text-gray-900'>LIMIT</span> indica la cantidad de elementos por página. Si no añades estos parámetros, la API devolverá los primeros 10 elementos.
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
