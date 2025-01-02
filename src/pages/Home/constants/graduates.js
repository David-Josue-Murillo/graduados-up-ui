export const GRADUATES_CONTENT = {
    title: 'Estudiantes Graduados de la UP',
    description: 'Aquí encontrarás información sobre los estudiantes graduados de la Universidad de Panamá.',
    filterTitle: 'Filtrar por'
};

export const FILTER_OPTIONS = [
    { id: 1, label: 'Graduados entre 2018-2024', value: '2018-2024' },
    { id: 2, label: 'Graduados entre 2010-2018', value: '2010-2018' },
    { id: 3, label: 'Graduados entre 2000-2010', value: '2000-2010' },
    { id: 4, label: 'Graduados en Ingeniería', value: 'ingenieria' },
    { id: 5, label: 'Graduados en Ciencias', value: 'ciencias' },
    { id: 6, label: 'Graduados en Humanidades', value: 'humanidades' }
];

export const INFO_CARDS = [
    {
        id: 1,
        title: '¿Qué es esto?',
        content: 'Esto es una RESTful APIs para gestionar y visualizar datos de graduados universitarios, incluyendo su información académica, campus, carreras y facultades.'
    },
    {
        id: 2,
        title: '¿Por dónde empiezo?',
        content: 'Accede a la documentación de la API para obtener información sobre cómo consumir los datos y realizar consultas.',
        link: '/documentation'
    }
];