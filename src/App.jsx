import { useEffect, useState } from "react";
import Home from "./pages/Home"

function App() {

    const [theme, setTheme] = useState('light');

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
                handleChangeTheme={handleChangeTheme}
                theme={theme}
            />
        </>
    )
}

export default App
