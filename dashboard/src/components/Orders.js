import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  

  const [orders, setOrder] = useState([]);

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

        setOrder(orderJson.orders);
      }
      catch(err){
        console.log(err.message);
      }
    }

    fetchOrders()
  }, [])

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
