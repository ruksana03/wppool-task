import { NavLink } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
        <NavLink to="/" activeClassName="active">
          <div className="sidebar-item">
            The Index <span className="icon">-</span>
          </div>
        </NavLink>
        <NavLink to="/tab2" activeClassName="active">
          <div className="sidebar-item">
            The Index Tab Two <span className="icon">+</span>
          </div>
        </NavLink>
        <NavLink to="/tab3" activeClassName="active">
          <div className="sidebar-item">
            The Index Tab Three <span className="icon">+</span>
          </div>
        </NavLink>
        <NavLink to="/tab4" activeClassName="active">
          <div className="sidebar-item">
            The Index Tab Four <span className="icon">+</span>
          </div>
        </NavLink>
        <NavLink to="/tab5" activeClassName="active">
          <div className="sidebar-item">
            The Index Tab Five <span className="icon">+</span>
          </div>
        </NavLink>
      </div>
    );
};

export default Sidebar;