import ChartComponent from "../../../components/ChartComponent";
import { FilterProvider } from "../../../contexts/FilterContext";
import ChartPanel from "./sections/ChartPanel";
import FilterPanel from "./sections/FilterPanel";
import InfoPanel from "./sections/InfoPanel";
import SectionHeader from "./sections/SectionHeader";

const GraduatesSection = () => {
    return (
        <FilterProvider>
            <div className="container mx-auto px-4">
                <SectionHeader />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-6 mt-12">
                    <FilterPanel />
                    <ChartPanel />
                </div>
                <InfoPanel />
            </div>
        </FilterProvider>
    );
};

export default GraduatesSection;
