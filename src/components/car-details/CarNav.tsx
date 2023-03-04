import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

const CarNav = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-2xl px-4">
      <div className="flex flex-1 justify-between">
        {/* left side */}
        <div>
          <ArrowLeftIcon className="w-6" />
        </div>

        {/* center */}

        {/* right side */}
        <div>
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                <img src="/profile.jpeg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Perfil
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Anuncios</a>
              </li>
              <li>
                <a>Cerrar Sesion</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarNav;
