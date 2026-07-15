import React, {useState, useEffect} from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Orders = () => {
  

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try{
        const orderRes = await fetch(process.env.REACT_APP_GETORDER,
          {
            credentials: "include"
          }
        );
        if(!orderRes.ok){
          throw new Error("Error getting the orders");
        }
        const orderJson = await orderRes.json();

        setOrders(orderJson.orders);

      }
      catch(err){
        console.log(err.message);
        setIsError(true);
      }
      finally{
        setIsLoading(false);
      }
    }

    fetchOrders()
  }, [])

  if(isLoading){
      return(
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
              <CircularProgress />
            </div>
      )
    }
  
    if(isError){
      return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
          <p style = {{textAlign: "center"}}>Error getting the Orders data!</p>
        </div>
      )
    }

    if(!isLoading && !isError && orders.length === 0){
      return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
          <p style = {{textAlign: "center"}}>No Orders till now!</p>
        </div>
      )
    }

  return (
    <>
  <h3 className="title">Orders ({orders.length})</h3>

  <div className="order-table">
    <table>
      <tr>
        <th>Instrument</th>
        <th>Type</th>
        <th>Product</th>
        <th>Qty.</th>
        <th>Price</th>
        <th>Status</th>
        <th>Date</th>
        <th>Time</th>
      </tr>

      {orders.map((order) => {
        const date = new Date(order.createdAt);

        return (
          <tr key={order._id}>
            <td>{order.symbol}</td>
            <td>{order.transactionType}</td>
            <td>{order.product}</td>
            <td>{order.quantity}</td>
            <td>{order.price.toFixed(2)}</td>
            <td>{order.status}</td>
            <td>
              {date.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </td>
            <td>
              {date.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
          </tr>
        );
      })}
    </table>
  </div>

  <div className="row"></div>
</>
  );
};

export default Orders;