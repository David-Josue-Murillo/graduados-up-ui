
const InfoRespComponent = ({endpoint = '', descriptionEndpoint = '', descriptionFilter = '', filter = null}) => {
    return (
        <article className='mt-12'>
            <div className='pb-2'>
                <h3 className='text-lg dark:text-gray-100 font-semibold mt-8'>Obtener un dato en específico</h3>
                <p className='font-farro-light text-sm md:text-base text-gray-700 dark:text-gray-400'>
                    {descriptionEndpoint}
                    <span className='text-gray-900 dark:text-gray-100 font-bold'> /{endpoint}/1</span>
                </p>

                <p className='font-farro-light text-sm md:text-base text-gray-700 dark:text-gray-400 mt-4'>
                    {descriptionFilter}
                </p>

                {filter && (  <ul className="text-gray-600 text-xs md:text-sm dark:text-gray-200 space-y-2 list-disc pl-8 mt-2" aria-describedby="available-routes">
                                {filter.map((item, index) => (
                                    <li key={index}>{item[0]} <span className='text-gray-900 dark:text-gray-400 font-bold'>(/{endpoint}?{item[1]}={item[2]})</span></li>
                                ))}
                            </ul>)}
            </div>
        </article>
    )
}

export default InfoRespComponent
