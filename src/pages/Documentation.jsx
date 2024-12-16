import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import 'aos/dist/aos.css';
import DocsHub from "../components/DocsHub";
import { useRef } from "react";


const Documentation = ({ click, handleClick, handleChangeTheme, theme }) => {

    const [introRef, startRef, endpointRef, whatIsRef, urlBaseRef, availableRoutesRef, paginationRef, graduatesRef, careersRef, facultiesRef, campusRef] = Array(11).fill(null).map(() => useRef(null));


    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-farro">
                <Header
                    click={click}
                    handleClick={handleClick}
                    handleChangeTheme={handleChangeTheme}
                    theme={theme}
                />

                <div className="flex gap-4 pt-24">
                    <SideBar 
                        onNavigate={scrollToSection}
                        refs={{ introRef, startRef, endpointRef, whatIsRef, urlBaseRef, availableRoutesRef, paginationRef, graduatesRef, careersRef, facultiesRef, campusRef }}
                    />

                    <DocsHub 
                        refs={{ introRef, startRef, endpointRef, whatIsRef, urlBaseRef, availableRoutesRef, paginationRef, graduatesRef, careersRef, facultiesRef, campusRef }}
                    />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Documentation
