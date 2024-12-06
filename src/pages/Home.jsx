import React from "react";
import Header from "../components/Header";
import Navbar from "../components/headerComponents/Navbar";
import HeroSection from "../components/HeroSection";

const Home = ({handleChangeTheme, theme}) => {
    return (
        <>
            <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-farro">
                <Header 
                    handleChangeTheme={handleChangeTheme}
                    theme={theme}
                />

                <HeroSection />
            </div>
        </>
    );
};

export default Home;
