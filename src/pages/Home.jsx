import GraduatesSection from "../components/graduates/GraduatesSection";
import HeroSection from "../components/hero/HeroSection";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigation } from "../contexts/NavigationContext";
    
const Home = () => {

    const { click, setClick } = useNavigation();
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-farro">
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
            </div>
        </>
    );
};

export default Home;
