import SectionHeader from './SectionHeader'
import BaseUrlSection from './BaseUrlSection';
import AvailableRoutes from './AvailableRoutes';
import ResponseSection from './ResponseSection';
import PaginationSection from './PaginationSection';

const GetStartedSection = ({urlBaseRef, availableRoutesRef, paginationRef}) => {
    return (
        <section className="my-16" aria-labelledby="getting-started">
            <SectionHeader
                id="empezar"
                title="Empezar"
                description="Para empezar a utilizar la RESTful API de Graduados UP, debes de conocer las distintas rutas."
            />
            <BaseUrlSection 
                urlBaseRef={urlBaseRef}
            />
            <AvailableRoutes 
                availableRoutesRef={availableRoutesRef}
            />
            <ResponseSection />
            <PaginationSection 
                paginationRef={paginationRef}
            />
        </section>
    )
}

export default GetStartedSection
