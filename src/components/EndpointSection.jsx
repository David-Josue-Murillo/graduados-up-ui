import { API_BASE_URL } from "../pages/Documentation/constants/apiRoutes"
import InforEndpoint from "./endpointComponents/InforEndpoint"
import InfoRespComponent from "./endpointComponents/InfoRespComponent"
import SyntaxBlock from "./SyntaxBlock"

const EndpointSection = ({ id, reference, data, response }) => {
  return (
    <section id={id} ref={reference}>
        <InforEndpoint 
            title={data.title}
            endpoint={data.endpoint}
            descriptionTitle={data.descriptionTitle}
            descriptionEndpoint={data.descriptionEndpoint}
        />

        <SyntaxBlock 
            method="GET"
            url={`${API_BASE_URL}/${data.endpoint}`}
            response={JSON.stringify(response, null, 2)}
        />

        <InfoRespComponent 
            endpoint={data.endpoint}
            descriptionEndpoint={`Puedes obtener acceso a un único dato de la lista de ${data.endpoint} agregando un id como un parámetro, utilizando el endpoint`}
            descriptionFilter={data.hasFilters ? 
                'También puedes obtener un dato en específico filtrando a través de los siguientes parametros:' : 
                'Hasta el momento no hay soporte para filtrar por parámetros. Pero ya se está trabajando en ello.'}
            filter={data.filters}
        />

    </section>
  )
}

export default EndpointSection
