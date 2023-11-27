import React from "react";
import "../../../sass/style.scss";
import { ReactComponent as Edit } from "../../../Assets/icons/edit.svg";
import { ReactComponent as Courier } from "../../../Assets/icons/couirer.svg";
import { ReactComponent as Share } from "../../../Assets/icons/share.svg";
import { ReactComponent as Remove } from "../../../Assets/icons/remove.svg";

const Collapse = ({ toggle, setToggle }) => {
  return (
    <div
      className={toggle ? "collapseOverlay show" : "collapseOverlay hidden"}
      onClick={() => setToggle(false)}
    >
      <ul className="collapseContent" onClick={(e) => e.stopPropagation()}>
        <li onClick={() => console.log("Edit")}>
          <p>Edit</p>
          <Edit />
        </li>
        <li onClick={() => console.log("Courier Info")}>
          <p>Courier Info</p>
          <Courier />
        </li>
        <li onClick={() => console.log("Share")}>
          <p>Share</p>
          <Share />
        </li>
        <li onClick={() => console.log("Remove")}>
          <p>Remove</p>
          <Remove />
        </li>
      </ul>
    </div>
  );
};

export default Collapse;
