import { Link } from "react-router-dom";
import pexels1 from "../assests/pexels-brett-sayles-2881232.svg";
import pexels2 from "../assests/pexels-brett-sayles-2881232-1.svg";
import pexels3 from "../assests/pexels-brett-sayles-2881232-2.svg";
import pexels4 from "../assests/pexels-brett-sayles-2881232-3.svg";
import pexels5 from "../assests/pexels-andres-ayrton-6578391.svg";
import pexels6 from "../assests/pexels-fauxels-3182834.svg";

const propertyImages = [pexels1, pexels2, pexels3, pexels4, pexels5, pexels6];

export default function PropertyCard({ property }) {
  // Get a consistent image based on property ID
  const imageIndex = property._id ? parseInt(property._id.slice(-1), 16) % propertyImages.length : 0;
  const propertyImage = propertyImages[imageIndex];

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image || propertyImage} alt={property.title || "Property"} />
        <div className="property-badge">
          {property.status || "For Sale"}
        </div>
      </div>

      <div className="property-body">
        <div className="property-location">
          <span>📍</span> {property.location || "Location not specified"}
        </div>
        <h3>{property.title || "Property Title"}</h3>
        <p className="property-description">
          {property.description || "Beautiful property in a great location. Perfect for families and professionals."}
        </p>

        <div className="property-features">
          <span>🛏️ {property.bedrooms || "N/A"} Bedrooms</span>
          <span>🚿 {property.bathrooms || "N/A"} Bathrooms</span>
          <span>📐 {property.area || "N/A"} Sq Ft</span>
        </div>

        <div className="property-footer">
          <div className="property-price">
            <span className="price">₹{property.price?.toLocaleString() || "0"}</span>
            {property.type && <span className="type">{property.type}</span>}
          </div>
          <Link to={`/property/${property.slug || property._id}`}>
            <button className="btn-view">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
