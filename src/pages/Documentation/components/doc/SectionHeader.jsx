import React from 'react';

const SectionHeader = ({ id, title, description }) => (
    <section id={id} className="my-8">
        <h2 className="text-green-600 text-4xl font-farro-bold font-bold my-2">{title}</h2>
        <p className="text-sm md:text-base  text-gray-600 dark:text-gray-400">{description}</p>
    </section>
);

export default SectionHeader;
