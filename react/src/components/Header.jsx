import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border h-20 flex justify-between p-6 shadow-lg">
      <div className="items-center">Logo</div>
      <div className="items-center">
        <input type="text" placeholder="Search" className="border rounded-sm" />
      </div>
      <div className="items-center">
        <Link to="/signup">SignUp</Link>
      </div>
    </header>
  );
};

export default Header;
