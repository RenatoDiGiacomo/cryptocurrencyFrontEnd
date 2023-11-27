import React from "react";
import "../../sass/style.scss";
import { ReactComponent as Wallet } from "../../Assets/icons/wallet.svg";
import { ReactComponent as Compass } from "../../Assets/icons/compass.svg";
import { ReactComponent as Bell } from "../../Assets/icons/bell.svg";
import { ReactComponent as Settings } from "../../Assets/icons/settings.svg";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li className="active">
          <Wallet width="26px" height="auto"/>
        </li>
        <li className="">
          <Compass width="26px" height="auto"/>
        </li>
        <li className="">
          <Bell width="26px" height="auto"/>
        </li>
        <li className="">
          <Settings width="26px" height="auto"/>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
