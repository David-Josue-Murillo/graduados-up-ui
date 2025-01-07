const YearlySummary = ({ yearlyTotals }) => {
    const sortedYears = Object.entries(yearlyTotals).sort();

    return (
        <div className="mt-4">
            <h3 className="font-bold mb-2">Totales por Año:</h3>
            <ul>
                {sortedYears.map(([year, total]) => (
                    <li key={year} className="mb-1">
                        Año {year}: {total} graduados
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YearlySummary