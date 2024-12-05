import { useEffect, useState } from "react";
import Home from "./pages/Home"

function App() {

    const [theme, setTheme] = useState(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    })

    useEffect(() => {
        if(theme === 'dark') {
            document.querySelector("html").classList.add('dark');
        } else {
            document.querySelector("html").classList.remove('dark');
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(preTheme => preTheme === 'dark' ? 'light' : 'dark');
    }

    return (
        <>
            <Home 
                theme={theme}
                handleChangeTheme={handleChangeTheme}
            />
        </>
    )
}

export default App
