import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  title: string;
  desc: string;
}

export default function CardDashboard({ title, desc }: Props) {
  return (
    <Card
      className="w-sm transition-transform duration-300 ease-in-out hover:scale-105 select-none cursor-pointer"
      onClick={() => {}}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
        <CardAction>
          Ir <i className="fa fa-arrow-right"></i>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
