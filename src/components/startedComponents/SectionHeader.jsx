import React from 'react';

const SectionHeader = ({ id, title, description }) => (
    <section id={id} className="my-8">
        <h2 className="text-3xl my-2 font-semibold">{title}</h2>
        <p className="text-gray-800">{description}</p>
    </section>
);

export default SectionHeader;
