import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { NavigationProvider } from "./contexts/NavigationContext";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home"
import Documentation from "./pages/Documentation";
import About from "./pages/About/About";

function App() {
    return (
        <ThemeProvider>
            <NavigationProvider>
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/documentation" element={<Documentation />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </NavigationProvider>
        </ThemeProvider>
    )
}

export default App
