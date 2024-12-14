
const InfoRespComponent = ({endpoint, descriptionEndpoint, descriptionFilter, filter = null}) => {
    return (
        <article className='mt-16'>
            <div className='pb-2'>
                <h3 className='text-lg font-semibold mt-8'>Obtener un dato en específico</h3>
                <p className='font-farro-light text-gray-700'>
                    {descriptionEndpoint}
                    <span className='text-gray-900 font-bold'> /{endpoint}/1</span>
                </p>

                <p className='font-farro-light text-gray-700 mt-4'>
                    {descriptionFilter}
                </p>

                {filter && (  <ul className="text-gray-600 text-sm space-y-2 list-disc pl-8 mt-2" aria-describedby="available-routes">
                                {filter.map((item, index) => (
                                    <li key={index}>{item[0]} <span className='text-gray-900 font-bold'>(/{endpoint}?{item[1]}={item[2]})</span></li>
                                ))}
                            </ul>)}
            </div>
        </article>
    )
}

export default InfoRespComponent
