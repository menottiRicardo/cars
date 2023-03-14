import { CheckIcon } from "@heroicons/react/24/outline";
import { useAtom } from "jotai";
import React from "react";
import { selectedPlanAtom } from "./atoms";
import Pricing from "./pricing";

const SelectPlan = ({ next }: { next: () => void }) => {
  const [selectedPlan, setSelectedPlan] = useAtom(selectedPlanAtom);
  return (
    <div className="relative flex pb-4">
      {/* <h2 className="text-center text-lg font-bold text-base-content">
        Publica con nosotros en 4 sencillos pasos
      </h2> */}
      <div>
        <h2 className="mt-2 text-center text-xl font-bold text-primary-focus">
          Nuestro Plan
        </h2>
        <p className="my-2 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta non
          velit ipsa quasi delectus
        </p>

        <div className="mt-4 grid rounded-md border-2 border-primary bg-white px-4 py-3">
          <h1 className="mb-3 text-2xl font-bold">Incluye:</h1>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5" />
            <span>Valido hasta que se venda</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5" />
            <span>Seguridad garantizada</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5" />
            <span>Uso de nuestro parking lot</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5" />
            <span>Sube hasta 25 images y 2 videos</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5" />
            <span>2 videos</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-5" />
            <span>Estadisticas</span>
          </div>

          <div className="mt-4">
            <div className="flex items-end">
              <h1 className="text-2xl font-bold text-primary">$9.99</h1>
              <span className="mb-1 text-xs">+ ITBMS</span>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full">
          <button
            className="btn-primary btn mt-2 flex w-full items-center justify-center"
            onClick={next}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
