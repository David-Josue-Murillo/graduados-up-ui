import SyntaxBlock from '../../../../components/SyntaxBlock'
import graduateResponse from '../../../../mocks/api/graduatesResponse.json'
import { API_BASE_URL } from "../../constants/apiRoutes"

const PaginationSection = ({ paginationRef }) => {
    return (
        <div>
            <h2 className='font-bold text-lg dark:text-gray-100 mt-12 my-2' ref={paginationRef} id='paginacion'>
                Paginación
            </h2>
            <p className='font-farro-light text-gray-700 dark:text-gray-300'>
                Para obtener una cantidad específica de datos, puedes utilizar la paginación.
                Por defecto, la paginación es de 10 elementos por página.
            </p>
            <div className='my-6'>
                <h3 className='font-bold text-lg dark:text-gray-100 mt-8 my-2'>Página y límite</h3>
                <p className='font-farro-light text-sm md:text-base text-gray-700 dark:text-gray-300'>
                    La API puede recibir dos parámetros para la paginación:
                    <span className='font-bold text-gray-900 dark:text-gray-100'> PAGE </span>
                    indica el número de página y
                    <span className='font-bold text-gray-900 dark:text-gray-100'> LIMIT </span>
                    indica la cantidad de elementos por página. Si no añades estos parámetros,
                    la API devolverá los primeros 10 elementos.
                </p>
            </div>
            <SyntaxBlock
                method="GET"
                url={`${API_BASE_URL}/graduates`}
                response={JSON.stringify(graduateResponse, null, 2)}
            />
        </div>
    )
}

export default PaginationSection
