import { memo } from 'react'

const ProfileSections = memo(({ image, title, description }) => (
    <section className="px-12 mt-12 flex gap-4">
        <div className="w-3/6">
            <img
                src={image}
                alt="Profile"
                className="w-44 h-44 rounded-full object-cover"
                loading="lazy"
            />
        </div>
        <div className="my-auto">
            <h1 className="text-green-600 text-2xl font-farro-bold font-bold">
                {title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-4">
                {description}
            </p>
        </div>
    </section>
));

export default ProfileSections
