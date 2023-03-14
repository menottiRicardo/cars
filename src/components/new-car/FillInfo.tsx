import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { api } from "~/utils/api";
import DropdownInput from "../DropdownInput";
import SelectInput from "../SelectInput";

interface Make {
  id: number;
  name: string;
}
const FillInfo = ({ next }: { next: () => void }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [extraInfo, setExtraInfo] = useState({
    year: 0,
  });
  const { data: makes, isLoading } = api.car.getMakes.useQuery();

  const getModels = () => {
    const make = makes?.find((make) => make.name === selectedMake);
    const models = make?.models;
    return models?.map((model) => model.name) as string[];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setExtraInfo({
      ...extraInfo,
      [name]: value,
    });
  };
  return (
    <div className="relative">
      <h2 className="mt-2 text-center text-xl font-bold">
        Ahora conozcamos tu vehiculo
      </h2>

      <div className="mt-6 grid gap-y-6">
        {makes && (
          <div>
            <span className="text-base-content opacity-70">Marca</span>
            <SelectInput
              selected={selectedMake}
              setSelected={setSelectedMake}
              placeholder="Marca"
              values={makes.map((make) => make.name)}
            />
          </div>
        )}
        {selectedMake !== "" && (
          <div>
            <span className="text-base-content opacity-70">Modelo</span>
            <SelectInput
              placeholder="Modelo"
              values={getModels()}
              selected={selectedModel}
              setSelected={setSelectedModel}
            />
          </div>
        )}

        {selectedModel !== "" && (
          <div>
            <span className="text-base-content opacity-70">
              Tipo de Vehiculo
            </span>
            <DropdownInput
              placeholder="Tipo"
              values={["SUV", "Sedan", "Pick-Up", "Convertible"]}
              selected={selectedType}
              setSelected={setSelectedType}
            />
          </div>
        )}
        {selectedType !== "" && (
          <div className="grid">
            <span className="text-base-content opacity-70">Ano</span>
            <input
              type="number"
              name="year"
              placeholder="Ano"
              onChange={handleInputChange}
              className="input-bordered input-primary input w-full border-2 outline-none focus:outline-none"
            />
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
