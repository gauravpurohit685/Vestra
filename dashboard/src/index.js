import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import { CircularProgress } from "@mui/material";

import Home from "./components/Home";

const Root = () => {
    const [loadState, setLoadState] = useState(true);

    useEffect(() => {
        verifyToken();
    }, []);


    const verifyToken = async () => {
        try{
            const msg = await fetch(process.env.REACT_APP_VERIFY_API, {
                credentials: "include"
            });


            if(!msg.ok){
                const data = await msg.json();
                throw new Error(data.message);
            }

            const json = await msg.json();

            console.log("User is logged in!");
        }

        catch(err){
            console.log("Some error occured while verifying!");
            console.log("User is logged out!");
            window.location.replace(process.env.REACT_APP_FRONTENDURL);
        }

        finally{
            setTimeout(() => {
                setLoadState(false);
            }, 500)
        }
    }

    if(loadState){
      return(
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
              <CircularProgress />
            </div>
      )
    }

    return( 
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Root />
);
