import { useCallback } from "react";

export const useGraduatesFiler = () => {
    const [activeFilter, setActiveFilter] = useState(null);

    const handleFilter = useCallback((value) => {
        setActiveFilter(value);
    }, []);

    return { activeFilter, handleFilter };
}