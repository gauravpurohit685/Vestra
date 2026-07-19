import React, {useState} from "react";

import {Link} from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const Menu = () => {

  const [menuActive, setMenuActive] = useState(0);

  const [isDropdownClicked, setIsDropdownClicked] = useState(false);


  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const handleMenuChange = (prop) => {
    setMenuActive(prop);
  }

  const handleDropdownClick = () => {
    setIsDropdownClicked(!isDropdownClicked);
  }

  return (
    <div className="menu-container">
      <img src="logo.png" alt = "vestra" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li >
            <Link to = "/" className = {menuActive === 0 ? activeMenuClass: menuClass} style = {{textDecoration: "none"}} onClick = { () => (handleMenuChange(0))}>
              <p>Dashboard</p>
            </Link>
          </li>
          <li >
            <Link to = "/orders" className = {menuActive === 1 ? activeMenuClass: menuClass} style = {{textDecoration: "none"}} onClick = { () => (handleMenuChange(1))}>
              <p>Orders</p>
            </Link>
          </li>
          <li >
            <Link to = "/holdings" className = {menuActive === 2 ? activeMenuClass: menuClass} style = {{textDecoration: "none"}} onClick = { () => (handleMenuChange(2))}>
              <p>Holdings</p>
            </Link>
          </li>
          <li >
            <Link to = "/positions" className = {menuActive === 3 ? activeMenuClass: menuClass} style = {{textDecoration: "none"}} onClick = { () => (handleMenuChange(3))}>
              <p>Positions</p>
            </Link>
          </li>
          <li >
            <Link to = "/funds" className = {menuActive === 4 ? activeMenuClass: menuClass} style = {{textDecoration: "none"}} onClick = { () => (handleMenuChange(4))}>
              <p>Funds</p>
            </Link>
          </li>
        </ul>
        <hr />
        <Link to = "/profile" className="profile" onClick = {() => {handleDropdownClick(); handleMenuChange(5);}} style={{textDecoration: "none"}}>
          <div className="avatar"><AccountCircleIcon /></div>
          <p className={"username " + (menuActive === 5? activeMenuClass: menuClass)} >Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
