import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <>
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto ">
          <div className="flex justify-between">
            <div className="logo">
              <Link to="/">
                <h1 className="text-4xl font-bold">
                  Edu<span className="text-teal-500">Lab</span>
                </h1>
              </Link>
            </div>
            <div className="nav_link">
              <nav className="flex sm:justify-center items-center space-x-4">
                {[
                  ["Home", "/home"],
                  ["About", "/about"],
                  ["Courses", "/courses"],
                  ["Blogs", "/blogs"],
                ].map(([title, url], index) => (
                  <NavLink
                    to={url}
                    key={index}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-lg px-4 py-2 font-medium bg-teal-300 text-slate-900"
                        : "rounded-lg px-4 py-2 text-slate-700 font-medium hover:bg-teal-300 hover:text-black"
                    }
                  >
                    {title}
                  </NavLink>
                ))}
                {/* user profile */}
                {mode ? (
                  <MdDarkMode
                    onClick={toggleMode}
                    className="cursor-pointer text-2xl"
                  />
                ) : (
                  <MdLightMode
                    onClick={toggleMode}
                    className="cursor-pointer text-2xl"
                  />
                )}
                <img
                  src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                  alt="robiul-islam"
                  className="w-[50px] h-[50px]"
                />
                <Link to="/login">
                  <button className="py-2 px-4 text-white font-semibold bg-red-600 rounded hover:bg-red-700">
                    Login
                  </button>
                </Link>
              </nav>
            </div>

            {/* Responsive */}

            <div className="flex items-center lg:hidden">
              {mode ? (
                <MdDarkMode
                  onClick={toggleMode}
                  className="cursor-pointer text-2xl"
                />
              ) : (
                <MdLightMode
                  onClick={toggleMode}
                  className="cursor-pointer text-2xl"
                />
              )}
              <img
                src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                alt="robiul-islam"
                className="w-[40px] h-[40px] ml-2"
              />
              <button
                className="p-2 -mr-1 transition duration-200 text-2xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <GrClose /> : <GiHamburgerMenu />}
              </button>
            </div>
          </div>
          <div className="bg-white">
            {isOpen && <hr className="my-2" />}
            {isOpen && (
              <nav className="flex_nav">
                {[
                  ["Home", "/home"],
                  ["About", "/about"],
                  ["Courses", "/courses"],
                  ["Blogs", "/blogs"],
                ].map(([title, url], index) => (
                  <NavLink
                    to={url}
                    key={index}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-lg px-3 py-2 font-medium bg-teal-300 text-slate-900"
                        : "rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-teal-300 hover:text-black my-1"
                    }
                  >
                    {title}
                  </NavLink>
                ))}
                <Link to="/login">
                  <button className="py-2 px-4 mt-2 text-white font-semibold bg-red-600 rounded hover:bg-red-700">
                    Login
                  </button>
                </Link>
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
