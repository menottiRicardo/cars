import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { api } from "~/utils/api";
import DropdownInput from "../DropdownInput";
import SelectInput from "../SelectInput";

interface Make {
  id: number;
  name: string;
}
const FillInfo = ({ next, carId }: { next: () => void; carId: string }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedTraction, setSelectedTraction] = useState("");
  const [extraInfo, setExtraInfo] = useState({
    year: "",
    kms: "",
    price: "",
  });
  const { data: makes, isLoading } = api.car.getMakes.useQuery();
  const updateCar = api.car.updateCar.useMutation();
  const getModels = () => {
    const make = makes?.find((make) => make.name === selectedMake);
    const models = make?.models;
    return models?.map((model) => model.name) as string[];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setExtraInfo({
      ...extraInfo,
      [name]: value,
    });
  };

  const submit = () => {
    updateCar.mutateAsync({
      id: carId,
      make: selectedMake,
      model: selectedModel,
      traction: selectedTraction,
      year: parseInt(extraInfo.year),
      kms: parseInt(extraInfo.kms),
      price: parseInt(extraInfo.price),
    });
  };
  return (
    <div className="relative mb-24">
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
        {selectedModel !== "" && (
          <div>
            <span className="text-base-content opacity-70">Tracion</span>
            <DropdownInput
              placeholder="Tipo"
              values={["4x2", "4x4", "Hibrido", "Electrico"]}
              selected={selectedTraction}
              setSelected={setSelectedTraction}
            />
          </div>
        )}
        {selectedModel !== "" && (
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
        {selectedModel !== "" && (
          <div className="grid">
            <span className="text-base-content opacity-70">Kilometraje</span>
            <input
              type="number"
              name="kms"
              placeholder="Kilometraje"
              onChange={handleInputChange}
              className="input-bordered input-primary input w-full border-2 outline-none focus:outline-none"
            />
          </div>
        )}
        {selectedModel !== "" && (
          <div className="grid">
            <span className="text-base-content opacity-70">Precio</span>
            <input
              type="number"
              name="price"
              placeholder="Precio"
              onChange={handleInputChange}
              className="input-bordered input-primary input w-full border-2 outline-none focus:outline-none"
            />
          </div>
        )}
      </div>
      <button
        className="btn-primary btn mt-4 flex w-full items-center justify-center"
        onClick={submit}
      >
        Siguiente
      </button>
    </div>
  );
};

export default FillInfo;
