import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function GridRutines() {
  return (
    <div className={`grid grid-cols-2 grid-rows-2 gap-5 p-5 w-full h-96`}>
      <Card className="col-start-1 col-end-2 row-start-1 row-end-2 transition-transform duration-300 ease-in-out hover:scale-105 select-none cursor-pointer">
        <CardHeader>
          <CardTitle>Monedero</CardTitle>
          <CardDescription>Dinero Total</CardDescription>
          <CardAction>
            Ir <i className="fa fa-arrow-right"></i>
          </CardAction>
        </CardHeader>
      </Card>
      <Card className="col-start-2 col-end-3 row-start-1 row-end-3 transition-transform duration-300 ease-in-out hover:scale-105 select-none cursor-pointer">
        <CardHeader>
          <CardTitle>Monedero</CardTitle>
          <CardDescription>Dinero Total</CardDescription>
          <CardAction>
            Ir <i className="fa fa-arrow-right"></i>
          </CardAction>
        </CardHeader>
      </Card>
      <Card className="col-start-1 col-end-2 row-start-2 row-end-3 transition-transform duration-300 ease-in-out hover:scale-105 select-none cursor-pointer">
        <CardHeader>
          <CardTitle>Monedero</CardTitle>
          <CardDescription>Dinero Total</CardDescription>
          <CardAction>
            Ir <i className="fa fa-arrow-right"></i>
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  );
}
