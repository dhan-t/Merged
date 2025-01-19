import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard-page/Dashboard";
import LogisticsPage from "./pages/logistics-page/Logistics";
import TrackingDashboard from "./pages/tracking-page/TrackingDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/logistics" element={<LogisticsPage />} />
        <Route path="/reports" element={<TrackingDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
