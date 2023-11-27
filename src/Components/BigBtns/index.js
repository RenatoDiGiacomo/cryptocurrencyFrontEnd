import React from "react";
import Btn from "./Btn/Index";
import "../../sass/style.scss";

const BigBtns = () => {
  return (
    <section className="bigBtns">
      <Btn action={"blue"} title={"Buy BTC"} />
      <Btn action={"pink"} title={"Sell BTC"} />
    </section>
  );
};

export default BigBtns;
