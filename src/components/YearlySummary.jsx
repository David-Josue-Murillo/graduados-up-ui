const YearlySummary = ({ yearlyTotals }) => {
    const sortedYears = Object.entries(yearlyTotals).sort();

    return (
        <div className="mt-4">
            {
                sortedYears.length < 5 ? (
                    <h3 className="text-yellow-600 text-xl font-bold mb-2">Totales por Año:</h3>
                ) : (
                    <h3 className="text-yellow-600 text-xl font-bold mb-2">Totales por Facultad (últimos 5 años):</h3>
                )
            }
            <ul className="dark:text-gray-200 flex justify-between flex-wrap gap-x-4 px-4">
                {sortedYears.map(([year, total]) => (
                    <li key={year} className="mb-1 list-disc mx-2">
                        {year}: <span className="text-green-700 dark:text-green-500">{total}</span> graduados
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YearlySummary