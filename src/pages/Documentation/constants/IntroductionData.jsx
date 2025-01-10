const IntroductionData = [
    "Cantidad de estudiantes graduados por año",
    "Relaciones entre campus, carreras y facultades",
    "Detalles sobre programas académicos y facultades asociadas",
    "Historial de graduados en diferentes campus"
];

const DataList = () => (
    <ul className="text-gray-800 dark:text-gray-300 font-farro-light text-sm md:text-sm space-y-2 list-disc pl-5"
        aria-describedby="datos-disponibles">
        {IntroductionData.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);

export const AboutSection = () => (
    <article>
        <h2 className="text-lg dark:text-gray-100 font-medium mt-8" id="about-graduados-up">
            ¿Qué es Graduados UP?
        </h2>
        <p className="font-farro-light text-sm md:text-base text-gray-600 dark:text-gray-300"
            aria-describedby="about-graduados-up">
            Graduados UP es un proyecto que busca facilitar la gestión de graduados de la Universidad del Pacífico,
            proporcionando una API que permite acceder a datos detallados sobre los graduados, sus facultades,
            carreras y campus.
        </p>
    </article>
);

export const AvailableDataSection = () => (
    <article className='bg-gray-100 dark:bg-slate-900 mx-4 my-8 p-4 md:p-8 rounded-3xl border border-gray-300 dark:border-green-500'
        aria-labelledby="datos-disponibles">
        <h3 className="text-lg dark:text-gray-100 font-medium pb-2" id="datos-disponibles">
            ¿Qué datos puedes ver?
        </h3>
        <DataList />
    </article>
);