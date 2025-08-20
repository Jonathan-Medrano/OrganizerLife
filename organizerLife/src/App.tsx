import { Routes, Route } from "react-router-dom";
import DashboardIndex from "./pages/dashboard/Index";
import Pomodoro from "./pages/Work/Apps/pomodoro";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="mt-8 h-screen w-screen flex justify-center">
        <Routes>
          <Route path="/" element={<DashboardIndex />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
