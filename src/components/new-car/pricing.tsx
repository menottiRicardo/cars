import {
  CheckBadgeIcon,
  CheckCircleIcon,
  CheckIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { selectedPlanAtom } from "./atoms";

const pricing = () => {
  const [selected, setSelected] = useAtom(selectedPlanAtom);

  return (
    <div className="">
      <div
        className={`relative mt-4 flex justify-around rounded-2xl bg-base-200 py-4 text-base-content ${
          selected === "1"
            ? "border-2 border-primary"
            : "border-2 border-base-200"
        }`}
        onClick={() => setSelected("1")}
      >
        {/* selected mark */}

        {selected === "1" && (
          <div className="absolute top-0 right-0 h-5 w-5 rounded-tr-xl bg-primary">
            <CheckIcon className="w-5 text-primary-content" />
          </div>
        )}
        {/* left side */}
        <div>
          {/* upper side */}
          <div className="flex items-center">
            <div className="mr-3 rounded-md bg-primary  p-2">
              <CheckIcon className="w-7 text-primary-content" />
            </div>
            <p className="text-2xl font-bold">Rapido</p>
          </div>

          {/* price */}
          <div className="mt-4">
            <h1 className="text-2xl font-bold">$8.99</h1>
            <span>+ ITBMS</span>
          </div>
        </div>
        {/* description */}
        <div className="grid">
          <div className="flex items-center gap-x-2">
            <CheckIcon className="w-5" />
            <span>15 dias valido</span>
          </div>
          <div className="flex items-center gap-x-2">
            <CheckIcon className="w-5" />
            <span>5 imagenes</span>
          </div>
          <div className="flex items-center gap-x-2">
            <CheckIcon className="w-5" />
            <span>1 video</span>
          </div>
        </div>
      </div>

      <div
        className={`relative mt-4 flex justify-around rounded-2xl bg-base-200 py-4 text-base-content ${
          selected === "2"
            ? "border-2 border-primary"
            : "border-2 border-base-200"
        }`}
        onClick={() => setSelected("2")}
      >
        {/* selected mark */}

        {selected === "2" && (
          <div className="absolute top-0 right-0 h-5 w-5 rounded-tr-xl bg-primary">
            <CheckIcon className="w-5 text-primary-content" />
          </div>
        )}
        {/* left side */}
        <div>
          {/* upper side */}
          <div className="flex items-center">
            <div className="mr-3 rounded-md bg-primary  p-2">
              <CheckCircleIcon className="w-7 text-primary-content" />
            </div>
            <p className="text-2xl font-bold">Basico</p>
          </div>

          {/* price */}
          <div className="mt-4">
            <h1 className="text-2xl font-bold">$12.99</h1>
            <span>+ ITBMS</span>
          </div>
        </div>
        {/* description */}
        <div className="grid">
          <div className="flex items-center gap-x-2">
            <CheckCircleIcon className="w-5" />
            <span>30 dias valido</span>
          </div>
          <div className="flex items-center gap-x-2">
            <CheckCircleIcon className="w-5" />
            <span>Estadisticas basicas</span>
          </div>
          <div className="flex items-center gap-x-2">
            <CheckCircleIcon className="w-5" />
            <span>Papeleo para traspaso</span>
          </div>
          <div className="flex items-center gap-x-2">
            <CheckCircleIcon className="w-5" />
            <span>2 videos</span>
          </div>
        </div>
      </div>

      <div
        className={`relative mt-4 flex justify-around rounded-2xl bg-base-200 p-4 text-base-content ${
          selected === "3"
            ? "border-2 border-primary"
            : "border-2 border-base-200"
        }`}
        onClick={() => setSelected("3")}
      >
        {/* selected mark */}

        {selected === "3" && (
          <div className="absolute top-0 right-0 h-5 w-5 rounded-tr-xl bg-primary">
            <CheckIcon className="w-5 text-primary-content" />
          </div>
        )}
        {/* left side */}
        <div>
          {/* upper side */}
          <div className="flex items-center">
            <div className="mr-3 rounded-md bg-primary  p-2">
              <CheckBadgeIcon className="w-7 text-primary-content" />
            </div>
            <p className="text-2xl font-bold">Pro</p>
          </div>

          {/* price */}
          <div className="mt-4">
            <h1 className="text-2xl font-bold">$18.99</h1>
            <span>+ ITBMS</span>
          </div>
        </div>
        {/* description */}
        <div className="grid">
          <div className="flex items-center gap-x-2">
            <CheckBadgeIcon className="w-5" />
            <span>45 dias valido</span>
          </div>
          <div className="flex items-center gap-x-2">
            <CheckBadgeIcon className="w-5" />
            <span>Estadisticas full</span>
          </div>

          <div className="flex items-center gap-x-2">
            <CheckBadgeIcon className="w-5" />
            <span>Papeleo para traspaso</span>
          </div>
          <div className="flex items-center gap-x-2">
            <CheckBadgeIcon className="w-5" />
            <span>1 Renovacion gratis</span>
          </div>
          <div className="flex items-center gap-x-2">
            <CheckBadgeIcon className="w-5" />
            <span>Valido por 30 dias</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pricing;
