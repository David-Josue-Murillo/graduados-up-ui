import { useEffect, useState } from "react";
import Home from "./pages/Home"

function App() {

    const [click, setClick] = useState(false);
    const [theme, setTheme] = useState('light');

    const handleClick = () => setClick(!click);

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector("html").classList.add('dark');
        } else {
            document.querySelector("html").classList.remove('dark');
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            <Home
                click={click}
                handleClick={handleClick}  
                handleChangeTheme={handleChangeTheme}
                theme={theme}
            />
        </>
    )
}

export default App
