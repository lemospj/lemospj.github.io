import Photo from "./Photo";
import Navigation from "./Navigation";

function Sidebar({ toggleMenu, show }) {
    return (
      <div className={show ? 'sidenav visible' : 'sidenav'}>
        <Photo />
        <Navigation  closeSidebar={toggleMenu} />
      </div>
    );
  }

export default Sidebar;