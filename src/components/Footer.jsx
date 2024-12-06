import React from "react";
import logo from "../assets/main.png";

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
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 2a9.29 9.29 0 0 1-2.91 1.11 4.52 4.52 0 0 0-7.86 3.08A12.94 12.94 0 0 1 1.64 1.15a4.52 4.52 0 0 0 1.4 6.06 4.41 4.41 0 0 1-2-.56v.05a4.52 4.52 0 0 0 3.63 4.42 4.52 4.52 0 0 1-2 .07 4.52 4.52 0 0 0 4.21 3.14A9 9 0 0 1 0 19.54a12.93 12.93 0 0 0 7 2.06A12.89 12.89 0 0 0 20 6.29c0-.2 0-.39-.01-.58A9.24 9.24 0 0 0 23 3z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="hover:text-green-400 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="hover:text-green-400 transition-colors"
                                aria-label="GitHub"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 2a10 10 0 0 0-3.17 19.49c.5.09.68-.22.68-.49v-1.7c-2.78.61-3.37-1.34-3.37-1.34a2.65 2.65 0 0 0-1.1-1.45c-.9-.61.07-.6.07-.6a2.11 2.11 0 0 1 1.54 1.04 2.13 2.13 0 0 0 2.92.83 2.12 2.12 0 0 1 .63-1.33c-2.22-.25-4.56-1.11-4.56-4.94a3.88 3.88 0 0 1 1-2.69 3.63 3.63 0 0 1 .1-2.65s.84-.27 2.75 1a9.35 9.35 0 0 1 5 0c1.91-1.33 2.75-1 2.75-1a3.63 3.63 0 0 1 .1 2.65 3.88 3.88 0 0 1 1 2.69c0 3.84-2.34 4.69-4.57 4.93a2.38 2.38 0 0 1 .68 1.84v2.73c0 .27.18.59.69.49A10 10 0 0 0 12 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
