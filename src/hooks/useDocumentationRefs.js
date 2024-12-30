import { useMemo } from 'react';

export const useDocumentationRefs = () => {
    const sections = useMemo(() => ([
        'intro',
        'start',
        'endpoint',
        'whatIs',
        'urlBase',
        'availableRoutes',
        'pagination',
        'graduates',
        'careers',
        'faculties',
        'campus'
    ]), []);

    const refs = useMemo(() => {
        return sections.reduce((acc, section) => {
            acc[`${section}Ref`] = { current: null };
            return acc;
        }, {});
    }, [sections]);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return { refs, scrollToSection };
};