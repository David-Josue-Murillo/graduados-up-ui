import SyntaxBlock from "../../../../components/SyntaxBlock"
import { API_BASE_URL } from "../../constants/apiRoutes"
import graduateResponse from '../../../../mocks/api/graduatesResponse.json'


const ResponseSection = () => {
    return (
        <div>
            <h2 className='font-bold text-lg mt-8' id='json-response-all-graduates'>Response</h2>
            <SyntaxBlock
                method="GET"
                url={`${API_BASE_URL}/graduates`}
                response={JSON.stringify(graduateResponse, null, 2)}
            />
        </div>
    )
}

export default ResponseSection
