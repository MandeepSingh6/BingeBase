import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="bg-blue-800 text-white px-2 rounded-md py-.5">
      <h1 className="text-3xl">
        <span className="font-bold text-orange-500">B</span>inge
        <span className="font-bold text-orange-500">B</span>ase
      </h1>
    </Link>
  );
};

export default Logo;
