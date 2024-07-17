import React from "react";

function Topbar({ onClick, showMenu }) {
    return (
        <div className={showMenu ? "grid-container clicked" : "grid-container"} onClick={onClick}>
            <div className="menu-button">
                <div className="menu-button-line"></div>
                <div className="menu-button-line"></div>
                <div className="menu-button-line"></div>
            </div>
            <div className="top-bar-header">Pedro Lemos</div>
        </div>
    )
}

export default Topbar;