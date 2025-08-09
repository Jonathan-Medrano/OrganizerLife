import { Routes, Route } from "react-router-dom";
import DashboardIndex from "./pages/dashboard";

function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<DashboardIndex />} />
      </Routes>
    </div>
  );
}

export default App;
