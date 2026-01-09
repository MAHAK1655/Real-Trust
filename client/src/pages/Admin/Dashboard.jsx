import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/analytics", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="dashboard">
      <div className="card">Users: {data.users}</div>
      <div className="card">Properties: {data.properties}</div>
      <div className="card">Revenue: ₹{data.revenue}</div>
    </div>
  );
}
// Dashboard.jsx
const Dashboard = () => {
  // your component code
  return (
    <div>Dashboard</div>
  );
};

export default AdminDashboard; // Make sure this line exists