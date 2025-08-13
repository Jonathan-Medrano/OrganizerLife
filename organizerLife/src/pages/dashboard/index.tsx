import CardDashboard from "./components/CardsDashboard/CardDashboard";
import Cards from "./components/CardsDashboard/Cards";
import Grids from "./components/GridDashboard/Grids";

export default function DashboardIndex() {
  return (
    <div className="max-w-max flex flex-col items-center justify-start">
      <h1 className="text-3xl border-b-2 mb-8 border-black">ORGANIZER LIFE</h1>
      <Cards />
      <Grids />
    </div>
  );
}
