import Header from "../components/Header";
import Footer from "../components/Footer";


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
            </div>
        </>
    )
}

export default Documentation
