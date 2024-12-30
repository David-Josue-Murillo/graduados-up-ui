import SideBar from "../components/SideBar";
import DocsHub from "../components/DocsHub";
import { useDocumentationRefs } from "../hooks/useDocumentationRefs";
import 'aos/dist/aos.css';

const Documentation = () => {
    const { refs, scrollToSection } = useDocumentationRefs();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-gray-950 font-farro">
            <div className="flex gap-4 pt-16 md:pt-24">
                <SideBar
                    onNavigate={scrollToSection}
                    refs={refs}
                />
                <DocsHub refs={refs} />
            </div>
        </div>
    );
};

export default Documentation;