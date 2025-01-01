const TextSection = ({ title, content }) => (
    <section className="lg:px-12">
        <h1 className="text-green-600 text-center text-3xl font-farro-bold font-bold">
            {title}
        </h1>
        {Array.isArray(content) ? (
            content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-sm md:text-md font-farro dark:text-gray-300 mt-4">
                    {paragraph}
                </p>
            ))
        ) : (
            <p className="text-gray-700 dark:text-gray-300 mt-4">{content}</p>
        )}
    </section>
);

export default TextSection;