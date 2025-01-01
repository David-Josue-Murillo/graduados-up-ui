const ProfileSection = ({ image, title, description }) => (
    <section className="lg:flex lg:px-12 mt-12 gap-4">
        <div className="w-5/6 lg:w-3/6 mx-auto mb-4 md:mb-0">
            <img
                src={image}
                alt="Profile"
                className="w-44 h-44 mx-auto rounded-full object-cover"
                loading="lazy"
            />
        </div>
        <div className="my-auto">
            <h1 className="text-green-600 text-2xl text-center lg:text-start mt-4 lg:mt-0 font-farro-bold font-bold">
                {title}
            </h1>
            <p className="text-gray-700 font-farro dark:text-gray-300 text-sm mt-4">
                {description}
            </p>
        </div>
    </section>
);

export default ProfileSection;