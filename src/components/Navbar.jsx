import React from "react";
import { NavLink, Link } from "react-router-dom";

import "../App.css";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center gap-4 md:justify-end my-4 py-3 overflow-x-auto bg-[#111a39] md:bg-transparent scroller">
        <Link to="/">
          <button>Home</button>
        </Link>
        <NavLink to="/contribute">
          <button>Contribute</button>
        </NavLink>
        <NavLink to="/create">
          <button>Create</button>
        </NavLink>
        <NavLink to="/createsale">
          <button className="min-w-[120px]">Create Sale</button>
        </NavLink>
        <button className="bg-blue-600 relative z-10">Conntact</button>
      </div>
    </div>
  );
};

export default Navbar;
