import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import "../../sass/style.scss";
import BigBtns from "../BigBtns";

const Chart = () => {
  const data = [
    { current: 9 },
    { current: 4 },
    { current: 6 },
    { current: 5 },
    { current: 8 },
    { current: 10 },
  ];
  return (
    <>
      <section className="chart">
        <div className="leg">
          <ul>
            <li>
              <p>Lower:</p>
              <p>$4.895</p>
            </li>
            <li>
              <p>Higher:</p>
              <p>$6.857</p>
            </li>
          </ul>
        </div>
        <div className="data">
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart
              width={200}
              height={150}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
              }}
            >
              <Area
                type="monotone"
                dataKey="current"
                stroke="#FA9C21"
                fill="#fff7ee"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="dataRes">
            <p>1 BTC = </p>
            <p>$5.483</p>
          </div>
        </div>
      </section>
      <BigBtns />
    </>
  );
};

export default Chart;
