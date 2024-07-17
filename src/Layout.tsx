import { Outlet } from "react-router-dom";
import Sidebar from './sidenav/Sidebar.tsx';
import Topbar from "./topbar/Topbar.tsx";
import './App.css';
import React, { Component } from "react";

type LayoutProps = {};
type LayoutState = {
    showMenu: boolean;
};

class Layout extends Component<LayoutProps, LayoutState> {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
        };
    }

    toggleMenu = () => {
        if (window.innerWidth <= 1200) {
            this.setState({ showMenu: !this.state.showMenu});
        }
    }

    render() {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1200) {
                this.setState({ showMenu: false });
            }
        });
    
        return (
            <div className="container">
                <Topbar onClick={this.toggleMenu} showMenu={this.state.showMenu} />
                <Sidebar toggleMenu={this.toggleMenu} show={this.state.showMenu} />
                <div className={this.state.showMenu ? "main hidden" : "main"}>
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default Layout;