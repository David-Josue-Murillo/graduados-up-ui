export const ENDPOINTS_DATA = {
    graduates: {
        title: 'Graduates',
        endpoint: 'graduates',
        descriptionTitle: 'La Universidad de Panamá (UP) tiene 287,729 graduados desde 1939 hasta 2023.',
        descriptionEndpoint: 'Retornara toda la cantidad de estudiantes que se han graduados por año, campus y carrera.',
        filters: [
            ['Año', 'year', '2023'],
            ['Carrera', 'career_id', 'Ingeniería en Informática'],
            ['Campus', 'campus_id', 'Campus Central'],
        ],
        hasFilters: true
    },
    careers: {
        title: 'Careers',
        endpoint: 'careers',
        descriptionTitle: 'La Universidad de Panamá ofrece una amplia variedad de carreras para sus estudiantes. Cuenta con un alrededor de 171 carreras en diferentes áreas.',
        descriptionEndpoint: 'Al realizar la petición, se retornara todos los registros junto con el nombre de la facultad a la cual pertenece la carrera junto a otros datos adicionales.',
        hasFilters: false
    },
    faculty: {
        title: 'Faculty',
        endpoint: 'faculties',
        descriptionTitle: 'Actualmente, la universidad está organizada en 19 facultades. Sin embargo, es importante destacar que la distribución de estas facultades y las carreras que ofrecen pueden diferir entre los distintos campus.',
        descriptionEndpoint: 'Este recurso te permite acceder a datos sobre el número de graduados por facultad, proporcionándote una visión completa de la trayectoria académica de cada una desde su creación.',
        hasFilters: false
    },
    campus:{
        title: 'Campus',
        endpoint: 'campus',
        descriptionTitle: 'La Universidad de Panamá (UP) tiene varios campus, entre ellos los centros regionales y extensiones en Azuero, Bocas del Toro, Coclé, Colón, Darién, Los Santos, Panamá Este, Panamá Oeste, San Miguelito y Veraguas.',
        descriptionEndpoint: 'Este recurso te permite conocer el número total de egresados de todas las facultades a lo largo de los años, en cada uno de los campus de la Universidad de Panamá.',
        hasFilters: false
    }
}
