import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Profile = () => {

    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_GETPROFILE, {
                credentials: "include"
            });

            if(!response.ok){
                throw new Error("Could not fetch the profile data!");
            }

            const data = await response.json();

            setProfile(data);
        }
        catch(err){
            console.log(err.message);
            setIsError(true);
        }
        finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        try{
            const res = await fetch(process.env.REACT_APP_LOGOUT, {
                method: "POST",
                credentials: "include",
                headers: {
                "Content-Type": "application/json"
                }
            })

            if(!res.ok){
                throw new Error("Coule not logout!");
            }

            window.location.replace(process.env.REACT_APP_FRONTENDURL);
        }
        catch(err){
            console.log(err.message);
            alert("logout failed");
        }
    }

    if (isLoading){
        return (
            <div className="profile-loader">
                <CircularProgress />
            </div>
        );
    }

    if(isError){
        return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
            <p style = {{textAlign: "center"}}>Error getting the holdings data!</p>
        </div>
        )
    }

    const { user, account, stats } = profile;

    return (
        <div className="profile-container">

            <div className="profile-card">

                <div className="profile-avatar">
                    {user.firstName[0]}
                    {user.lastName[0]}
                </div>

                <h2>
                    {user.firstName} {user.lastName}
                </h2>

                <p>{user.emailId}</p>

            </div>

            <div className="profile-section">

                <h3>Account Balances</h3>

                <div className="profile-row">
                    <span>Cash Account</span>
                    <span>₹ {account.cashBalance.toLocaleString()}</span>
                </div>

                <div className="profile-row">
                    <span>Trading Account</span>
                    <span>₹ {account.tradingBalance.toLocaleString()}</span>
                </div>

                <div className="profile-row total">
                    <span>Total Funds</span>
                    <span>
                        ₹ {(account.cashBalance + account.tradingBalance).toLocaleString()}
                    </span>
                </div>

            </div>

            <div className="profile-section">

                <h3>Trading Summary</h3>

                <div className="profile-row">
                    <span>Holdings</span>
                    <span>{stats.holdings}</span>
                </div>

                <div className="profile-row">
                    <span>Open Positions</span>
                    <span>{stats.positions}</span>
                </div>

                <div className="profile-row">
                    <span>Orders</span>
                    <span>{stats.orders}</span>
                </div>

            </div>

            <div className="profile-section">

                <h3>Account Details</h3>

                <div className="profile-row">
                    <span>Currency</span>
                    <span>{account.currency}</span>
                </div>

                <div className="profile-row">
                    <span>Member Since</span>
                    <span>
                        {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                </div>

            </div>

            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>

        </div>
    );
};

export default Profile;