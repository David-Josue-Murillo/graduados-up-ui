import { AVAILABLE_ROUTES } from "../../constants/apiRoutes"

const AvailableRoutes = ({ availableRoutesRef }) => {
    return (
        <div>
            <h2 className="text-lg dark:text-gray-100 font-semibold mt-8" ref={availableRoutesRef} id="available-routes">
                Rutas Disponibles
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2 list-disc mt-2 pl-4 md:pl-8"
                aria-describedby="available-routes">
                {AVAILABLE_ROUTES.map((route) => (
                    <li key={route.resource}>
                        <span className="font-bold text-black dark:text-gray-100 border-b-2 border-b-green-400">
                            {route.resource}:&nbsp;
                        </span>
                        {route.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AvailableRoutes
