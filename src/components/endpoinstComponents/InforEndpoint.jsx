import React from 'react'

const InforEndpoint = ({title = '', endpoint = '', descriptionTitle = '', descriptionEndpoint = ''}) => {
    return (
        <>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className='font-farro-light text-gray-700'>{descriptionTitle}</p>

            <div className='mb-8'>
                <h3 className='text-lg font-semibold mt-8'>Obtener todos los recursos</h3>
                <p className='font-farro-light text-gray-700'>Puedes obtener acceso a todos los recusos utilizando el endpoint <span className='text-gray-900 font-bold'>/{endpoint}</span> . {descriptionEndpoint}</p>
            </div>
        </>
    )
}

export default InforEndpoint
