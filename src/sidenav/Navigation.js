import { Link } from "react-router-dom";
import { useState } from "react";

function SectionSelector({ value, path, selected, onClick }) {
    return <Link id={value.toLowerCase()} to={path} className={selected ? "navigation-button selected" : "navigation-button"} onClick={() => onClick(path.slice(1))}>{value}</Link>;
}

function Navigation({ closeSidebar }) {
    const [selectedSection, setSelectedSection] = useState(window.location.href.split("/")[window.location.href.split("/").length - 1]);

    function handleClick(path) {
        closeSidebar();
        setSelectedSection(path);
    }

    return (
        <nav className='navigation-bar'>
            <SectionSelector value="Home" path="/" selected={selectedSection === ""} onClick={handleClick} />
            <SectionSelector value="Research" path="/research" selected={selectedSection === "research"} onClick={handleClick} />
            <SectionSelector value="Teaching" path="/teaching" selected={selectedSection === "teaching"} onClick={handleClick}/>
            <SectionSelector value="Projects" path="/projects" selected={selectedSection === "projects"} onClick={handleClick}/>
        </nav>
    );
}

export default Navigation;