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
            <p className={stock.isDown ? "down": "up"}>{stock.name}</p>
            <div className="itemInfo">
                <span className="percent" style = {{marginRight: "5px"}}>{stock.percent}</span>
                {stock.isDown?
                    <KeyboardArrowDown style = {{marginRight: "5px"}}/>:
                    <KeyboardArrowUp style = {{marginRight: "5px"}}/>
                }
                <span className="price" style = {{marginRight: "5px"}}>{stock.price}</span>
            </div>

            {showListItems && <WatchListAction />}
        </li>
    )
}

export default WatchListItem;
