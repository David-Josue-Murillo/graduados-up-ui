import { navigationItems } from "../constants/navigationItems";
import NavItem from "./sidebar/NavItem";

const SideBar = ({onNavigate, refs}) => {
    return (
        <aside className='w-0 md:w-64 p-0 md:p-4 rounded-lg hidden md:flex fixed' data-aos='fade-right'>
            <ul className="space-y-4">
                {navigationItems.map((navItem) => (
                    <NavItem
                        key={navItem.name}
                        item={navItem}
                        refs={refs}
                        onNavigate={onNavigate}
                    />
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;
