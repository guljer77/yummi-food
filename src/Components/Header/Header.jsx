import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLocationDot, FaBarsStaggered } from "react-icons/fa6";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/light-logo.svg";
import { IoClose } from "react-icons/io5";
import Container from "../Container";
import { useAuth } from "../../Hooks/Auth/useAuth";

function Header() {
  const [menu, setMenu] = useState(false);
  const { user, logOutUser } = useAuth();
  const logoutFn = () => {
    logOutUser()
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="py-[12px] bg-primary">
        <Container>
          <div className="text-white lg:flex items-center justify-between">
            <div className="lg:block hidden">
              <span className="flex items-center gap-1 text-[16px] font-light">
                <FaLocationDot /> Gulshan, Dhaka-1212
              </span>
            </div>
            <div className="flex items-center gap-1 justify-center">
              <h4 className="text-[16px] font-light">We Are Social: </h4>
              <div className="flex items-center space-x-2">
                <Link className="w-[30px] h-[30px] bg-white text-primary flex items-center justify-center rounded-full">
                  <FaFacebookF />
                </Link>
                <Link className="w-[30px] h-[30px] bg-white text-primary flex items-center justify-center rounded-full">
                  <FaYoutube />
                </Link>
                <Link className="w-[30px] h-[30px] bg-white text-primary flex items-center justify-center rounded-full">
                  <FaInstagram />
                </Link>
                <Link className="w-[30px] h-[30px] bg-white text-primary flex items-center justify-center rounded-full">
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </Container>
      </div>
      <div className="bg-[#2B3940] py-5 shadow-md">
        <Container>
          <div className="flex items-center justify-between">
            <Link className="">
              <img src={Logo} alt="" className="lg:w-[160px] w-[120px]" />
            </Link>
            <div className="flex items-center gap-4">
              <div>
                <Link className="bg-primary px-5 py-2 rounded text-white uppercase font-medium">
                  Order Now
                </Link>
              </div>
              <div
                onClick={() => setMenu(!menu)}
                className="text-white text-[26px]"
              >
                <FaBarsStaggered />
              </div>
            </div>
          </div>
          {menu && (
            <div className="z-50 top-0 fixed h-full right-0 bg-gray-900 w-[300px]">
              <div
                onClick={() => setMenu(!menu)}
                className="flex pb-5 items-center justify-end text-white mt-5 mr-5 text-[26px]"
              >
                <IoClose />
              </div>
              <div>
                <ul>
                  <li className="block w-[100%] text-[18px] font-semibold text-white">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "bg-primary w-[100%] block" : ""
                      }
                    >
                      <span className="pl-5 py-3 block">Home</span>
                    </NavLink>
                  </li>
                  <li className="block text-[18px] font-semibold text-white">
                    <NavLink
                      to="/menu"
                      className={({ isActive }) =>
                        isActive ? "bg-primary w-[100%] block" : ""
                      }
                    >
                      <span className="pl-5 py-3 block">Menu</span>
                    </NavLink>
                  </li>
                  <li className="block text-[18px] font-semibold text-white">
                    <NavLink
                      to="/gallery"
                      className={({ isActive }) =>
                        isActive ? "bg-primary w-[100%] block" : ""
                      }
                    >
                      <span className="pl-5 py-3 block">Gallery</span>
                    </NavLink>
                  </li>
                  <li className="block text-[18px] font-semibold text-white">
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        isActive ? "bg-primary w-[100%] block" : ""
                      }
                    >
                      <span className="pl-5 py-3 block">Blog</span>
                    </NavLink>
                  </li>
                  {user ? (
                    <li onClick={logoutFn} className="block text-[18px] py-3 pl-5 font-semibold text-white">
                      Logout
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}

export default Header;
