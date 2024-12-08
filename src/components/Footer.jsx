import React from "react";
import logo from "../assets/main.png";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-gray-900 text-white py-2 mt-16 font-farro-light">
            <div className="mx-auto">
                {/* Sección principal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                        <h1 className="text-lg font-bold text-green-500">Graduados UP</h1> 
                        <img src={logo} alt="Graduados UP Logo" className="w-20 h-20 m-auto" />
                    </div>

                    {/* Navegación */}
                    
                    <div className="m-auto">
                        <p className="text-sm font-extralight">
                            Creado por David Murillo, Estudiante de la Universidad de Panamá. CRUV Veraguas. LIGEE 2024
                        </p>
                    </div>
                    

                    {/* Redes sociales */}
                    <div className="m-auto">
                        <h3 className="text-lg font-bold mb-2">Mis redes sociales</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="hover:text-green-400 transition-colors"
                                aria-label="Twitter"
                            >
                                <FaXTwitter />
                            </a>
                            <a
                                href="#"
                                className="hover:text-green-400 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="#"
                                className="hover:text-green-400 transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
