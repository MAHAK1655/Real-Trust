import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import PropertyGrid from "../components/PropertyGrid";
import Testimonials from "../components/Testimonials";
import { searchProperties } from "../api/propertyApi";
import MapView from "../components/MapView";
import bg1 from "../assests/bg-1.jpg";
// import e11 from "../assests/ellipse-11.svg";
// import e12 from "../assests/ellipse-12.svg";
// import e13 from "../assests/ellipse-13.svg";
// import e28 from "../assests/ellipse-28.svg";
// import e29 from "../assests/ellipse-29.svg";
// import e31 from "../assests/ellipse-31.svg";
// import e33 from "../assests/ellipse-33.svg";
// import e35 from "../assests/ellipse-35.svg";
import heroImage from "../assests/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home1.svg";
import homeIcon from "../assests/home.svg";
import paintbrushIcon from "../assests/paintbrush-2.svg";
import circleDollarIcon from "../assests/circle-dollar-sign.svg";


export default function Home() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState("list");
  const [pages, setPages] = useState(0);
  const [filters, setFilters] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (filterParams, pageNo = 1) => {
    try {
      setLoading(true);
      setFilters(filterParams);
      const res = await searchProperties(filterParams, pageNo);
      setProperties(res.data.properties);
      setPages(res.data.totalPages || 0);
      setShowResults(true);
      // Scroll to results
      setTimeout(() => {
        document.getElementById("properties-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-wrapper">
      {/* Floating background shapes */}
      {/* <img src={e11} className="bg-shape s1" alt="" />
      <img src={e12} className="bg-shape s2" alt="" />
      <img src={e13} className="bg-shape s3" alt="" />
      <img src={e28} className="bg-shape s4" alt="" />
      <img src={e29} className="bg-shape s5" alt="" />
      <img src={e31} className="bg-shape s6" alt="" />
      <img src={e33} className="bg-shape s7" alt="" />
      <img src={e35} className="bg-shape s8" alt="" /> */}

      <img src={bg1} className="bg-shape s1" alt="" />
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">Real Estate Agency</span>
            <h1>Find Your Dream House By Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => navigate("/signup")}>
                Get Started
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById("properties-section")?.scrollIntoView({ behavior: "smooth" })}>
                Explore Properties
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Real Estate" />
          </div>
        </div>
        <div className="hero-search">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Services</span>
            <h2>Our Main Focus</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src={homeIcon} alt="Buy a home" />
              </div>
              <h3>Buy a home</h3>
              <p>Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
              <button className="service-btn">Find A Home</button>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src={paintbrushIcon} alt="Rent a home" />
              </div>
              <h3>Rent a home</h3>
              <p>Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
              <button className="service-btn">Find A Home</button>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src={circleDollarIcon} alt="Sell a home" />
              </div>
              <h3>Sell a home</h3>
              <p>Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
              <button className="service-btn">Find A Home</button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES SECTION */}
      {showResults && (
        <section id="properties-section" className="properties-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Properties</span>
              <h2>Featured Listings</h2>
            </div>
            
            <div className="view-toggle">
              <button 
                onClick={() => setView("list")} 
                className={view === "list" ? "active" : ""}
              >
                List View
              </button>
              <button 
                onClick={() => setView("map")} 
                className={view === "map" ? "active" : ""}
              >
                Map View
              </button>
            </div>

            {pages > 0 && (
              <div className="pagination">
                {Array.from({ length: pages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSearch(filters, i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}

            <div className="results">
              {loading ? (
                <div className="loading-container">
                  <div className="loading-spinner"></div>
                  <p className="loading-text">Loading properties...</p>
                </div>
              ) : view === "list" ? (
                <PropertyGrid properties={properties} />
              ) : (
                <MapView properties={properties} />
              )}
            </div>
          </div>
        </section>
      )}

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>560+</h3>
              <p>Total Area Sq</p>
            </div>
            <div className="stat-item">
              <h3>197K+</h3>
              <p>Apartments Sold</p>
            </div>
            <div className="stat-item">
              <h3>268+</h3>
              <p>Total Constructions</p>
            </div>
            <div className="stat-item">
              <h3>340+</h3>
              <p>Apartio Rooms</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
