import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./profile.css";
import Header from "../header";
import Footer from "../footer";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("myToken");
        if (!token) {
            navigate("/login");
            return;
        }
        fetchProfile(token);
    }, []);

    const fetchProfile = async (token) => {
        try {
            const res = await fetch("https://apis.ccbp.in/profile", {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.ok) {
                const data = await res.json();
                setProfile(data.profile_details);
            } else {
                console.error("Failed to fetch profile");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Header />
            <div className="pf-profile-container">
                {profile && (
                    <div className="pf-profile-card">
                        <img
                            src={profile.profile_image_url}
                            alt="profile"
                            className="pf-profile-img"
                        />
                        <div className="pf-profile-details">
                            <h2 className="pf-profile-name">{profile.name}</h2>
                            <p className="pf-profile-bio">{profile.short_bio}</p>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Profile;
