import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "EazyRefund" },
    { to: "/advertising", label: "Advertising" },
    { to: "/auto&travels", label: "Auto & Travels" },
    { to: "/cleaningandmaintainces", label: "Cleaning and Maintenance" },
    { to: "/managementfees", label: "Management Fees" },
    { to: "/repairs", label: "Repairs" },
    { to: "/supplies", label: "Supplies" },
    { to: "/utilities", label: "Utilities" },
    { to: "/landscaping", label: "Land Scaping" },
    { to: "/activitylog", label: "Activity Log" },
    { to: "/guestregistrationform", label: "Guest Registration Form" },
  ];

  return (
    <nav>
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <button
          className="md:hidden text-2xl text-gray-800 ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>

        <div className="hidden md:flex gap-3 lg:gap-4 w-full whitespace-nowrap overflow-x-auto">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${isActive ? "bg-black text-white" : "text-black hover:bg-gray-100"
                } rounded-md px-4 py-1.5 transition-all duration-200`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 bg-white rounded-lg shadow-lg p-3 flex flex-col gap-2">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${isActive ? "bg-black text-white" : "text-black hover:bg-gray-100"
                } rounded-md px-4 py-2 transition-all duration-200`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
