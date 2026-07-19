import { Tooltip, Grow } from "@mui/material";

import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";

import { useState } from "react";

const WatchListAction = (props) => {

    const {symbol, setTradeDialog} = props;

    return (
    <div className="actions">
      <div>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={() => setTradeDialog({
            type : "BUY",
            symbol : symbol
          })}>Buy</button>
      
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={() => setTradeDialog({
            type : "SELL",
            symbol : symbol
          })}>Sell</button>
        </Tooltip>
      </div>
    </div>
  );

}

export default WatchListAction;