import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export default function MapView({ properties }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 28.6139, lng: 77.209 }}
      mapContainerStyle={{ width: "100%", height: "450px" }}
    >
      {properties.map((p) => (
        <Marker
          key={p._id}
          position={{ lat: p.lat, lng: p.lng }}
          title={p.title}
        />
      ))}
    </GoogleMap>
  );
}
