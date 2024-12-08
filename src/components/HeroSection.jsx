import React from "react";
import GitHubIcons from "./icons/GitHubIcons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const HeroSection = ({theme}) => {
    return (
        <section className="flex flex-col md:w-10/12 lg:w-8/12 m-auto items-center text-center mt-12 px-4" data-aos="fade-up">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-farro-bold font-extrabold leading-tight text-green-700 dark:text-green-600">
                Cantidad de graduados <br /> por año en la <br className="hidden sm:block" />
                <span className="text-yellow-600">Universidad de Panamá</span>
            </h1>


            {/* Subtitle */}
            <p className="text-gray-600 dark:dark:text-slate-500 text-sm md:text-base lg:text-xl mt-6">
                Esta es una API RESTful que permite gestionar datos relacionados con
                graduados universitarios de la Universidad de Panamá.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10 text-xs md:text-sm md:mt-10">
                <Link to='/documentation'>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-md shadow hover:bg-green-700">
                            Get Started
                    </button>
                </Link> 
                
                <a
                    href="https://github.com/David-Josue-Murillo/graduados-up-ui"
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
