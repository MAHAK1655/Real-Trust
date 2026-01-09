import { useState } from "react";
import { searchProperties } from "../api/propertyApi";

export default function SearchBar({ onSearch }) {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });

  const submit = async (e) => {
    if (e) e.preventDefault();
    const params = new URLSearchParams();
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        params.append(key, filters[key]);
      }
    });
    const queryString = params.toString();
    if (queryString) {
      const res = await searchProperties(filters, 1);
      onSearch(filters, 1);
    } else {
      // If no filters, show all properties
      onSearch({}, 1);
    }
  };

  return (
    <form className="card" onSubmit={submit}>
      <div className="search-field">
        <label>Location</label>
        <input
          placeholder="Choose Area"
          value={filters.location}
          onChange={(e) =>
            setFilters({ ...filters, location: e.target.value })
          }
        />
      </div>

      <div className="search-field">
        <label>Property Type</label>
        <select
          value={filters.type}
          onChange={(e) =>
            setFilters({ ...filters, type: e.target.value })
          }
        >
          <option value="">All Types</option>
          <option value="plot">Plot</option>
          <option value="house">House</option>
          <option value="flat">Flat</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      <div className="search-field">
        <label>Min Price</label>
        <input
          placeholder="Min Price"
          type="number"
          value={filters.minPrice}
          onChange={(e) =>
            setFilters({ ...filters, minPrice: e.target.value })
          }
        />
      </div>

      <div className="search-field">
        <label>Max Price</label>
        <input
          placeholder="Max Price"
          type="number"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({ ...filters, maxPrice: e.target.value })
          }
        />
      </div>

      <div className="search-field">
        <label>&nbsp;</label>
        <button type="submit">Search Properties</button>
      </div>
    </form>
  );
}
