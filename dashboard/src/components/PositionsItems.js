import { useState, useContext } from "react";
import WatchListContext from "../context/watchListContext";
import PositionActions from "./PositionActions";


const getStockDetails = (watchListData, symbol) => {
  const stock = watchListData.find(
    (stock) => stock.symbol === symbol
  );

  if (!stock) {
    return {
      currentPrice: 0,
      percentChange: 0,
    };
  }

  return {
    currentPrice: stock.currentPrice,
    percentChange: stock.percentChange,
  };
};

const PositionsItem = ({stocks}) => {

    const {watchListData} = useContext(WatchListContext);
    
    const [showListItems, setShowListItems] = useState(false);

    const { currentPrice, percentChange } = getStockDetails(
        watchListData,
        stocks.symbol
    );

    const currPrice = currentPrice;
    const totPrice = currPrice * stocks.quantity;
    const isProfit = currPrice - (stocks.averagePrice) >= 0.0;
    const profClass = isProfit? "profit" : "loss";
    const dayClass = percentChange < 0 ? "loss": "profit"    
    
    const handleMouseEnter = () => {
        setShowListItems(true);
    }

    const handleMouseLeave = () => {
        setShowListItems(false);
    }

    return (
        <>
            <tr>
                <td>{stocks.product}</td>
                <td>{stocks.symbol}</td>
                <td>{stocks.quantity}</td>
                <td>{stocks.averagePrice.toFixed(2)}</td>
                <td>{currPrice.toFixed(2)}</td>
                <td className={profClass}>
                    {(totPrice - stocks.averagePrice * stocks.quantity).toFixed(2)}
                </td>
                <td className={dayClass}>
                {percentChange.toFixed(2)}%
                </td>
            </tr>

            {setShowListItems && <PositionActions id = {stocks._id} price = {currPrice}/>}
        </>
    )
}

export default PositionsItem;
