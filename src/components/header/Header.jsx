import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import SearchBox from "../SearchBox/SearchBox";
import Logo from "../Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggle } from "../../store/themeSlice";

const Header = () => {
  const showsInWatchlist = useSelector((state) => state.watchlist);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <nav className="md:flex items-center justify-between xl:mb-4">
      <div className="md:flex items-center justify-between w-full">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center">
            {/* <GiHamburgerMenu size={30} className="mr-1" /> */}
            <Logo />
            <p
              onClick={() => {
                dispatch(toggle());
              }}
            >
              {theme ? (
                <BsMoonFill size={25} className="ml-2" />
              ) : (
                <BsSunFill size={25} className="ml-2" />
              )}
            </p>
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
