import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard-page/Dashboard";
import LogisticsPage from "./pages/logistics-page/Logistics";
import ReportPage from "./pages/reports-page/ReportsPage";
import TrackingDashboard from "./pages/tracking-page/TrackingDashboard";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/logistics" element={<LogisticsPage />} />
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/tracking" element={<TrackingDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
