import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./src/components/landing/home/HomePage";
import AboutPage from "./src/components/landing/about/AboutPage";
import ProductPage from "./src/components/landing/products/ProductPage";
import PricingPage from "./src/components/landing/pricing/PricingPage";
import SupportPage from "./src/components/landing/support/SupportPage";
import Signup from "./src/components/landing/signup/Signup";
import Login from "./src/components/landing/signup/Login";



const Root = () => {
    const [loadState, setLoadState] = useState(true);

    useEffect(() => {
        verifyToken();
    }, []);


    const verifyToken = async () => {
        try{
            const msg = await fetch(process.env.VERIFY_API, {
                credentials: "include"
            });


            if(!msg.ok){
                const data = await msg.json();
                throw new Error(data.message);
            }

            const json = await msg.json();

            console.log("User is logged in!");

            window.location.replace(process.env.DASHBOARD_URL);
        }

        catch(err){
            console.log("Some error occured while verifying!");
            console.log("User is logged out!");
        }

        finally{
            setTimeout(() => {
                setLoadState(false);
            }, 500)
        }
    }

    if(loadState){
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
        )
    }

    return( 
        <RouterProvider router={appRouter} />
    )
}


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
root.render(<Root />);
