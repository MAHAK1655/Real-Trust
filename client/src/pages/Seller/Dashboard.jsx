export default function SellerDashboard() {
    return (
      <div className="dashboard-page">
        <h2>Seller Dashboard</h2>
  
        <div className="dashboard-grid">
          <div className="card">
            <h3>Add Property</h3>
            <p>List a new property for sale</p>
            <button>Add Property</button>
          </div>
  
          <div className="card">
            <h3>My Properties</h3>
            <p>Manage your listed properties</p>
            <button>Manage</button>
          </div>
  
          <div className="card">
            <h3>Visit Requests</h3>
            <p>Approve or reject visit requests</p>
            <button>View Requests</button>
          </div>
  
          <div className="card">
            <h3>Payments Received</h3>
            <p>Track payments from customers</p>
            <button>View Payments</button>
          </div>
        </div>
      </div>
    );
  }
  