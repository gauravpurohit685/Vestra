import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Profile = () => {

    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_GETPROFILE, {
                credentials: "include"
            });

            const data = await response.json();

            setProfile(data);
        }
        finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        try{
            await fetch(process.env.REACT_APP_LOGOUT, {
                method: "POST",
                credentials: "include",
            })
        }
        catch(err){

        }
    }

    if (isLoading)
        return (
            <div className="profile-loader">
                <CircularProgress />
            </div>
        );

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

            <button className="logout-btn">
                Logout
            </button>

        </div>
    );
};

export default Profile;