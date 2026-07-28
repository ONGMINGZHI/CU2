import { NavLink } from "react-router";

function Navigation() {
  const getNavLinkClass = ({ isActive }) =>
    `nav-link d-flex align-items-center ${isActive ? "active" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          My Notes App
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="/">
                <i className="bi bi-house me-2"></i>
                <span>ALL NOTES</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="/add">
                <i className="bi bi-plus-lg me-1"></i>
                <span>ADD NOTE</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={getNavLinkClass} to="/categories">
                <i className="fa-solid fa-shapes me-1"></i>
                <span>CATEGORIES</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;