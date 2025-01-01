import { API_BASE_URL } from "../../constants/apiRoutes"

const BaseUrlSection = ({ urlBaseRef }) => {
    return (
        <h2 className="md:text-lg dark:text-gray-100 font-semibold mt-8" id="available-routes" ref={urlBaseRef}>
            URL Base: &nbsp;
            <span className='font-farro-light font-bold text-black dark:text-gray-100 border-b-2 border-b-green-400'>
                {API_BASE_URL}
            </span>
        </h2>
    )
}

export default BaseUrlSection
