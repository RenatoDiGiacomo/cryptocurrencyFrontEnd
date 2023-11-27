import React from "react";
import "../../sass/style.scss";
import { ReactComponent as Bitcoin } from "../../Assets/icons/bitcoin.svg";
import { ReactComponent as DownArrow } from "../../Assets/icons/downarrow.svg";

const Wallet = () => {
  const [dropTimer, setDropTimer] = React.useState(false);
  const [selectTime, setSelectTime] = React.useState(1);
  const handleSelect = (e) => {
    setSelectTime(e);
  };

  return (
    <>
      <section className="sectionData">
        <div className="topTitle">
          <div className="title">
            <Bitcoin width={31} />
            <p>Bitcoin</p>
          </div>
          <p>BTC</p>
        </div>
        <div className="value">
          <p>3.529020</p>
          <p>BTC</p>
        </div>
        <div className="valuePrevData">
          <p>$19.153 USD</p>
          <div className="tag">-2.32%</div>
        </div>
        <div className={dropTimer?"icon on":"icon off"} onClick={() => setDropTimer(!dropTimer)}>
          <DownArrow />
        </div>
      </section>
      <section
        className={dropTimer ? "timeSelector show" : "timeSelector hidden"}
      >
        <span
          onClick={() => handleSelect(1)}
          className={selectTime === 1 ? "select" : ""}
        >
          Day
        </span>
        <span
          onClick={() => handleSelect(2)}
          className={selectTime === 2 ? "select" : ""}
        >
          Week
        </span>
        <span
          onClick={() => handleSelect(3)}
          className={selectTime === 3 ? "select" : ""}
        >
          Mouth
        </span>
        <span
          onClick={() => handleSelect(4)}
          className={selectTime === 4 ? "select" : ""}
        >
          Year
        </span>
      </section>
    </>
  );
};

export default Wallet;
