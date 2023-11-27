import React from "react";
import "../../../sass/style.scss";
import { ReactComponent as Money } from "../../../Assets/icons/money.svg";

const Btn = ({ action, title }) => {
  return (
    <div className="btn">
      <span className={action}>
        <Money />
      </span>
      <p>{title}</p>
    </div>
  );
};

export default Btn;
