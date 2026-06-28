import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./src/components/landing/home/HomePage";
import AboutPage from "./src/components/landing/about/AboutPage";
import ProductPage from "./src/components/landing/products/ProductPage";
import PricingPage from "./src/components/landing/pricing/PricingPage";
import SupportPage from "./src/components/landing/support/SupportPage";
import Signup from "./src/components/landing/signup/Signup";
import Login from "./src/components/landing/signup/Login";


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/about",
        element: <AboutPage />
    },
    {
        path: "/product",
        element: <ProductPage />
    },
    {
        path: "/pricing",
        element: <PricingPage />
    },
    {
        path: "/support",
        element: <SupportPage />
    },
    {
        path: "/signup",
        element :<Signup />
    },
    {
        path: "/login",
        element: <Login />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter} />);
