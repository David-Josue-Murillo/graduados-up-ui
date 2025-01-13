export const GRADUATES_CONTENT = {
    title: 'Estudiantes Graduados de la UP',
    description: 'Aquí encontrarás información sobre los estudiantes graduados de la Universidad de Panamá.',
    filterTitle: 'Filtrar por'
};

export const FILTER_OPTIONS = [
    { id: 1, label: 'Graduados entre 2019-2022', value: '2019-2022' },
    { id: 2, label: 'Graduados de Ingeniería en Informática', value: 'Ingeniería en Informática' },
    { id: 3, label: 'Graduados de Fac. en Administración  de Empresas', value: 'faeco' },
    { id: 4, label: 'Graduados en la sede principal', value: 'up central' },
    { id: 5, label: 'Graduados en CRU Veraguas', value: 'cruv' },
    { id: 6, label: 'Graduados por facultad', value: 'humanidades' }
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