import React from "react";
import GitHubIcons from "./icons/GitHubIcons";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = ({theme}) => {
    return (
        <section className="flex flex-col w-8/12 m-auto items-center text-center mt-12 px-4" data-aos="fade-up">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-farro-bold font-extrabold leading-tight text-gray-800 dark:text-slate-50">
                Cantidad de graduados <br /> por año en la <br className="hidden sm:block" />
                <span className="text-green-700">Universidad de Panamá</span>
            </h1>


            {/* Subtitle */}
            <p className="text-gray-600 dark:dark:text-slate-500 text-lg md:text-xl mt-4">
                Esta es una API RESTful que permite gestionar datos relacionados con
                graduados universitarios de la Universidad de Panamá.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
                <button className="bg-green-600 text-white px-6 py-2 rounded-md shadow hover:bg-green-700">
                    Get Started
                </button>
                
                <a
                    href="https://github.com/David-Josue-Murillo/graduados-up-ui"
                    className="flex border border-gray-300 px-4 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:border-green-700 hover:text-green-700"
                >
                    <GitHubIcons 
                        theme={theme}
                    />
                    <span className="pl-2">GitHub</span>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
