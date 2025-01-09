// Definir los filtros disponibles y sus condiciones
export const FILTER_CONDITIONS = {
    '2019-2022': () => true,
    'Ingeniería en Informática': (item) => item?.career?.name === 'Lic. en Ingeniera en Informática',
    'faeco': (item) => item?.career.faculty.name === 'Administración de Empresas y Contabilidad',
    // Puedes agregar más filtros aquí
};

export const INITIAL_DATA_STATE = {
    isLoading: false,
    error: null,
    yearlyTotals: {},
    sortedYearlyData: { years: [], totals: [] }
};