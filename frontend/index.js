import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./src/components/landing/home/HomePage";
import AboutPage from "./src/components/landing/about/AboutPage";
import PricingPage from "./src/components/landing/pricing/PricingPage";
import Signup from "./src/components/landing/signup/Signup";
import Login from "./src/components/landing/signup/Login";
import Varsity from "./src/components/varsity/Varsity";



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
        path: "/pricing",
        element: <PricingPage />
    },
    {
        path: "/signup",
        element :<Signup />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/varsity",
        element: <Varsity />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
