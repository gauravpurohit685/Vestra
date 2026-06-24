import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./src/components/landing/home/HomePage";
import AboutPage from "./src/components/landing/about/AboutPage";
import ProductPage from "./src/components/landing/products/ProductPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProductPage />);