import React from "react";
import { NavLink } from "react-router-dom";

// import styles from "./navbar.styles.css";
import "./navbar.styles.css";

const styles = {
  navbar: {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  },
  navlink: {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  },
};
function NavBar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <NavLink className="Nav-logo" exact activeClassName="active" to="/">
          iHave ToDo
        </NavLink>
        {/* <NavLink className="Nav-link" exact activeClassName="active" to="/">
          Today's
        </NavLink> */}
        <NavLink
          className="Nav-link"
          activeClassName="active"
          to="/achievements"
        >
          Achievements
        </NavLink>
        <NavLink className="Nav-link" activeClassName="active" to="/milestones">
          Milestones
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
