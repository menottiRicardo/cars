import { useQuery } from "@tanstack/react-query";
import React from "react";
import SelectInput from "../SelectInput";

interface Make {
  id: number;
  name: string;
}
const FillInfo = ({ next }: { next: () => void }) => {
  const { data: makes, isLoading } = useQuery<string[]>({
    queryKey: ["makes"],
    queryFn: async () => {
      const res = await fetch("/api/makes");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="relative">
      <h2 className="mt-2 text-center text-xl font-bold">
        Ahora conozcamos tu vehiculo
      </h2>

      <div className="mt-6 grid gap-4">
        {makes && (
          <div>
            <span className="text-base-content opacity-70">
              Seleciona la marca
            </span>
            <SelectInput placeholder="Marca" values={makes} />{" "}
          </div>
        )}
        {makes && (
          <div>
            <span className="text-base-content opacity-70">
              Seleciona el Modelo
            </span>
            <SelectInput placeholder="Marca" values={makes} />{" "}
          </div>
        )}
      </div>
      <button className="btn-primary btn mt-4 flex w-full items-center justify-center">
        Siguiente
      </button>
    </div>
  );
};

export default FillInfo;
