import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  let [quarter, setQuarter] = useState(0);
  let [down, setDown] = useState(0);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className="down__button" onClick={() => down <= 3 ? setDown(down + 1) : setDown(1)}>Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button className="quarter__button" onClick={() => quarter <= 3 ? setQuarter(quarter + 1) : setQuarter(1)}>Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
