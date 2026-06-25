import React, {useState} from "react";

import {Link} from "react-router-dom";


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
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li >
            <Link to = "/" className = {menuActive === 0 ? activeMenuClass: menuClass} style = {{textDecoration: "none"}} onClick = { () => (handleMenuChange(0))}>
              <p>Dashboard</p>
            </Link>
          </li>
          <li >
            <Link to = "/orders" className = {menuActive === 1 ? activeMenuClass: menuClass} style = {{textDecoration: "none"}}onClick = { () => (handleMenuChange(1))}>
              <p>Orders</p>
            </Link>
          </li>
          <li >
            <Link to = "/holdings" className = {menuActive === 2 ? activeMenuClass: menuClass} style = {{textDecoration: "none"}}onClick = { () => (handleMenuChange(2))}>
              <p>Holdings</p>
            </Link>
          </li>
          <li >
            <Link to = "/positions" className = {menuActive === 3 ? activeMenuClass: menuClass} style = {{textDecoration: "none"}}onClick = { () => (handleMenuChange(3))}>
              <p>Positions</p>
            </Link>
          </li>
          <li >
            <Link to = "/funds" className = {menuActive === 4 ? activeMenuClass: menuClass} style = {{textDecoration: "none"}}onClick = { () => (handleMenuChange(4))}>
              <p>Funds</p>
            </Link>
          </li>
          <li >
            <Link to = "/apps" className = {menuActive === 4 ? activeMenuClass: menuClass} style = {{textDecoration: "none"}}onClick = { () => (handleMenuChange(5))}>
              <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick = {() => {handleDropdownClick()}}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
