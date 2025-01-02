import GitHubIcons from "../../../components/icons/GitHubIcons";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";

const HeroSection = ({theme}) => {
    return (
        <section className="flex flex-col md:w-10/12 lg:w-8/12 m-auto items-center text-center mt-12 px-4" data-aos="fade-up">
            <HeroTitle />
            <HeroSubtitle />

            <div className="flex flex-wrap justify-center gap-4 mt-10 text-xs md:text-sm md:mt-10">
                <Link to='/documentation'>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-md shadow hover:bg-green-700">
                            Get Started
                    </button>
                </Link> 
                
                <a
                    href="https://github.com/David-Josue-Murillo/graduadosup-api"
                    className="flex border border-gray-300 px-4 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:border-green-700 hover:text-green-700"
                >
                    <GitHubIcons 
                        theme={theme}
                    />
                    <span className="pl-2 pt-1">GitHub</span>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
