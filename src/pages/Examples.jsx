import Header from "../components/Header";
import Footer from "../components/Footer";


const Examples = ({ click, handleClick, handleChangeTheme, theme }) => {
    return (
        <>
            <div>
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

export default Examples
