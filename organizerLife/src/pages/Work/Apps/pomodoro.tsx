import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Timer() {
  const [timeSelected, setTimeSelected] = useState<number>(1500000);
  const [timeLeft, setTimeLeft] = useState<number>(1500000);
  const [isActive, setIsActive] = useState<boolean>(false);
  const endTimeRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (!isActive) {
      setIsActive(true);
      endTimeRef.current = Date.now() + timeLeft;
      intervalRef.current = setInterval(() => {
        if (endTimeRef.current) {
          const newTime = endTimeRef.current - Date.now();
          if (newTime <= 0) {
            clearInterval(intervalRef.current!);
            setTimeLeft(0);
            setIsActive(false);
            alert("Terminado");
          } else {
            setTimeLeft(newTime);
          }
        }
      }, 10);
    }
  };

  const pause = () => {
    setIsActive(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const reset = () => {
    setIsActive(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeLeft(timeSelected);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    setTimeLeft(timeSelected);
  }, [timeSelected]);

  const formatTime = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    const centiseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}:${centiseconds}`;
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">{formatTime(timeLeft)}</h1>
      <div className="flex gap-2">
        <Button onClick={start}>Iniciar</Button>
        <Button onClick={pause}>Pausar</Button>
        <Button onClick={reset}>Reiniciar</Button>
      </div>
      <Select
        defaultValue="0"
        onValueChange={(value) => setTimeSelected(+value * 60 * 1000)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="25">25 Minutos</SelectItem>
          <SelectItem value="35">35 Minutos</SelectItem>
          <SelectItem value="45">45 Minutos</SelectItem>
          <SelectItem value="50">50 Minutos</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
