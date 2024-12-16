import React from 'react'

const InforEndpoint = ({title = '', endpoint = '', descriptionTitle = '', descriptionEndpoint = ''}) => {
    return (
        <section className='mt-16'>
            <h2 className="text-gray-900 dark:text-gray-100 text-2xl font-farro-bold">{title}</h2>
            <p className='font-farro-light text-gray-700 dark:text-gray-400'>{descriptionTitle}</p>

            <div className='mb-8'>
                <h3 className='text-lg dark:text-gray-100 font-semibold mt-8'>Obtener todos los recursos</h3>
                <p className='font-farro-light text-gray-700 dark:text-gray-400'>Puedes obtener acceso a todos los recusos utilizando el endpoint <span className='text-gray-900 dark:text-gray-100 font-bold'>/{endpoint}</span> . {descriptionEndpoint}</p>
            </div>
        </section>
    )
}

export default InforEndpoint
