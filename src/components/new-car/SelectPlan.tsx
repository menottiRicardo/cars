import { useAtom } from "jotai";
import React from "react";
import { selectedPlanAtom } from "./atoms";
import Pricing from "./pricing";

const SelectPlan = ({ next }: { next: () => void }) => {
  const [selectedPlan, setSelectedPlan] = useAtom(selectedPlanAtom);
  return (
    <div>
      {/* <h2 className="text-center text-lg font-bold text-base-content">
        Publica con nosotros en 4 sencillos pasos
      </h2> */}
      <h2 className="mt-2 text-center text-xl font-bold text-primary-focus">
        Selecciona un plan
      </h2>
      <p className="text-center my-2">
        Todos nuestros planes incluyen uso nuestro parking lot, papeleo de
        traspaso y asesoria.
      </p>

      <Pricing />
      {selectedPlan && (
        <button
          className="btn-primary btn mt-2 flex w-full items-center justify-center"
          onClick={next}
        >
          Siguiente
        </button>
      )}
    </div>
  );
};

export default SelectPlan;
