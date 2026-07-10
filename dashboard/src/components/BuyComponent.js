import { useState, useContext } from "react";
import WatchListContext from "../context/watchListContext";

const getStockPrice = (watchListData, symbol) => {
  const stock = watchListData.find(
    (stock) => stock.symbol === symbol
  );

  return stock ? stock.currentPrice : 0;
};

const BuyComponent = ({ symbol }) => {

  const { watchListData } = useContext(WatchListContext);

  const price = getStockPrice(watchListData, symbol);

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState("CNC");
  const [isLoading, setIsLoading] = useState(false);

  const handleBuy = async () => {

    if (quantity <= 0) {
      alert("Enter a valid quantity.");
      return;
    }

    const url =
      product === "CNC"
        ? process.env.REACT_APP_BUYHOLDING
        : process.env.REACT_APP_BUYPOSITION;

    try {

      setIsLoading(true);

      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symbol,
          quantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to place order.");
      }

      alert("Order placed successfully!");

    } catch (err) {

      console.error(err);
      alert("Unable to place order.");

    } finally {

      setIsLoading(false);

    }

  };

  return (
    <div
      style={{
        width: "320px",
        padding: "20px",
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >

      <h3 style={{ margin: 0 }}>{symbol}</h3>

      <h2
        style={{
          margin: 0,
          color: "#2e7d32",
        }}
      >
        ₹{price}
      </h2>

      <div>

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          Quantity
        </label>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

      </div>

      <div>

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          Product
        </label>

        <label style={{ marginRight: "20px" }}>
          <input
            type="radio"
            value="MIS"
            checked={product === "MIS"}
            onChange={(e) => setProduct(e.target.value)}
          />
          {" "}MIS
        </label>

        <label>
          <input
            type="radio"
            value="CNC"
            checked={product === "CNC"}
            onChange={(e) => setProduct(e.target.value)}
          />
          {" "}CNC
        </label>

      </div>

      <button
        onClick={handleBuy}
        disabled={isLoading}
        style={{
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          background: "#1976d2",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        {isLoading ? "Placing Order..." : "BUY"}
      </button>

    </div>
  );
};

export default BuyComponent;