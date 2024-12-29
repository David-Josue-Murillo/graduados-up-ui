import Footer from "../components/Footer";
import Header from "../components/Header";
import GraduatesSection from "../components/GraduatesSection";
import HeroSection from "../components/HeroSection";
import { useNavigation } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const Home = () => {

    const { click, handleClick } = useNavigation();
    const { theme, handleChangeTheme } = useTheme();

    return (
        <>
            <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-farro">
                <Header 
                    click={click}
                    handleClick={handleClick}
                    handleChangeTheme={handleChangeTheme}
                    theme={theme}
                />
                
                <main className="pt-28">
                    <HeroSection
                        click={click}
                        theme={theme}
                    />  

                    {/* Info Section */}
                    <section className="mt-24">
                        <GraduatesSection />
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Home;
