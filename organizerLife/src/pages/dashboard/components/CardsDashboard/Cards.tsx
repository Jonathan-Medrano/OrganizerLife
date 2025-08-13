import CardDashboard from "./CardDashboard";

export default function Cards() {
  return (
    <div className="flex flex-row items-center justify-center gap-5 max-w-10/12 p-5">
      <CardDashboard
        title={"Finanzas"}
        desc={"Controla y Organiza tus Ingresos, Gastos y Finanzas."}
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
  );
}
