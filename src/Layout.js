import { Outlet } from "react-router-dom";
import Sidebar from './sidenav/Sidebar';
import Topbar from "./topbar/Topbar";
import './App.css';
import { useState } from "react";

function Layout() {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        if (window.innerWidth <= 1200) {
            setShowMenu(!showMenu);
        }
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1200) {
            setShowMenu(false);
        }
    });

    return (
        <div className="container">
            <Topbar onClick={toggleMenu} showMenu={showMenu} />
            <Sidebar toggleMenu={toggleMenu} show={showMenu} />
            <div className={showMenu ? "main hidden" : "main"}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;