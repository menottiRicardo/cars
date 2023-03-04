import { CalendarIcon, MapIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";
import ImageCarousel from "./ImageCarousel";

const CarCard = () => {
  return (
    <div className="relative rounded-xl shadow-lg">
      <ImageCarousel />
      <div className="z-10 flex rounded-b-lg bg-base-100 p-2">
        <div className="flex w-full items-center justify-between">
          <div className="grid gap-y-2">
            <span className="text-sm font-medium text-primary">
              Honda, Civic
            </span>

            <div className="flex">
              <CalendarIcon className="w-5 text-primary" />
              <span className="ml-1 text-sm">2012</span>
            </div>
            <div className="flex">
              <MapPinIcon className="w-5 text-primary" />
              <span className="ml-1 text-sm">Villa lucre</span>
            </div>
          </div>
          <div className="grid gap-y-2 justify-items-end">
            <span className="font-bold">$35, 648</span>
            <div className="flex">
              <MapIcon className="w-5 text-primary" />
              <span className="ml-1 text-sm">75,555 KM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
