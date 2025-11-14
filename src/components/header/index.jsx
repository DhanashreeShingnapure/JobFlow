import { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import "./header.css";
import logoImg from '../../assets/jobflow2.png';
import userImg from '../../assets/user.jpg';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // dropdown state
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef();

  useEffect(() => {
    const token = Cookies.get("myToken");
    setIsLoggedIn(!!token);

    if (token) {
      fetchProfile(token);
    }

    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchProfile = async (token) => {
    try {
      const response = await fetch("https://apis.ccbp.in/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setProfile(data.profile_details);
      } else {
        console.error("Failed to fetch profile");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    Cookies.remove("myToken");
    navigate("/");
    setIsLoggedIn(false);
  };

  const handleSearch = (e) => e.preventDefault();

  return (
    <header className="Header">
      <div className="logo">
        <img src={logoImg} alt="logo" />
      </div>

      {location.pathname === "/jobs" && (
        <li className="search-bar-li">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search jobs..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </li>
      )}

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <ul className="HeaderList">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
          {isLoggedIn && <li><NavLink to="/jobs" className="nav-link">Jobs</NavLink></li>}
          <li><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
        </ul>

        {isLoggedIn ? (
          <div className="UserImg" ref={dropdownRef}>
            <img
              alt="userimg"
              src={profile?.profile_image_url || userImg}
              onClick={toggleDropdown}
              className="profile-img"
            />
            {dropdownOpen && (
              <ul className="profile-dropdown">
                <li onClick={() => navigate("/profile")}>View Profile</li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            )}
          </div>
        ) : (
          <button className="loginbtn" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
