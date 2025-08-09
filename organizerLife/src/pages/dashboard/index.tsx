import React from "react";
import CardDashboard from "./components/CardDashboard";

export default function DashboardIndex() {
  return (
    <div className="flex flex-col gap-14 justify-start items-center w-screen h-screen mt-14">
      <div>
        <h1>Organizer Life</h1>
      </div>
      <div className="flex flex-row gap-4">
        <CardDashboard
          title={"Finanzas"}
          desc={
            "Controla y Organiza tus Ingresos, Gastos y Finanzas con nuestro Sistema"
          }
        />
        <CardDashboard
          title={"Rutinas"}
          desc={"Planifica tus Rutinas y Alarmas con nuestro Sistema."}
        />
        <CardDashboard
          title={"Tareas/Notas"}
          desc={"Crea Tareas o Notas para tener orden en todo lo que haces."}
        />
      </div>
    </div>
  );
}
