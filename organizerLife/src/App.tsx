import { Routes, Route } from "react-router-dom";
import DashboardIndex from "./pages/dashboard/Index";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="mt-8 h-screen w-screen flex justify-center">
        <Routes>
          <Route path="/" element={<DashboardIndex />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
