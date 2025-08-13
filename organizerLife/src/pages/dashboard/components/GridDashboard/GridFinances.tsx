import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function GridFinances() {
  return (
    <div className={`grid grid-cols-2 grid-rows-2 gap-5 p-5 w-full h-96`}>
      <Card className="col-start-1 col-end-2 row-start-1 row-end-2 transition-transform duration-300 ease-in-out hover:scale-105 select-none cursor-pointer">
        <CardHeader>
          <CardTitle>Monedero</CardTitle>
          <CardDescription>Total Ahorrado</CardDescription>
          <CardAction>
            Ir <i className="fa fa-arrow-right"></i>
          </CardAction>
        </CardHeader>
        <CardContent className="text-3xl text-end">$200.521,40</CardContent>
      </Card>
      <Card className="col-start-2 col-end-3 row-start-1 row-end-3 transition-transform duration-300 ease-in-out hover:scale-105 select-none cursor-pointer">
        <CardHeader>
          <CardTitle>Activos</CardTitle>
          <CardDescription>Activos Registrados</CardDescription>
          <CardAction>
            Ir <i className="fa fa-arrow-right"></i>
          </CardAction>
        </CardHeader>
        <CardContent className="text-xl">
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </CardContent>
      </Card>
      <Card className="col-start-1 col-end-2 row-start-2 row-end-3 transition-transform duration-300 ease-in-out hover:scale-105 select-none cursor-pointer">
        <CardHeader>
          <CardTitle>Monedero Máximo</CardTitle>
          <CardDescription>Total Máximo Ahorrado</CardDescription>
          <CardAction>
            Ir <i className="fa fa-arrow-right"></i>
          </CardAction>
          <CardContent className="text-3xl text-end">$5.000.521,40</CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
