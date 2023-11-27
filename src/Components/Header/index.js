import React from "react";
import "../../sass/style.scss";
import { ReactComponent as Back } from "../../Assets/icons/backIcon.svg";
import { ReactComponent as Dot } from "../../Assets/icons/dot.svg";
import Collapse from "../Header/Collapse/";
const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <header>
      <div className="backBtn">
        <Back width={12} />
      </div>
      <h1 className="Title">Bitcoint Wallet</h1>
      <div className="dotMenu" onClick={() => setToggle(true)}>
        <Dot width={6} />
      </div>
      <Collapse toggle={toggle} setToggle={setToggle} />
    </header>
  );
};

export default Header;
