import React from "react";
import Header from "../components/Header";

const Home = ({handleChangeTheme, theme}) => {
    return (
        <>
            <div className="h-screen w-screen bg-slate-50 dark:bg-gray-950">
                <Header 
                    handleChangeTheme={handleChangeTheme}
                    theme={theme}
                />
            </div>
        </>
    );
};

export default Home;
