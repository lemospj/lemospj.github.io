import Photo from "./Photo.tsx";
import Navigation from "./Navigation.tsx";
import React, { Component } from "react";

type SidebarProps = {
  toggleMenu: Function;
  show: boolean;
};
type SidebarState = {};

class Sidebar extends Component<SidebarProps, SidebarState> {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className={this.props.show ? 'sidenav visible' : 'sidenav'}>
          <Photo />
          <Navigation  closeSidebar={this.props.toggleMenu} />
        </div>
      );
    }
}

export default Sidebar;