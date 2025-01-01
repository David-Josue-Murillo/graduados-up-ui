import SectionHeader from './SectionHeader';
import campusResponse from '../../../../mocks/api/campusResponse.json'
import careersResponse from '../../../../mocks/api/careersResponse.json'
import graduateResponse from '../../../../mocks/api/graduatesResponse.json'
import facultyResponse from '../../../../mocks/api/facultyResponse.json'
import { ENDPOINTS_DATA } from '../../constants/endpoints';
import EndpointSection from '../../../../components/EndpointSection';

const EndpointsSection = ({graduatesRef, careersRef, facultiesRef, campusRef}) => {
    const endpointResponse = {
        graduates: graduateResponse,
        careers: careersResponse,
        faculty: facultyResponse,
        campus: campusResponse
    }

    return (
        <section className="my-16" aria-labelledby="endpoints">
            <SectionHeader
                id="endpoints"
                title="Endpoints"
                description="A continuación se muestran los diferentes endpoints disponibles en la RESTful API de Graduados UP y cómo puedes acceder a ellos. Puedes obtener información detallada sobre graduados, facultades, carreras y campus. Cada endpoint tiene una descripción detallada de cómo acceder a los datos."
            />

            {Object.entries(ENDPOINTS_DATA).map(([key, value]) => (
                <EndpointSection
                    key={key}
                    id={key}
                    reference={key === 'graduates' ? graduatesRef : key === 'careers' ? careersRef : key === 'faculty' ? facultiesRef : campusRef}
                    data={value}
                    response={endpointResponse[key]}
                />
            ))}
        </section>
    )
}

export default EndpointsSection
