import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar sticky top-0 shadow-2xl z-50 bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">Cars</a>
      </div>
      <div className="flex-none">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <div className="indicator">
              <MagnifyingGlassIcon className="w-6" />
              <span className="badge badge-sm indicator-item">3</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="card dropdown-content card-compact mt-3 w-[35vh] bg-base-100 shadow"
          >
            <div className="card-body">
              <div className="card-actions">
                <button className="btn-primary btn-block btn">Buscar</button>
              </div>
            </div>
          </div>
        </div>
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
  );
};

export default NavBar;
