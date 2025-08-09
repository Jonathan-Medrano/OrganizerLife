import React from "react";
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
    <Card className="w-sm" onClick={() => {}}>
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
