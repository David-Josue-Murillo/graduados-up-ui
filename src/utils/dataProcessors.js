import { faculties } from './faculties'; 

/**
 * Procesa los datos con un filtro específico
 * @param {Array} apiData - Datos crudos de la API
 * @param {string} filterType - Tipo de filtro a aplicar
 * @param {Object} filterConditions - Objeto con las condiciones de filtrado
 * @returns {Object} Datos procesados con totales anuales
 */
export const processData = (apiData, filterType, filterConditions) => {
    const rawData = Array.isArray(apiData) ? apiData : apiData.data || [];
    const filterCondition = filterConditions[filterType] || (() => true);
    
    if(filterCondition.name === 'facultades') {
        console.log('facultades');
        const facultiesTotals = calculateFacultyTotals(rawData);
        console.log(facultiesTotals);
        
        return createDataStructure(facultiesTotals);
    } 
    const yearlyTotals = calculateYearlyTotals(rawData, filterCondition);
    return createDataStructure(yearlyTotals);
};

/**
 * Calcula los totales por año aplicando un filtro
 */
const calculateYearlyTotals = (data, filterCondition) => {
    return data.reduce((acc, item) => {
        console.log(item.career.faculty.name);
        
        if (
            item?.year != null && 
            item?.quantity != null && 
            filterCondition(item)
        ) {
            const yearKey = item.year.toString();
            acc[yearKey] = (acc[yearKey] || 0) + item.quantity;
        }
        return acc;
    }, {});
};

const calculateFacultyTotals = (data) => {
    let facultiesMap = faculties;
    
    data.forEach(item => {
        if (
            item?.year != null && 
            item?.quantity != null
        ) {
            facultiesMap[item.career.faculty.name] = (facultiesMap[item.career.faculty.name] || 0) + item.quantity;
        }
    }, {});

    return facultiesMap;
};

/**
 * Crea la estructura de datos final
 */
const createDataStructure = (yearlyTotals) => {
    const entries = Object.entries(yearlyTotals).sort();
    return {
        yearlyTotals,
        sortedYearlyData: {
            years: entries.map(([year]) => year),
            totals: entries.map(([, total]) => total)
        }
    };
};