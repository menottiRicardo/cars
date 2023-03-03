import { CalendarIcon } from "@heroicons/react/24/outline";
import React from "react";
import ImageCarousel from "./ImageCarousel";

const CarCard = () => {
  return (
    <div className="relative rounded-xl shadow-lg">
      <ImageCarousel />
      <div className="z-10 flex rounded-b-lg bg-base-100 p-2">
        <div className="flex w-full items-center justify-between">
          <div className="grid">
            <span className="text-sm font-medium text-primary">
              Honda, Civic
            </span>

            <div className="flex">
              <CalendarIcon className="w-5" />
              <span className="text-sm">2012</span>
            </div>
          </div>
          <span className="font-bold">$35, 648</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
