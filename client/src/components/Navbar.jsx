import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assests/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const getDashboardPath = () => {
    if (!user) return "/login";
    const role = user.role?.toLowerCase();
    if (role === "customer") return "/customer/dashboard";
    if (role === "seller") return "/seller/dashboard";
    if (role === "admin") return "/admin/dashboard";
    return "/login";
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  // Get profile image: use custom avatar if available, otherwise generate from DiceBear API
  const getProfileImage = () => {
    if (!user) return null;
    if (user.avatar) return user.avatar;
    // Generate consistent avatar based on user id/email/name using DiceBear
    const seed = encodeURIComponent(user.id || user.email || user.name || "user");
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=667eea`;
  };

  // Fallback to initials-based avatar if DiceBear fails to load
  const getFallbackAvatar = () => {
    if (!user) return null;
    const name = (user.name || user.email || "U").split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=667eea&color=fff&size=128`;
  };

  const profileImage = getProfileImage();
  const fallbackAvatar = getFallbackAvatar();

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className={`nav-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <Link to="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logo} alt="RealEstate Logo" />
          {/* <span className="logo-text"></span> */}
        </Link>

      {/* Desktop Navigation */}
      <nav className="nav-desktop">
        <Link 
          to="/" 
          className={`nav-link ${isActive("/")}`}
        >
          Home
        </Link>
        
        {user ? (
          <>
            <Link 
              to={getDashboardPath()} 
              className={`nav-link ${isActive(getDashboardPath())}`}
            >
              Dashboard
            </Link>
            <div className="user-menu">
              <div className="user-profile">
                <img 
                  src={profileImage} 
                  alt={user.name || "Profile"} 
                  className="user-avatar"
                  onError={(e) => { e.target.onerror = null; e.target.src = fallbackAvatar; }}
                />
                <span className="user-name">
                  {user.name || user.email}
                </span>
              </div>
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className={`nav-link ${isActive("/login")}`}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className={`btn-primary ${isActive("/signup")}`}
            >
              Sign Up
            </Link>
          </>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={isMobileMenuOpen ? "open" : ""}></span>
        <span className={isMobileMenuOpen ? "open" : ""}></span>
        <span className={isMobileMenuOpen ? "open" : ""}></span>
      </button>

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${isMobileMenuOpen ? "open" : ""}`}>
        <Link 
          to="/" 
          className={`nav-link ${isActive("/")}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        
        {user ? (
          <>
            <Link 
              to={getDashboardPath()} 
              className={`nav-link ${isActive(getDashboardPath())}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="user-info-mobile">
              <div className="user-profile-mobile">
                <img 
                  src={profileImage} 
                  alt={user.name || "Profile"} 
                  className="user-avatar-mobile"
                  onError={(e) => { e.target.onerror = null; e.target.src = fallbackAvatar; }}
                />
                <p className="user-name-mobile">
                  {user.name || user.email}
                </p>
              </div>
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className={`nav-link ${isActive("/login")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className={`btn-primary ${isActive("/signup")}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </>
        )}
      </nav>
      </header>
    </>
  );
}
