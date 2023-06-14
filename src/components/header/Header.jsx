import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrAdd } from "react-icons/gr";
import SearchBox from "../SearchBox/SearchBox";
import Logo from "../Logo/Logo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const showsInWatchlist = useSelector((state) => state.watchlist);
  return (
    <nav className="md:flex items-center justify-between xl:mb-4">
      <div className="md:flex items-center justify-between w-full">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center">
            {/* <GiHamburgerMenu size={30} className="mr-1" /> */}
            <Logo />
          </div>
          <Link to={"watchlist"} className="pl-4">
            <GrAdd className="inline items-center translate-y-[-10%]" />
            WatchList
            <span className="text-white bg-blue-800 px-2 py-1 rounded-md ml-1">
              {showsInWatchlist.length}
            </span>
          </Link>
        </div>
        <SearchBox />
      </div>
    </nav>
  );
};

export default Header;
