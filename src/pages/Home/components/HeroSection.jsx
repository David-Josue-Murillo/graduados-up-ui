import HeroTitle from "./hero/HeroTitle";
import HeroSubtitle from "./hero/HeroSubtitle";
import BtnStarted from "./button/BtnStarted";
import BtnGithub from "./button/BtnGithub";
import 'aos/dist/aos.css';

const HeroSection = ({theme}) => {
    return (
        <section className="flex flex-col md:w-10/12 lg:w-8/12 m-auto items-center text-center mt-12 px-4" data-aos="fade-up">
            <HeroTitle />
            <HeroSubtitle />

            <div className="flex flex-wrap justify-center gap-4 mt-10 text-xs md:text-sm md:mt-10">
                <BtnStarted />
                <BtnGithub theme={theme} />
            </div>
        </section>
    );
};

export default HeroSection;
