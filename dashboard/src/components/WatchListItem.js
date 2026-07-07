import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";
import { useState } from "react";

import WatchListAction from "./WatchListAction";

const WatchListItem = ({stock}) => {
    
    const [showListItems, setShowListItems] = useState(false);
    
    const handleMouseEnter = () => {
        setShowListItems(true);
    }

    const handleMouseLeave = () => {
        setShowListItems(false);
    }

    return (
        <li className="item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className={(stock.percentChange < 0) ? "down": "up"}>{stock.symbol}</p>
            <div className="itemInfo">
                <span className="percent" style = {{marginRight: "5px"}}>
                    {stock.percentChange > 0 ? "+" : "-"}
                    {stock.percentChange.toFixed(2)}%
                </span>
                {(stock.percentChange < 0)?
                    <KeyboardArrowDown style = {{marginRight: "5px"}}/>:
                    <KeyboardArrowUp style = {{marginRight: "5px"}}/>
                }
                <span className="price" style = {{marginRight: "5px"}}>{stock.currentPrice.toFixed(2)}</span>
            </div>

            {showListItems && <WatchListAction />}
        </li>
    )
}

export default WatchListItem;
