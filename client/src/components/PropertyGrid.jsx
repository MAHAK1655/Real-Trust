import PropertyCard from "./PropertyCard";

export default function PropertyGrid({ properties }) {
  if (!properties.length) {
    return <p style={{ textAlign: "center" }}>No properties found</p>;
  }

  return (
    <section className="property-grid">
      {properties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </section>
  );
}
