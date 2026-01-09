export default function CustomerDashboard() {
    return (
      <div className="dashboard-page">
        <h2>Customer Dashboard</h2>
  
        <div className="dashboard-grid">
          <div className="card">
            <h3>My Profile</h3>
            <p>View and update your profile details</p>
            <button>View Profile</button>
          </div>
  
          <div className="card">
            <h3>Saved Properties</h3>
            <p>Properties you are interested in</p>
            <button>View Saved</button>
          </div>
  
          <div className="card">
            <h3>Scheduled Visits</h3>
            <p>Upcoming property visits</p>
            <button>View Schedule</button>
          </div>
  
          <div className="card">
            <h3>My Payments</h3>
            <p>Token & advance payments history</p>
            <button>View Payments</button>
          </div>
        </div>
      </div>
    );
  }
  