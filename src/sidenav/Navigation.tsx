import { Link } from "react-router-dom";
import React, { Component } from "react";

type SectionSelectorProps = {
    value: string;
    path: string;
    selected: boolean;
    onClick: Function;
};
type SectionSelectorState = {};

class SectionSelector extends Component<SectionSelectorProps, SectionSelectorState> {
    constructor(props) {
        super(props);
    }

    render() {
        return <Link id={this.props.value.toLowerCase()} to={this.props.path} className={this.props.selected ? "navigation-button selected" : "navigation-button"} onClick={() => this.props.onClick(this.props.path.slice(1))}>{this.props.value}</Link>;
    }
    
}

type NavigationProps = {
    closeSidebar: Function;
};
type NavigationState = {
    selectedSection: string;
};

class Navigation extends Component<NavigationProps, NavigationState> {
    constructor(props) {
        super(props);

        this.state = {
            selectedSection: window.location.href.split("/")[window.location.href.split("/").length - 1],
        };
    }

    handleClick = path => {
        this.props.closeSidebar();
        this.setState({ selectedSection: path });
    }
    
    render() {
        return (
            <nav className='navigation-bar'>
                <SectionSelector value="Home" path="/" selected={this.state.selectedSection === ""} onClick={this.handleClick} />
                <SectionSelector value="Research" path="/research" selected={this.state.selectedSection === "research"} onClick={this.handleClick} />
                <SectionSelector value="Teaching" path="/teaching" selected={this.state.selectedSection === "teaching"} onClick={this.handleClick}/>
                <SectionSelector value="Projects" path="/projects" selected={this.state.selectedSection === "projects"} onClick={this.handleClick}/>
            </nav>
        );
    }
}

export default Navigation;