import React from "react";

import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";


function SideBar () {
    return(
  <div className={classNames("sidebar")}>
   
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/terkini"}>
                Terkini
          </NavLink>
          <NavLink tag={Link} to={"/disarankan"}>
                Disarankan
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
    )
};

export default SideBar;
