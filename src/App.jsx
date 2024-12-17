import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Documentation from "./pages/Documentation";
import About from "./pages/About";

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
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                click={click}
                                handleClick={handleClick}
                                handleChangeTheme={handleChangeTheme}
                                theme={theme}
                            />
                        }
                    />

                    <Route
                        path="/documentation"
                        element={
                            <Documentation
                                click={click}
                                handleClick={handleClick}
                                handleChangeTheme={handleChangeTheme}
                                theme={theme}
                            />
                        }
                    />

                    <Route
                        path="/about"
                        element={
                            <About
                                click={click}
                                handleClick={handleClick}
                                handleChangeTheme={handleChangeTheme}
                                theme={theme}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
