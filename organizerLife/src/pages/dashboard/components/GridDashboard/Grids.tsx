import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GridFinances from "./GridFinances";
import GridTodoApp from "./GridTodoApp";
import GridRutines from "./GridRutines";

export default function Grids() {
  return (
    <div className="w-10/12">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <GridFinances />
          </CarouselItem>
          <CarouselItem>
            <GridRutines />
          </CarouselItem>
          <CarouselItem>
            <GridTodoApp />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
