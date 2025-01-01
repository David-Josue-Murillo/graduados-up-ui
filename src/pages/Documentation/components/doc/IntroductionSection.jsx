import SectionHeader from "./SectionHeader";
import { AboutSection, AvailableDataSection } from "../../constants/IntroductionData.jsx";

const IntroductionSection = ({ introRef, whatIsRef }) => {
    return (
        <section ref={introRef} aria-labelledby="introduction">
            <SectionHeader
                id="introduccion"
                title="Introducción"
                description="¡Bienvenido a la documentación de Graduados UP! Esta página te dará una introducción sobre que trata esta RESTful API."
            />
            <div ref={whatIsRef}>
                <AboutSection />
                <AvailableDataSection />
            </div>
        </section>
    );
}

export default IntroductionSection;
