import EndpointsSection from "./doc/EndpointsSection"
import GetStartedSection from "./doc/GetStartedSection"
import IntroductionSection from "./doc/IntroductionSection"

const DocsHub = ({refs}) => {
    return (
        <main className="w-full md:w-8/12 md:ml-64 px-8" aria-labelledby='page-title' data-aos='fade-up'>
            <IntroductionSection 
                introRef={refs.introRef}
                whatIsRef={refs.whatIsRef}
            />

            <section ref={refs.startRef}>
                <GetStartedSection 
                    urlBaseRef={refs.urlBaseRef}
                    availableRoutesRef={refs.availableRoutesRef}
                    paginationRef={refs.paginationRef}
                />
            </section>

            <section ref={refs.endpointRef}>
                <EndpointsSection
                    graduatesRef={refs.graduatesRef}
                    careersRef={refs.careersRef}
                    facultiesRef={refs.facultiesRef}
                    campusRef={refs.campusRef}
                />
            </section>
        </main>
    )
}

export default DocsHub

