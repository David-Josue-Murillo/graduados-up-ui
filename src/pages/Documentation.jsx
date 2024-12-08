import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Documentation = ({ click, handleClick, handleChangeTheme, theme }) => {
    return (
        <>
            <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-farro">
                <Header
                    click={click}
                    handleClick={handleClick}
                    handleChangeTheme={handleChangeTheme}
                    theme={theme}
                />

                <div className="flex gap-4">
                    <SideBar />
                    
                </div>
            </div>
        </>
    )
}

export default Documentation
