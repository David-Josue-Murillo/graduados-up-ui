import Header from "../components/Header";
import Footer from "../components/Footer";


const About = ({ click, handleClick, handleChangeTheme, theme }) => {
    return (
        <>
            <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-farro">
                <Header
                    click={click}
                    handleClick={handleClick}
                    handleChangeTheme={handleChangeTheme}
                    theme={theme}
                />

                <main className="container mx-auto px-6 py-12">
                    
                </main>
            </div>
        </>
    )
}

export default About
