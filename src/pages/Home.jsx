import GraduatesSection from "../components/GraduatesSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const Home = ({click, handleClick, handleChangeTheme, theme}) => {
    return (
        <>
            <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-farro">
                <Header 
                    click={click}
                    handleClick={handleClick}
                    handleChangeTheme={handleChangeTheme}
                    theme={theme}
                />
                
                <main>
                    <HeroSection
                        click={click}
                        theme={theme}
                    />  

                    {/* Info Section */}
                    <GraduatesSection />
                </main>
            </div>
        </>
    );
};

export default Home;
