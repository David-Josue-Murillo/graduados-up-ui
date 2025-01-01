// pages/About/About.jsx
import mephoto from '../../assets/img/me.jpg';
import { ABOUT_CONTENT } from './constants';
import TextSection from './components/TextSection';
import ProfileSection from './components/ProfileSections';

const About = () => {
  const { introContent, profileDescription } = ABOUT_CONTENT;

  return (
      <main className="mx-2 md:mx-16 xl:container lg:mx-auto px-6 py-12 mt-20">
        <TextSection
          title="¿Qué es Lorem Ipsum?"
          content={introContent}
        />
        <ProfileSection
          image={mephoto}
          title="¿Quien Soy?"
          description={profileDescription}
        />
      </main>
  );
};

export default About;